/*jslint node:true */
/*jslint esnext: true */
'use strict';
/******************************/
/********** PACKAGES **********/
/******************************/
const express       = require('express');
const app           = express();
const bodyParser    = require('bodyParser');

/***********************************/
/********** CONFIGURATION **********/
/***********************************/
app.disable('x-powered-by'); // Disabling due to security concern
app.set('views', './app/public/views');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/*********************************/
/********** MIDDLEWARES **********/
/*********************************/
app.use(require('./app/middlewares/logger.js')); // Logger


/**********************************/
/********** STATIC FILES **********/
/**********************************/
app.use(express.static('./app/public/images'));
app.use(express.static('./app/public/javascripts/*.js'));
app.use(express.static('./app/public/stylesheets/css/*.css'));


