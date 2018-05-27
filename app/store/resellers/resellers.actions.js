import http from '../../api'

export const RESELLERS_REQUEST = 'RESELLERS_REQUEST'
export const RESELLERS_SUCCESS = 'RESELLERS_SUCCESS'
export const RESELLERS_FAILURE = 'RESELLERS_FAILURE'

export function fetchResellers() {
    return dispatch => {
        dispatch({
            type: RESELLERS_REQUEST
        })
        return http.get('/resellers')
            .then(response => dispatch({
                type: RESELLERS_SUCCESS,
                payload: response.data
            }))
            .catch(error => dispatch({
                type: RESELLERS_FAILURE,
                payload: error.response
            }))
    }
}