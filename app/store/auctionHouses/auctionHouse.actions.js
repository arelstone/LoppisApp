export const AUCTION_HOUSE_START = 'AUCTION_HOUSE_START'
export const AUCTION_HOUSE_SUCCESS = 'AUCTION_HOUSE_SUCCESS'
export const AUCTION_HOUSE_ERROR = 'AUCTION_HOUSE_ERROR'

export const fetchAuctionHouses = () => async dispatch => {
    await dispatch({
        url: '/auction-houses',
        types: {
            start: AUCTION_HOUSE_START,
            success: [AUCTION_HOUSE_SUCCESS],
            error: AUCTION_HOUSE_ERROR
        },
    })
}
