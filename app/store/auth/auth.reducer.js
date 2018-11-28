import {
	AUTH_SET_TOKEN,
	RESET_LOCAL_STATE
} from './auth.actions'

const initialState = {
	token: null
}

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case AUTH_SET_TOKEN:
			return {
				token: action.payload.token
			};
		case RESET_LOCAL_STATE:
			return initialState;
		default:
			return state;
	}
}