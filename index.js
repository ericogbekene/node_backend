var http = require('http');

http.createServer(function (request, response) {
	// request logic goes here
	// HTTP Status: 200 : OK
    // Content Type: text/html
    response.writeHead(200, {'Content-Type': 'text/html'});
     
    // Send the response body as "Hello World!"  
    response.end('Welcome User');
}).listen(8080);
