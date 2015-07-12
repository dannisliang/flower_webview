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
    'mobile-angular-ui',
    'ui.bootstrap',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl', 
        controllerAs: 'main'
      })
      .when('/wishlist', {
        templateUrl: 'views/wishlist.html',
//        controller: 'WishCtrl',
//        controllerAs: 'wish'
      })
      .when('/ranking', {
        templateUrl: 'views/ranking.html',
//        controller: 'RankingCtrl',
//        controllerAs: 'ranking'
      })
//      .when('/about', {
//        templateUrl: 'views/about.html',
//        controller: 'AboutCtrl',
//        controllerAs: 'about'
//      })
      .when('/category', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        controllerAs: 'category'
      })
      .when('/product/:id', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'product'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
