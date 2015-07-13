/* global angular Firebase*/
(function(){
  'use strict';

  var Firebase_Url = 'https://fiery-inferno-4540.firebaseio.com';
  var ref = new Firebase(Firebase_Url);

  angular.module('nightmare')
   .controller('SubmitController', ['$scope', '$firebaseArray',
    function($scope, $firebaseArray) {
     $scope.list = [];
     $scope.text = 'hello';
     $scope.submit = function() {
       if ($scope.text) {
         $scope.list.push(this.text);
         $scope.text = '';
       }console.log($scope.list);
     };
   }]);

   angular
    .module('nightmare')
    .controller('CommentController', function() {
      this.submit = {};

      this.addSubmit = function(stop){
        stop.submits.push(this.submit);
        console.log('hi');
        console.log(this.submit);
        this.submit = {};
      };
    });

})();
