/* global angular */
(function(){
  'use strict';

  angular.module('nightmare')
   .controller('SubmitController', ['$scope', function($scope) {
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
    })

})();
