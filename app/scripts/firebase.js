/* global angular */

(function() {
  'use strict';

  angular.module('nightmare')

  .directive('ngEnter', function($location) {
    return function(scope, element, attrs) {
      element.bind("keydown keypress", function(event) {
        if (event.which === 13) {
          scope.$apply(function() {
            scope.$eval(attrs.ngEnter);
            $location.url('/search');
            console.log('hi');
          });

          event.preventDefault();
        }
      });
    };
  })

  // got most of this from http://eric.sau.pe/angularjs-detect-enter-key-ngenter/
})();
