import { LOAD_BUSINESSES } from '../actions/types';

const initialState = {
	businesses: null
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
