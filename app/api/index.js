import axios from 'axios'

const baseURL = 'http://192.168.10.10/api'

const httpClient = axios.create({
	baseURL
})

export const apiMiddleware = ({
	dispatch,
	getState
}) => {
	return next => action =>
		typeof action === 'object' && action.url && !action.type ?
		makeRequest({ ...action,
			dispatch,
			getState
		}) :
		next(action)
}

const makeRequest = async ({
	getState,
	dispatch,
	url,
	method = 'GET',
	types,
	body
}) => {
	if (!Boolean(types.start)) {
		throw new Error('No `START` type provided')
	}

	if (!Boolean(types.success)) {
		throw new Error('No `SUCCESS` type provided')
	}

	if (!Boolean(types.error)) {
		throw new Error('No `ERROR` type provided')
	}

	await dispatch({
		type: types.start
	})

	const state = getState();

	const headers = Boolean(state.auth.token) ? {
		'Content-Type': 'applicaiton/json',
		'Authorization': `Bearer ${state.auth.token}`
	} : {
		'Content-Type': 'application/json',
	}

	const options = {
		method,
		url,
		data: createBody(body),
		headers,
		json: true
	}

	const request = await httpClient(options)

	try {
		return onSuccess(request, dispatch, types);
	} catch (error) {
		return onError(error, dispatch, types)
	}
}

const createBody = body => {
	return JSON.stringify(body)
}

const onError = (error, dispatch, types) => {
	console.error(error)
	dispatch({
		type: types.error,
		payload: error
	})
}

const onSuccess = (response, dispatch, types) => {
	const payload = response.data.data;
	const success = Array.from(types.success);

	return success.forEach(type => dispatch({
		type,
		payload,
	}));
}