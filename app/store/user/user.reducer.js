import { SET_TOKEN } from './user.actions'

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
    default:
      return state;
  }
}