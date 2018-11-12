import {
  AUCTION_HOUSE_START,
  AUCTION_HOUSE_SUCCESS,
} from './auctionHouse.actions'

const initialState = {
  items: {},
  links: {},
  meta: {},
  error: {},
  loading: false,
}

export default function auctionHouseReducer(state = initialState, action) {
  switch (action.type) {
    case AUCTION_HOUSE_START:
      return {
        ...state,
        loading: true
      }
    case AUCTION_HOUSE_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.data.data,
        links: action.payload.data.links
      }
    default:
      return state;
  }
}