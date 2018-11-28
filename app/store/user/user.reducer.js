import {
	AUTH_START,
	AUTH_SUCCESS,
	AUTH_FAILED
} from './user.actions'

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
		default:
			return state;
	}
}