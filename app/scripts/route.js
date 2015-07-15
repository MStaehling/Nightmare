/* global angular */
(function() {
  'use strict';

   angular
    .module('nightmare', ['ngRoute', 'restangular', 'firebase', 'angular-toArrayFilter'])
    .config(function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: '/views/home.html'
        // controller: 'MainController',
        // controllerAs: 'main'
      })
      .when('/submit', {
        templateUrl: '/views/submit.html',
        controller: 'SubmitController'
      })
      .when('/stops/:stop', {
        templateUrl: '/views/stops.html',
        controller: 'StopController',
        controllerAs: 'stop'
      })
      .when('/search', {
        templateUrl: '/views/search.html',
        controller: 'SingleController',
        controllerAs: 'stop'
      })
      .when('/sign_up', {
        templateUrl: '/views/sign_up.html'
      })
      .when('/', {
        redirectTo: '/home'
      });
  });

})();
