import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';

const defaultState = {
	busAll: {
		loading: false,
		error: null,
		data: null
	},

	busByRoute: {
		loading: false,
		error: null,
		data: null
	},

	rail: {
		loading: false,
		error: null,
		data: null
	}
}

export const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));