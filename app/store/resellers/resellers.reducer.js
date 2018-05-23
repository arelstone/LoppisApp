import {RESLLERS_FETCH_ALL} from './resellers.actions'

const initialState = []

export default function resellersReducer(state = initialState, action) {
  switch (action.type) {
    case RESLLERS_FETCH_ALL:
      return {
        ...state, 
        ...action.payload
      };
    default:
      return state;
  }
}