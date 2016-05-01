/*************************/
/********** APP **********/
/*************************/
var app = angular.module('wandr', ['ui.router']);


/****************************/
/********** CONFIG **********/
/****************************/
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    // Landing
    .state('Landing', {
      url: '/',
      templateUrl: 'partials/landing'
    });

    // For any unmatched url, redirect to /login
    $urlRouterProvider.otherwise('/');

    // Allowing HTML 5 mode
    $locationProvider.html5Mode(true);
});