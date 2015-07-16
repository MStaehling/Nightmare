/* global angular Firebase*/
(function() {
  'use strict';

  // var Firebase_Url = 'https://fiery-inferno-4540.firebaseio.com';


  angular.module('nightmare')
    .controller('SubmitController', function ($scope, $firebaseArray, $location) {
    function empty(answer) {
      if (answer) {
        return answer;
      } else {
        return null;
      }
    }
    var ref = new Firebase('https://fiery-inferno-4540.firebaseio.com');
    $scope.list = $firebaseArray(ref);
    // $scope.text = 'hello';
    $scope.submit = function() {
      $scope.list.$add({
        stop: $scope.newStop,
        street: $scope.streetAddress,
        city: $scope.city,
        state: $scope.state,
        zipCode: $scope.zipCode,
        camera: empty($scope.camera),
        guard: empty($scope.guard),
        security: empty($scope.security),
        light: empty($scope.light),
        parking: empty($scope.parking),
        hazards: empty($scope.hazards),
        deliveryInstructions: empty($scope.deliveryInstructions),
        info: empty($scope.info)
      });
      $scope.newStop = '';
      $scope.streetAddress = '';
      $scope.city = '';
      $scope.state = '';
      $scope.zipCode = '';
      $scope.camera = '';
      $scope.guard = '';
      $scope.security = '';
      $scope.light = '';
      $scope.parking = '';
      $scope.hazards = '';
      $scope.deliveryInstructions = '';
      $scope.info = '';

    };

    
    console.log($scope.list);
  });

})();
