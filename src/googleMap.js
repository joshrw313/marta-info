import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
	apiKey: "AIzaSyBAtGYZEH7X_Ezlolefmx45V40l5eermV0",
	version: "weekly",
	libraries: ["places"]
});

window.loader = loader;

const loadMap = function (center, zoom) {

	const script = document.createElement('script');

	const callBack = document.createTextNode(`
			console.log("map script");
			window.loader.loadCallback(e => {
				if (e) {
					console.log(e);
				} else {
					new google.maps.Map(document.getElementById('map'), {center: ${center}, zoom: ${zoom}})
				}
			});
	`)

	script.appendChild(callBack);

	document.body.appendChild(script);

};

export default loadMap;
