/*jslint esnext: true */
/******************************/
/********** PACKAGES **********/
/******************************/
const express = require('express');
const router  = express.Router();


/****************************/
/********** ROUTES **********/
/****************************/
router.use('/', require('./route'));

// Redirect to login page when match fails
/*router.get('/*', function(req, res) {
  res.redirect('/login');
});*/

/*****************************/
/********** EXPORTS **********/
/*****************************/
module.exports = router;