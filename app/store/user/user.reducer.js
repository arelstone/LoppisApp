import {
	SET_TOKEN,
	AUTH_START,
	AUTH_SUCCESS,
	AUTH_FAILED
} from './user.actions'

const initialState = {
	email: '',
	name: '',
	token: '',
	loading: false,
}

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case SET_TOKEN:
			return {
				token: action.payload
			};
		case AUTH_START:
			return {
				...state,
				loading: true
			};
		case AUTH_SUCCESS:
			return {
				...state,
				loading: false,
				...action.payload
			};
		default:
			return state;
	}
}