/* global angular Firebase*/
(function() {
  'use strict';

  angular.module('nightmare')
    .controller('StopController', function($http, $routeParams, $firebaseArray) {

      this.stop = {};
      var self = this;

      function pullData() {
        $http.get('https://fiery-inferno-4540.firebaseio.com/' + $routeParams.stop + '.json')
          .then(function(response) {
            self.stop = response.data;
            console.log('hi', response);
          });
      }

      var ref = new Firebase('https://fiery-inferno-4540.firebaseio.com/' + $routeParams.stop + '/comments');
      self.stopComment = $firebaseArray(ref);
      console.log(self.stopComment);
      self.submit = function() {
        console.log(self.stop);
        self.stopComment.$add({
          comment: self.comment
        });
        self.comment = '';
        pullData();
      };


      this.edit = null;

      self.editComment = function(endpoint, stops) {
        console.log('what');
        self.edit = stops;
        var commentEndpoint = new Firebase('https://fiery-inferno-4540.firebaseio.com/' + $routeParams.stop + '/comments/' + endpoint);
        self.indComment = $firebaseArray(commentEndpoint);
        console.log(self.indComment);
      };

      // got most of how to edit a comment from http://jsfiddle.net/wiesson/whw89oa7/

      self.editComments = function(index, comment, event) {
        // key-enter
        console.log('hi');
        if (event.keyCode === 13) {
          self.edit = null;

          /*
          $http.put('customers/' + customer.id, customer).success(function () {
              customer.editing = false;
          }) */
        }
        // key-esc, do nothing and revert
        else if (event.keyCode === 27) {
          // todo, revert to old name
          self.edit = false;
          //  customer.name = customer.tempName;
        }
      };

      pullData();
    });
})();
