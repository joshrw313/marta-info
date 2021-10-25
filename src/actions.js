
export const GETALLBUSSTART = 'getAllBusStart';
export const GETALLBUSSUCCESS = 'getAllBusSuccess';
export const GETALLBUSFAILURE = 'getAllBusFailure';
export const GETBUSBYROUTESTART = 'getBusByRouteStart';
export const GETBUSBYROUTESUCCESS = 'getBusByRouteSuccess';
export const GETBUSBYROUTEFAILURE = 'getBusByRouteFailure';
export const GETRAILSTART = 'getRailStart';
export const GETRAILSUCCESS = 'getRailSuccess';
export const GETRAILFAILURE = 'getRailFailure';

function actionGetAllBusStart() {
	return {
		type: GETALLBUSSTART ,
	};
}

function actionGetAllBusSuccess(data) {
	console.log('success')
	return ({
		type: GETALLBUSSUCCESS ,
		payload: {
			...data
		}
	});
}

function actionGetAllBusFailure(errMsg) {
	return {
		type: GETALLBUSFAILURE ,
		payload: { errMsg }
	};
}

function actionGetBusByRouteStart() {
	return {
		type: GETBUSBYROUTESTART ,
	};
}

function actionGetBusByRouteSuccess(data) {
	return {
		type: GETBUSBYROUTESUCCESS ,
		payload: {
			...data
		}
	};
}

function actionGetBusByRouteFailure(errMsg) {
	return {
		type: GETBUSBYROUTEFAILURE ,
		payload: { errMsg }
	};
}

function actionGetRailStart() {
	return {
		type: GETRAILSTART ,
	};
}

function actionGetRailSuccess(data) {
	return {
		type: GETRAILSUCCESS ,
		payload: {
			...data
		}
	};
}

function actionGetRailFailure(errMsg) {
	return {
		type: GETRAILFAILURE ,
		payload: { errMsg }
	};
}

export const getBusAll = () => {
	return dispatch => {
		dispatch(actionGetAllBusStart());
		console.log('fetch')
	fetch(`http://localhost:8080/api/bus/all`)
		.then(res => res.json())
		.then(res => dispatch(actionGetAllBusSuccess(res)))
		.catch(err => dispatch(actionGetAllBusFailure(err)))
	

}
}

export const getBusByRoute = (route) => {
	return dispatch => {
		dispatch(actionGetBusByRouteStart());

	fetch(`http://localhost:8080/api/bus/${route}`)
		.then(res => res.json())
		.then(res => dispatch(actionGetBusByRouteSuccess(res)))
		.catch(err => dispatch(actionGetBusByRouteFailure(err)))
	}

}

export const getRail = () => {
	return dispatch => {
		dispatch(actionGetRailStart());

	fetch(`http://localhost:8080/api/train/all`)
		.then(res => res.json())
		.then(res => dispatch(actionGetRailSuccess(res)))
		.catch(err => dispatch(actionGetRailFailure(err.message)))
	}
}
