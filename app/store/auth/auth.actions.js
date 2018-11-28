export const AUTH_SET_TOKEN = 'AUTH_SET_TOKEN'
export const AUTH_START = 'AUTH_START'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAILED = 'AUTH_FAILED'
export const RESET_LOCAL_STATE = 'RESET_LOCAL_STATE'


export const login = ({email, password}) => async dispatch => {
	return await dispatch({
		url: '/login',
		method: 'post',
		body: {
			email,
			password
		},
		types: {
			start: AUTH_START,
			success: [AUTH_SET_TOKEN, AUTH_SUCCESS],
			error: AUTH_FAILED
		}
	})
}

export const logout = () => async dispatch => {
	return await dispatch({
		type: RESET_LOCAL_STATE
	})
}