import { combineReducers } from 'redux';
/*import {
GETALLBUSSTART, 
GETALLBUSSUCCESS, 
GETALLBUSFAILURE,
GETBUSBYROUTESTART, 
GETBUSBYROUTESUCCESS,
GETBUSBYROUTEFAILURE,
GETRAILSTART,
GETRAILSUCCESS,
GETRAILFAILURE
}
from './actions';
*/

const GETALLBUSSTART = 'getAllBusStart';
const GETALLBUSSUCCESS = 'getAllBusSuccess';
const GETALLBUSFAILURE = 'getAllBusFailure';
const GETBUSBYROUTESTART = 'getBusByRouteStart';
const GETBUSBYROUTESUCCESS = 'getBusByRouteSuccess';
const GETBUSBYROUTEFAILURE = 'getBusByRouteFailure';
const GETRAILSTART = 'getRailStart';
const GETRAILSUCCESS = 'getRailSuccess';
const GETRAILFAILURE = 'getRailFailure';

const defaultState = {
	loggedIn: false,
	
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

function setBusAll(state = defaultState, action) {
	switch(action.type) {
		case GETALLBUSSTART:
			return {
				...state.busAll,
				loading: true,
				error: null,
				data: null
			}
		case GETALLBUSSUCCESS: {
			console.log('successAgain');
			return {
				...state.busAll,
				loading: false,
				error: null,
				data: action.payload
				}
			}
		case GETALLBUSFAILURE: {
			return {
				...state.busAll,
				loading: false,
				error: action.payload
			}
		}
		default:
			return state
	}
}

function setBusByRoute(state = defaultState, action) {
	switch(action.type) {
		case GETBUSBYROUTESTART:
			return {
				...state.busByRoute,
				loading: true
			}
		case GETBUSBYROUTESUCCESS: {
			return {
				...state.busByRoute,
				loading: false,
				error: null,
				data: action.payload
				}
			}
		case GETBUSBYROUTEFAILURE: {
			return {
				...state.busByRoute,
				loading: false,
				error: action.payload
			}
		}
		default:
			return state
	}
}

function setRail(state = defaultState, action) {
	switch(action.type) {
		case GETRAILSTART:
			return {
				...state.rail,
				loading: true
			}
		case GETRAILSUCCESS: {
			return {
				...state.rail,
				loading: false,
				error: null,
				data: action.payload
				}
			}
		case GETRAILFAILURE: {
			return {
				...state.rail,
				loading: false,
				error: action.payload
			}
		}
		default:
			return state
	}
}


export const rootReducer = combineReducers({
	busAll: setBusAll,
	busByRoute: setBusByRoute,
	rail: setRail
});