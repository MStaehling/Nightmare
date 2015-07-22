/* global angular Firebase*/
(function() {
  'use strict';

  angular.module('nightmare')
    .controller('StopController', function($http, $routeParams, $firebaseArray, $firebaseObject) {

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

      // self.editComment = function(endpoint) {
      //   var commentEndpoint = new Firebase('https://fiery-inferno-4540.firebaseio.com/' + $routeParams.stop + '/comments/' + endpoint);
      //   self.indComment = $firebaseObject(commentEndpoint);
      //   console.log('endpoint', endpoint);
      //   console.log('hi', self.indComment);
      //   self.indComment.comment = '';
      //   console.log('hi', self.indComment);
      //   self.indComment.$add({
      //     comment: self.editedComment.comment
      //   });
      //   self.indComment = '';
      // //  self.indComment.$add(self.editedComment);
      //   self.editing = false;
      //   self.editedComment = {};
      // };
      //
      // this.editing = false;
      // this.editedComment = {};
      //
      // self.inputField = function() {
      //   return self.editing = true;
      // };

      this.edit = null;

      self.editComment = function(endpoint, stops) {
        console.log('what');
        self.edit = stops;
        var commentEndpoint = new Firebase('https://fiery-inferno-4540.firebaseio.com/' + $routeParams.stop + '/comments/' + endpoint);
        self.indComment = $firebaseArray(commentEndpoint);
        console.log(self.indComment);
        //stop.tempName = stops.comment;
        // self.editedComment = edit;
        // self.originalComment = angular.extend({}, self.editedComment);
      };

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

      // self.doneEditing = function(edit) {
      //   self.editedComment = null;
      //   var comment = edit.comment.trim();
      //   if (comment) {
      //     self.comments.$save(edit);
      //   } else {
      //     self.removeComment(edit);
      //   }
      // };
      //
      // self.revertEditing = function(edit) {
      //   edit.comment = self.originalComment.title;
      //   self.doneEditing(edit);
      // };
      //
      // self.removeComment = function(edit) {
      //   self.comments.$remove(edit);
      // };

      pullData();
    });
})();
