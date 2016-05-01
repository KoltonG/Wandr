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