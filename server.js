const http = require('http');
const url = require('url');
const router = require('./router')


function start(route, handle) {
    function onRequest(request, response) {
        const pathname = url.parse(request.url).pathname;
        console.log('Request for' + pathname + ' received');

        route(handle, pathname);

        response.writeHead(200, {'Content-type': 'text/plain'});
        response.write('Hello World');
        response.end();
    }

    http.createServer(onRequest).listen(3000);

    console.log("Server has started.");
}

exports.start = start;
