const http = require('http');


function start() {
    function onRequest(request, response) {
        console.log("Request Received");
        response.writeHead(200, {'Content-type': 'text/plain'});
        response.write('Hello World');
        response.end();
    }

    http.createServer(onRequest).listen(3000);

    console.log("Server has started.");
}

exports.start = start;
