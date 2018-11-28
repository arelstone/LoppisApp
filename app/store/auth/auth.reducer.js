import {
	SET_TOKEN
} from './auth.actions'

const initialState = {
	token: null
}

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case SET_TOKEN:
			return {
				token: action.payload.token
			};
		default:
			return state;
	}
}