const http = require('http');


module.exports = function(options,res) {
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
	res.send(JSON.parse(body.toString()));
	// ...and/or process the entire body here.
  })
});

request.on('error', function(e) {
  console.log('ERROR: ' + e.message);
});
}
