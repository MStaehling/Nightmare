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

      self.editComment = function(endpoint) {
        var commentEndpoint = new Firebase('https://fiery-inferno-4540.firebaseio.com/' + $routeParams.stop + '/comments/' + endpoint);
        self.indComment = $firebaseObject(commentEndpoint);
        console.log('endpoint', endpoint);
        console.log('hi', self.indComment);
        self.indComment.comment = '';
        console.log('hi', self.indComment);
        self.indComment.$add({
          comment: self.editedComment.comment
        });
        self.indComment = '';
      //  self.indComment.$add(self.editedComment);
        self.editing = false;
        self.editedComment = {};
      };

      this.editing = false;
      this.editedComment = {};

      self.inputField = function() {
        return self.editing = true;
      };

      // self.doneEditing = function(edit) {
      //   self.editedComment = null;
      //   var title = edit.comments.trim();
      //   if (title) {
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

      pullData();
    });
})();
