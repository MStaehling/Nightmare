/* global angular */
(function() {
  'use strict';

   angular
    .module('nightmare', ['ngRoute', 'restangular'])
    .config(function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: '/views/home.html'
        // controller: 'MainController',
        // controllerAs: 'main'
      })
      .when('/submit', {
        templateUrl: '/views/submit.html'
      })
      .when('/stops', {
        templateUrl: '/views/stops.html'
      })
      .when('/search', {
        templateUrl: '/views/search.html'
      })
      .when('/sign_up', {
        templateUrl: '/views/sign_up.html'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });

})();
