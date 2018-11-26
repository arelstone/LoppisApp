import http from '@api'
//import Formdata from 'object-to-formdata'
export const SET_TOKEN = 'SET_TOKEN'
export const AUTH_START = 'AUTH_START'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAILED = 'AUTH_FAILED'


export function setToken(token) {
	return {
		type: SET_TOKEN,
		payload: token
	};
}

export const login = ({email, password}) => async dispatch => {
	
	dispatch({type: AUTH_START})
	
	const payload = await http.post('/login', FormBody({email, password}))
console.log('###', payload.data.data)
	return dispatch({
		type: AUTH_SUCCESS,
		payload: payload.data.data
	})

	return;

}

const FormBody = data => {
	const form = new FormData()
	for ( const key in data ) {
		form.append(key, data[key]);
	}
	
	return form;
}