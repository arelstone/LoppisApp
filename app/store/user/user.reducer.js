import {
	AUTH_START,
	AUTH_SUCCESS,
	RESET_LOCAL_STATE
} from '@store/auth/auth.actions'

const initialState = {
	email: null,
	name: null,
	loading: false,
}

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case AUTH_START:
			return {
				...state,
				loading: true
			};
		case AUTH_SUCCESS:
			return {
				...state,
				loading: false,
				email: action.payload.email,
				name: action.payload.name,
			};
		case RESET_LOCAL_STATE:
			return initialState;
		default:
			return state;
	}
}