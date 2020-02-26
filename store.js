import { createStore, combineReducers } from 'redux';
import { loginReducer, businessReducer } from './reducer/reducer';

const rootReducer = combineReducers({
	reducer: loginReducer,
	reducer: businessReducer
});

export const configureStore = () => createStore(rootReducer);
