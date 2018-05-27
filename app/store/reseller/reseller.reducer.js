import {
    RESELLER_REQUEST,
    RESELLER_SUCCESS,
    RESELLER_FAILURE
  } from './reseller.actions'
  
  const initialState = {
      error: {},
      loading: null
  }
  
  export default function resellersReducer(state = initialState, action) {
  
    switch (action.type) {
      case RESELLER_REQUEST:
        return {
          ...state,
          loading: true
        }
  
      case RESELLER_SUCCESS:
        return {
          ...state,
          ...action.payload.data,
          loading: false,
        };
  
      case RESELLER_FAILURE:
        return {
          ...state,
          loading: false,        
          error: action.payload,
  
        }

      default:
        return state;
    }
  }