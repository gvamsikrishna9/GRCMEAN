var express = require('express');
var router = express.Router();

var trns_cntlr = require('../controllers/translation_controller');

router
    .route('/grc')
    .get(trns_cntlr.getEnSegmentsForBuild);

router
    .route('/grc/all')
    .get(trns_cntlr.getAllTranslations);

router
    .route('/grc/translation')
    .get(trns_cntlr.getTranslatedSegment);

router
    .route('/grc/compare/builds')
    .get(trns_cntlr.getEnSegmentsForCompare);

module.exports = router;