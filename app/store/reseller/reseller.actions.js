import http from '../../api'

export const RESELLER_REQUEST = 'RESELLER_REQUEST'
export const RESELLER_SUCCESS = 'RESELLER_SUCCESS'
export const RESELLER_FAILURE = 'RESELLER_FAILURE'
export const RESELLER_RESET = 'RESELLER_RESET'

export function fetchReseller(id) {
    return dispatch => {
        dispatch({
            type: RESELLER_REQUEST
        })
        return http.get(`/resellers/${id}`)
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


export function resetReseller(){
    return dispatch => dispatch({type:RESELLER_RESET})
}