var express = require(‘express’);
var port = process.env.PORT || 3001;
var app = express();
var http = require(‘http’).Server(app);
var io = require(‘socket.io’)(http);

app.use(express.static(api-app + “/app”));

http.listen(port);
