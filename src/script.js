busRoutes = require('./stations.js');
fs = require('fs');

const makeObject = (routes) => {
	let objArray = '';
	routes.forEach(route => {
			const routeObj = `{ id: "${busRoutes.indexOf(route)}", route: "${busRoutes.indexOf(route)}", text: "${route}", name: "${route.toUpperCase()}"}, \n`;
			objArray += routeObj;
		})
		console.log(objArray)
		return objArray;
		;
}

let BusRoutes = makeObject(busRoutes);

fs.writeFile('railStations.js', BusRoutes, function (err) {
	if (err) {
		console.log(err);
	}
});



