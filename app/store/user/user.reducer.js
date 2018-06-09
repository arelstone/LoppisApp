import {
  SET_TOKEN,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  REGISTER_REQUEST
} from './user.actions'

const initialState = {
  token: '',
  user: {},
  loading: false,
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        token: action.payload
      };
    case AUTH_SUCCESS:
      return {
        token: action.payload.token,
        user: action.payload.data,
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}