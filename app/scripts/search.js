/* global angular */
(function() {
  'use strict';

  angular.module('nightmare')
    .controller('SingleController', function($scope, $http) {
      $http.get('https://fiery-inferno-4540.firebaseio.com/.json')
        .then(function(response) {
          $scope.stop = response.data;
          console.log(response.data);
        });
    });

})();
