const http = require('http');
const express = require('express');
const socketio = require('socket.io');

var clickCount = 0;

const app=express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(__dirname +'/views'));

io.on('connection', function(client) { 
	console.log('Client connected...'); 
      client.on('clicked', function(data) {
          clickCount++;
          io.emit('buttonUpdate', clickCount);   
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=> console.log(`Server running on ${PORT}`));

