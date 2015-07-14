/* global angular */
(function() {
  'use strict';

  angular.module('nightmare')
    .controller('SingleController', function($scope, $http) {
      var list = this;
      list.stop = [];
      $http.get('https://fiery-inferno-4540.firebaseio.com/.json')
        .then(function(response) {
          console.log(response.data);
          $scope.stop = response.data;
          // console.log(list.stop);
        })
    })

})();
