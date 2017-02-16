var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const MongoClient = require('mongodb').MongoClient;
const util = require('util');

var db;
var current_user_count;

MongoClient.connect('mongodb://shubham:shubham@127.0.0.1:27017/chats', (err, database) => {
    if(err){
      return console.log(err);
    }
    db = database;
    current_user_count = 0;
    http.listen(3000, function(){
    console.log('listening to 3000');
    });
})

app.get('/', function(req,resp){
        resp.send('<h1>Hello world</h1>');
    });

io.on('connection', function(socket){
  console.log('a user connected');
  var datetime = new Date();
  console.log(datetime);
  current_user_count = current_user_count + 1;
  console.log("number of current_user: " + current_user_count);
  db.collection('chatCollection').find().sort({datetime:1}).limit(30).toArray( (err, results)=>{
    console.log("this is list " + util.inspect(results, false, null));
    socket.emit('history', results);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
    current_user_count = current_user_count - 1;
  });

  socket.on('new message', function(msg){
    console.log('message: ' + msg);
    msg.datetime = datetime;
    db.collection('chatCollection').save(msg, (err,result)=>{
      if(err){
        return console.log(err);
      }
      console.log("stored to db");
    })
    io.emit('chat message', msg);

  });

});
