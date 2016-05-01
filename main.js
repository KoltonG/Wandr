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
app.controller("SearchController",function($scope, $state) {
  /*************************************/
  /********** SCOPE VARIABLES **********/
  /*************************************/
  console.log('Hit Search Controller');
  $scope.countryName = $state.params.country.toLowerCase();
});
app.controller("WandrController",function($scope, $state) {
  /*************************************/
  /********** SCOPE VARIABLES **********/
  /*************************************/
  $scope.itemArray = [
    {id: 1, name: 'Nepal'},
    {id: 2, name: 'Colombia'},
    {id: 3, name: 'Cuba'},
    {id: 4, name: 'Jordan'},
    {id: 6, name: 'Romania'},
    {id: 7, name: 'El Salvador'},
    {id: 8, name: 'Wales'},
    {id: 9, name: 'Kenya'},
    {id: 10, name: 'Sri Lanka'},
  ];
  $scope.selected = { value: $scope.itemArray[0] };


  /*************************************/
  /********** SCOPE FUNCTIONS **********/
  /*************************************/
  $scope.searchLocation = function(country) {
    console.log('Going to ' + country);
    $state.go('search', {
      country: country
    });
  };
});