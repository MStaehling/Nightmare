/* global angular */
(function() {
  'use strict';

  angular.module('nightmare')
    .controller('SingleController', function($http) {

      var self = this;

      $http.get('https://fiery-inferno-4540.firebaseio.com/.json')
        .then(function(response) {
          self.stop = response.data;
          console.log(response.data);
        });
    });

})();
