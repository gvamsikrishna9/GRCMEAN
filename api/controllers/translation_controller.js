var mongoose = require('mongoose');
var Grcsegment = mongoose.model('Grcsegment');

module.exports.getAllTranslations = function(req, res){
    Grcsegment
        .find()
        .exec(function(err, segments){
            console.log("Total english segments in all builds are: "+segments.length);
            res
             .json(segments);
        })
};

module.exports.getEnSegmentsForBuild = function(req, res) {
    var srcBuildId = "";
    if(req.query && req.query.srcBuildId){
        srcBuildId = req.query.srcBuildId;
    }
    
    Grcsegment
        .find({"buildId":srcBuildId}, {'enSegment':true, 'key':true, '_id':false})
        .exec(function(err, segments){
            console.log("Total segments in the build "+srcBuildId+" are : "+segments.length);
            res
             .json(segments);
        })
};

module.exports.getTranslatedSegment = function(req, res){
    var srcBuildId = "";
    var key = "";
    var transLang = "";
    
    if(req.query && req.query.srcBuildId){
        srcBuildId = req.query.srcBuildId;
    }
    if(req.query && req.query.key){
        key = req.query.key;
    }
    if(req.query && req.query.transLang){
        transLang = req.query.transLang;
    }
    

    Grcsegment
        .find({"buildId": srcBuildId, "key": key}, {_id:false})
        .select(transLang)
        .exec(function(err, segment){
            console.log("Required translation segment is: "+segment);
            
            res
             .json(segment);
        })
};

module.exports.getEnSegmentsForCompare = function(req, res){
    var targetBuildId = "";
    var key = "";
    
    if(req.query && req.query.targetBuildId){
        targetBuildId = req.query.targetBuildId;
    }
    if(req.query && req.query.key)  {
        key = req.query.key;
    }

    Grcsegment
        .find({"buildId":targetBuildId, "key": key}, {'enSegment':true, '_id':false})
        .exec(function(err, segment){
             console.log("Required english segment in target build is: "+ segment)
                res.json(segment);
            });
}