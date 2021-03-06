/*jslint esnext: true */
/******************************/
/********** PACKAGES **********/
/******************************/
const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');

/***********************************/
/********** CONFIGURATION **********/
/***********************************/
app.disable('x-powered-by'); // Disabling due to security concern
app.set('views', __dirname + '/app/public/views/');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/*********************************/
/********** MIDDLEWARES **********/
/*********************************/
app.use(require('./app/middlewares/logger.js')); // Logger


/**********************************/
/********** STATIC FILES **********/
/**********************************/
app.use(express.static('./app/public/views/partials'));
app.use(express.static('./app/public/images'));
app.use(express.static('./'));



/****************************/
/********** ROUTES **********/
/****************************/
app.use(require('./app/controllers'));


/*************************/
/********** RUN **********/
/*************************/
app.listen(process.env.PORT);
console.log('Listening On Port ' + process.env.PORT);

