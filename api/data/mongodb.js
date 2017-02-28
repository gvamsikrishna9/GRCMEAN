var mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost:27017/grcmean';

mongoose.connect(dbUrl);

mongoose.connection.on('connected', function(){
    console.log("Mongodb is connected through Mongoose. "+dbUrl);
});

mongoose.connection.on('disconnected', function(){
    console.log("Mongodb is disconnected. ");
});

mongoose.connection.on('error', function(err){
    console.log("Mongodb connection error: "+err);
});

require('./grcsegments_model');