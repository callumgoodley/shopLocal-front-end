import {LOGOUT_USER, LOGIN_USER, ADD_USER, DELETE_USER} from './types';

export const login = user => ({
  type: LOGIN_USER,
  data: user,
});

export const logout = user => ({
  type: LOGOUT_USER,
  data: null,
});
