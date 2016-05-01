/*jslint esnext: true */
/******************************/
/********** PACKAGES **********/
/******************************/
const router     = require('express').Router();


/****************************/
/********** ROUTES **********/
/****************************/
// INDEX
router.get('/', function(req, res) {
  req.log.info({status: 200}, 'SUCCESS - Rendering Landing');
  res.render('index');
});

// PARTIALS
router.get('/partials/:name', function(req, res) {
  var partial = req.params.name;
  req.log.info({status: 200, 'partial': partial});
  res.render('partials/' + partial);
});


/*****************************/
/********** EXPORTS **********/
/*****************************/
module.exports = router;
