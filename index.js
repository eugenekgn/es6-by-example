const http = require('http');
const finalHandler = require('finalhandler')
const serveStatic = require('serve-static');

const port = process.env.PORT || '4444';
const host = process.env.HOST || '127.0.0.1';

var serve = serveStatic(__dirname, {'index': ['tests/index.html']})

http.createServer(function (req, res) {
  done = finalHandler(req, res);
  serve(req, res, done);
}).listen(port, host);

