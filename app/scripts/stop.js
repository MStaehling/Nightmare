/* global angular Firebase*/
(function() {
  'use strict';

  angular.module('nightmare')
    .controller('StopController', function($http, $routeParams, $firebaseArray){

      this.stop = {};
      var self = this;

      function pullData(){
        $http.get('https://fiery-inferno-4540.firebaseio.com/' + $routeParams.stop + '.json')
        .then(function(response) {
          self.stop = response.data;
          console.log('hi', response);
        });
      }

      var ref = new Firebase('https://fiery-inferno-4540.firebaseio.com/' + $routeParams.stop + '/comments');
      self.stopComment = $firebaseArray(ref);

  self.submit = function() {
    console.log(self.stop);
        self.stopComment.$add({
          comment: self.comment
        });
        self.comment = '';
        pullData();
      };
      pullData();
    });
})();
