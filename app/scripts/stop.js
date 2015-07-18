/* global angular Firebase*/
(function() {
  'use strict';

  angular.module('nightmare')
    .controller('StopController', function($scope, $http, $routeParams, $firebaseArray){

      var self = this;
      
      function pullData(){
        $http.get('https://fiery-inferno-4540.firebaseio.com/' + $routeParams.stop + '.json')
        .then(function(response) {
          $scope.stop = response.data;
          console.log('hi', response);
        });
      }

      var ref = new Firebase('https://fiery-inferno-4540.firebaseio.com/' + $routeParams.stop + '/comments');
      $scope.stopComment = $firebaseArray(ref);

  $scope.submit = function() {
    console.log($scope.stop);
        $scope.stopComment.$add({
          comment: $scope.comment
        });
        $scope.comment = '';
        pullData();
      };
      pullData();
    });
})();
