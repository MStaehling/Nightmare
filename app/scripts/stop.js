/* global angular */
(function() {
  'use strict';

angular.module('nightmare')
.controller('SingleController', function ($scope, $http){
  $http.get('https://fiery-inferno-4540.firebaseio.com/.json')
  .then(function(response){
    console.log(response.data)
  })
})

})();
