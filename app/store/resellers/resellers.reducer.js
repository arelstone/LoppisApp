import {
  RESELLERS_REQUEST,
  RESELLERS_SUCCESS,
  RESELLERS_FAILURE
} from './resellers.actions'

const initialState = {
  response: {},
  error: {},
  loading: null,
  data: {}
}

export default function resellersReducer(state = initialState, action) {

  switch (action.type) {
    case RESELLERS_REQUEST:
      return {
        ...state,
        loading: state === null ? true : false,
      }

    case RESELLERS_SUCCESS:
    console.log('###acttion', action, state)
      return {
        ...state,
        loading: false,
        response: {...state.response, ...action.payload}, // @todo append to state
      };

    case RESELLERS_FAILURE:
      return {
        ...state,
        loading: false,        
        error: action.payload

      }
    default:
      return state;
  }
}