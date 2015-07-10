/* global angular Firebase */

(function(){
    'use strict';

angular.module('tiy-upvote')

.controller('MainController', function($scope){
  var firebase = new Firebase('https://fiery-inferno-4540.firebaseio.com');

  var self = this;
  // Above function to be used when templating -- commented out for `eslint` build for release 0.2.0

  // this.login = function(){
  //   firebase.authWithOAuthPopup('github', function(error, auth){
  //     $scope.$apply(function(){
  //     self.username = auth.github.username;
  //       console.log('Its alive!');
  //
  //     });
  //   });
  // };


});
})();
