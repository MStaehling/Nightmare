/* global angular */
(function() {
  'use strict';

  angular
    .module('nightmare')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'app/views/home.html'
        // controller: 'MainController',
        // controllerAs: 'main'
      })
      .when('/submit', {
        templateUrl: 'app/views/submit.html'
      })
      .when('/stops', {
        templateUrl: 'app/views/stops.html'
      })
      .when('/search', {
        templateUrl: 'app/views/search.html'
      })
      .when('/sign_up', {
        templateUrl: 'app/views/sign_up.html'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }

})();
