import http from '../../api'

export const RESELLER_REQUEST = 'RESELLER_REQUEST'
export const RESELLER_SUCCESS = 'RESELLER_SUCCESS'
export const RESELLER_FAILURE = 'RESELLER_FAILURE'

export function fetchResellers() {
    return dispatch => {
        dispatch({
            type: RESELLER_REQUEST
        })
        return http.get('/resellers')
            .then(response => dispatch({
                type: RESELLER_SUCCESS,
                payload: response.data
            }))
            .catch(error => dispatch({
                type: RESELLER_FAILURE,
                payload: error.response
            }))
    }
}