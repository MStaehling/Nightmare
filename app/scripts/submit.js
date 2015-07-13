/* global angular firebase*/
(function() {
  'use strict';

  var Firebase_Url = 'https://fiery-inferno-4540.firebaseio.com';


  angular.module('nightmare')
    .controller('SubmitController', AddStop);

  function AddStop($scope, $firebaseArray) {
    var ref = new Firebase('https://fiery-inferno-4540.firebaseio.com');
    $scope.list = $firebaseArray(ref);
    // $scope.text = 'hello';
    $scope.submit = function() {
      $scope.list.$add({
        stop: $scope.newStop,
        street: $scope.street_address,
        city: $scope.city,
        state: $scope.state,
        zip_code: $scope.zip_code,
        camera: undefined($scope.camera),
        guard: undefined($scope.guard),
        security: undefined($scope.security),
        light: undefined($scope.light),
        parking: undefined($scope.parking),
        hazards: undefined($scope.hazards),
        delivery_instructions: undefined($scope.delivery_instructions),
        info: undefined($scope.info)
      });
      $scope.newStop = '';
      $scope.street_address = '';
      $scope.city = '';
      $scope.state = '';
      $scope.zip_code = '';
      $scope.camera = '';
      $scope.guard = '';
      $scope.security = '';
      $scope.light = '';
      $scope.parking = '';
      $scope.hazards = '';
      $scope.delivery_instructions = '';
      $scope.info = '';

      function undefined(answer) {
        if (answer) {
          return answer;
        } else {
          return null;
        }
      };
    };
    console.log($scope.list);
  };

  angular
    .module('nightmare')
    .controller('CommentController', function() {
      this.submit = {};

      this.addSubmit = function(stop) {
        stop.submits.push(this.submit);
        console.log('hi');
        console.log(this.submit);
        this.submit = {};
      };
    });

})();
