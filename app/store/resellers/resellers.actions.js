import http from '../../api'

export const RESELLERS_REQUEST = 'RESELLERS_REQUEST'
export const RESELLERS_SUCCESS = 'RESELLERS_SUCCESS'
export const RESELLERS_FAILURE = 'RESELLERS_FAILURE'

export function fetchResellers(page = 1) {
    return (dispatch, getState) => {
        dispatch({
            type: RESELLERS_REQUEST
        })
        return http.get(`/resellers?page=${page}`)
            .then(response => dispatch({
                type: RESELLERS_SUCCESS,
                payload: response.data
            }))
            .then(resp => {
                const {
                    links
                } = getState().resellers.response
                if (links.next) {
                    const nextPage = links.next.split('?page=')[1]
                    dispatch(fetchResellers(nextPage))
                }

            })
            .catch(error => dispatch({
                type: RESELLERS_FAILURE,
                payload: error.response
            }))
    }
}