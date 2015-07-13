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
        street: $scope.street_address
      });
      $scope.newStop ='';
    };console.log($scope.list);
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
