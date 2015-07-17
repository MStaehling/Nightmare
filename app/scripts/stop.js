/* global angular */
(function() {
  'use strict';

  angular.module('nightmare')
    .controller('StopController', function($scope, $http, $routeParams, $firebaseArray){
      // $scope.comment = {
      //   comment: ''
      // }


      $http.get('https://fiery-inferno-4540.firebaseio.com/' + $routeParams.stop + '.json')
      .then(function(response) {
        $scope.stop = response.data;
        console.log('hi', response);
      });

      var ref = new Firebase('https://fiery-inferno-4540.firebaseio.com/' + $routeParams.stop + '/comments');
      $scope.stopComment = $firebaseArray(ref);

  $scope.submit = function() {
    console.log($scope.stop);
        $scope.stopComment.$add({
          comment: $scope.comment
        });
        $scope.comment = "";
      };

    });
    // .controller('CommentController', function($scope, $http, $routeParams, $firebaseArray){
    //   $scope.comment = {
    //     comment: ''
    //   };
    //
    //   var ref = new Firebase('https://fiery-inferno-4540.firebaseio.com' + $routeParams.stop + '/content');
    //   $scope.stop = $firebaseArray(ref);
    //
    //   $scope.submit = function() {
    //     console.log($scope.stop);
    //         $scope.stop.$add($scope.comment);
    //         $scope.comment = "";
    //       };

    //})

})();
