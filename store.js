import {createStore, combineReducers} from 'redux';
import {loginReducer} from './reducer/userReducer';

const rootReducer = combineReducers({
  userReducer: loginReducer,
});

export const configureStore = () => createStore(rootReducer);
