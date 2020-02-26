import { ADD_USER, LOGIN_USER, LOGOUT_USER, DELETE_USER, LOAD_BUSINESSES } from '../actions/types';

const initialState = {
	loggedInUser: null,
	businesses: null
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return {
				...state,
				loggedInUser: action.data
			};

		case LOGOUT_USER:
			return {
				...state,
				loggedInUser: action.data
			};
		default:
			return state;
	}
};

export const businessReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_BUSINESSES:
			return {
				...state,
				businesses: action.data
			};
		default:
			return state;
	}
};
