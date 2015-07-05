'use strict';

/**
 * @ngdoc overview
 * @name vagrantApp
 * @description
 * # vagrantApp
 *
 * Main module of the application.
 */
angular
  .module('vagrantApp', [
    'ngRoute',
    'mobile-angular-ui'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
