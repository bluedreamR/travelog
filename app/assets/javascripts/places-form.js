angular.module( "Test", ['ngAutocomplete'])
  .controller("TestCtrl",function ($scope) {

    $scope.result1 = '';
    $scope.options1 = null;
    $scope.details1 = '';



    $scope.result2 = '';
    $scope.options2 = {
      country: 'my',
      types: '(cities)'
    };    $scope.details2 = '';
    
    
    
    $scope.result3 = '';
    $scope.options3 = {
      country: 'my',
      types: 'establishment'
    };
    $scope.details3 = '';
  });