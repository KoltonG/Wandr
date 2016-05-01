/*jslint node:true */
/*jslint esnext: true */
'use strict';
/******************************/
/********** PACKAGES **********/
/******************************/
const bunyan  = require('bunyan');
var log = bunyan.createLogger({
  name: "Wandr",
  port: process.env.PORT,
  streams: [{
    stream: process.stdout,
    level: 'info'
  }]
});

/*****************************/
/********** EXPORTS **********/
/*****************************/
module.exports = function(req, res, next) {
  req.log = log.child({ip: req.headers['x-forwarded-for'], endpoint: req.url.substring(0, 140)});
  next();
};