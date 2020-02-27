import {createStore, combineReducers} from 'redux';
import {loginReducer, businessReducer} from './reducer/reducer';

const rootReducer = combineReducers({

	userReducer: loginReducer,
	reducer: businessReducer
});

export const configureStore = () => createStore(rootReducer);
