import {
  RESELLER_REQUEST,
  RESELLER_SUCCESS,
  RESELLER_FAILURE
} from './resellers.actions'

const initialState = {
  response: {},
  error: {},
  loading: null,
  sendAt: null,
  receivedAt: null,
  requestTime: null,
}

function getTime(sent, received) {
  return (received - sent)
}

function getRequestTime(sendAt){
  const now = Date.now();

  return {
    receivedAt: now,
    requestTime: getTime(sendAt, now)
  }
}
export default function resellersReducer(state = initialState, action) {

  switch (action.type) {
    case RESELLER_REQUEST:
      return {
        ...state,
        sendAt: Date.now(),
        loading: true,
      }

    case RESELLER_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.payload,
        ...getRequestTime(state.sendAt)
      };

    case RESELLER_FAILURE:

    console.log('##', action.payloadRESELLER_)
      return {
        ...state,
        loading: false,        
        error: action.payload,
        ...getRequestTime(state.sendAt)

      }
    default:
      return state;
  }
}