import {SET_TITLE} from './header.actions'

const initialState = {
    title: 'Loppis',
    leftIcon: '',
    leftAction: '',
    rightIcon: '',
    rightAction: ''
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TITLE:
      return {
        title: action.payload
      };
    default:
      return state;
  }
}