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
      .when('/user/:user_id', {
        templateUrl: 'views/user.html',
//        controller: 'WishCtrl',
//        controllerAs: 'wish'
      })
      .when('/logout/:user_id', {
        templateUrl: 'views/logout.html',
//        controller: 'WishCtrl',
//        controllerAs: 'wish'
      })
      .when('/orderLog/:user_id', {
        templateUrl: 'views/orderLog.html',
//        controller: 'WishCtrl',
//        controllerAs: 'wish'
      })
      //配送先住所
      .when('/address/:user_id', {
        templateUrl: 'views/address.html',
      })
      .when('/modal1', {
        templateUrl: 'views/modal1.html',
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/categoryDetail/:category_id', {
        templateUrl: 'views/categoryDetail.html',
        controller: 'CategoryDetailCtrl',
        controllerAs: 'categoryDetail'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
