/*************************/
/********** APP **********/
/*************************/
var app = angular.module('wandr', ['ui.router', 'ui.select', 'ngSanitize']);


/****************************/
/********** CONFIG **********/
/****************************/
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    // Landing
    .state('landing', {
      url: '/',
      templateUrl: 'partials/landing'
    })
    // Search
    .state('search', {
      url: '/search/:country',
      templateUrl: 'partials/search',
      controller: 'SearchController'
    });

    // For any unmatched url, redirect to /login
    $urlRouterProvider.otherwise('/');

    // Allowing HTML 5 mode
    $locationProvider.html5Mode(true);
});