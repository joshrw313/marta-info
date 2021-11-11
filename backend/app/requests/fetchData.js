const http = require('http');


module.exports = function(options,res,vehicle) {
	const request = http.get(options, async function(response) {
  		console.log('STATUS: ' + response.statusCode);
  		console.log('HEADERS: ' + JSON.stringify(response.headers));

	// Buffer the body entirely for processing as a whole.
  	const bodyChunks = [];
	await response.on('data', function(chunk) {
    		// You can process streamed parts here...
    		bodyChunks.push(chunk);
  	}).on('end', function() {
		const body = Buffer.concat(bodyChunks);
		if (vehicle) {
			const data = JSON.parse(body.toString());
			let allBusses = Object.keys(data);
			const thisBus = allBusses.filter(bus => data[bus].VEHICLE === vehicle);
			res.send(data[thisBus]);
		} else {
			res.send(JSON.parse(body.toString()));
		}
  	})
});

request.on('error', function(e) {
  console.log('ERROR: ' + e.message);
});
}
