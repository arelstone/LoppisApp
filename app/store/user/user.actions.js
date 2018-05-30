import http from '@api'


export const SET_TOKEN = 'SET_TOKEN'
export const AUTH_REQUEST = 'AUTH_REQUEST'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAILURE = 'AUTH_FAILURE'



export function setToken(token) {
    return {
        type: SET_TOKEN,
        payload: token
    };
}

export function handleAuth(credentials) {
    return (dispatch, getState) => {
        dispatch({
            type: AUTH_REQUEST
        })
        const form = new FormData();
        form.append('email', credentials.email);
        form.append('password', credentials.password);

        return http.post(`/login`, form)
            .then(response => dispatch({
                type: AUTH_SUCCESS,
                payload: response.data
            }))
            .catch(error => dispatch({
                type: AUTH_FAILURE,
                payload: error.response
            }))
    }
}