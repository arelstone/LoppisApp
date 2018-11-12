import http from '@api'

export const AUCTION_HOUSE_START = 'AUCTION_HOUSE_START'
export const AUCTION_HOUSE_SUCCESS = 'AUCTION_HOUSE_SUCCESS'


export const fetchAuctionHouses = () => async dispatch => {

    await dispatch({
        type: AUCTION_HOUSE_START
    })
    const payload = await http.get('/auction-houses')

    await dispatch({
        type: AUCTION_HOUSE_SUCCESS,
        payload
    })
}