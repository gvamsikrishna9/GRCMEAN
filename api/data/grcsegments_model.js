var mongoose = require('mongoose');
var grcSegmentSchema = new mongoose.Schema({
    key : {
        type : String,
        required : true
    },
    buildId : {
        type : String,
        required : true
    },
    enSegment : String,
    frSegment : String,
    deSegment : String,
    koSegment : String,
    zhSegment : String,
    jpSegment : String
});

mongoose.model('Grcsegment', grcSegmentSchema);