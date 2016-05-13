var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 5000;
var listen = process.env.LISTEN || '127.0.0.1';
var server = require('substance/util/server');

server.serveStyles(app, '/app.css', path.join(__dirname, 'app', 'app.scss'));
server.serveJS(app, '/app.js', path.join(__dirname, 'app', 'app.js'));
app.use(express.static(path.join(__dirname)));
app.use('/fonts', express.static(path.join(__dirname, 'node_modules/font-awesome/fonts')));

app.listen(port, listen, function() {
  console.log("Substance Examples running on port " + port);
  console.log("http://"+listen+":"+port+"/");
});

module.exports = app;
