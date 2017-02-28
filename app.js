//require('./api/data/mongodb_connection').open();
require('./api/data/mongodb');
var express = require('express');
var path = require('path');
var app = express();
var routes = require('./api/routers');

app.set('port',9090);

var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log("Application started on port: "+ port);
})

app.use(express.static(path.join(__dirname,'public')));

app.use('/api', routes);

