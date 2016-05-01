app.controller("SearchController",function($scope, $state) {
  /*************************************/
  /********** SCOPE VARIABLES **********/
  /*************************************/
  console.log('Hit Search Controller');
  $scope.countryName = $state.params.country.toLowerCase();
});