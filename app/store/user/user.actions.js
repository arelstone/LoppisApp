import http from '@api'
import {
    fillForm
} from '@forms'
import {
    showToast
} from '@utils/toastUtils'


export const SET_TOKEN = 'SET_TOKEN'
export const AUTH_REQUEST = 'AUTH_REQUEST'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAILURE = 'AUTH_FAILURE'
export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'



export function setToken(token) {
    return {
        type: SET_TOKEN,
        payload: token
    };
}

export function handleRegister(credentials) {
    return dispatch => {
        dispatch({
            type: REGISTER_REQUEST
        })

        return http.post('/register', fillForm(credentials))
            .then(response => dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data
            }))
            .then(() => dispatch(handleAuth({
                email: credentials.email,
                password: credentials.password
            })))
            .catch(error => {
                const {
                    data
                } = error.response
                showToast({
                    text: data[Object.keys(data)[0]][0],
                    type: 'warning'
                })
                
                throw new Error();
            })
    }
}

export function handleAuth(credentials) {
    return dispatch => {
        dispatch({
            type: AUTH_REQUEST
        })

        return http.post(`/login`, fillForm(credentials))
            .then(response => dispatch({
                type: AUTH_SUCCESS,
                payload: response.data
            }))
            .then(() => showToast({
                text: 'Welcome! You are now loggedin'
            }))
            .catch(error => {
                showToast({
                    text: 'Wrong credentials',
                    type: 'warning'
                })
                
                throw new Error();

            })
    }
}