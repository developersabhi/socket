var app = require('express')();
var http = require('http').Server(app);
var path = require('path');
const { Socket } = require('socket.io');

var io = require('socket.io')(http);

app.get('/', function(req, res){

    var options ={
        root: path.join(__dirname)
    }
    var fileName = 'index.html';
    res.sendFile(fileName,options);
    // res.sendFile('index.html',options)
});
//conection connected  or disconnected
//on event catch krne k liye
io.on('connection', function(socket) {
    console.log('A user connected');

  socket.on('myCustomEventFromClientSide',function(data){
    console.log(data)
  })

    socket.on('disconnect', function(){
        console.log('A user disconnected');
    })
});

http.listen(3001, function() {
    console.log(`Server is ready on 3001`)
});