import {AUTH_SUCCESS, AUTH_START, AUTH_FAILED} from '@store/user/user.actions'
export const SET_TOKEN = 'SET_TOKEN'

export const login = ({email, password}) => async dispatch => {
	
	dispatch({
		url: '/login',
		method: 'post',
		body: {
			email,
			password
		},
		types: {
			start: AUTH_START,
			success: [SET_TOKEN, AUTH_SUCCESS],
			error: AUTH_FAILED
		}
	})
	

	return;

}