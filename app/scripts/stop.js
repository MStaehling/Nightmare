/* global angular */
(function() {
  'use strict';

  angular.module('nightmare')
    .controller('StopController', function($scope, $http, $routeParams){
      // $scope.id = $routeParams.$id;
      console.log("hello");
      $http.get('https://fiery-inferno-4540.firebaseio.com/' + $routeParams.stop + '.json')
      .then(function(response) {
        $scope.stop = response.data;//$routeParams.id
        console.log('hi', response);
      });
    });

})();
