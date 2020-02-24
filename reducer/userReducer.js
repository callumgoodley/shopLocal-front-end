import {ADD_USER, LOGIN_USER, LOGOUT_USER, DELETE_USER} from '../actions/types';

const initialState = {
  loggedInUser: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loggedInUser: action.data,
      };

    case LOGOUT_USER:
      return {
        ...state,
        loggedInUser: action.data,
      };
    default:
      return state;
  }
};
