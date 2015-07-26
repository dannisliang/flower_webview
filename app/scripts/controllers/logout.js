'use strict';

/**
 * @ngdoc function
 * @name vagrantApp.controller:ProductCtrl
 * @description
 * Controller of the vagrantApp
 */
angular.module('vagrantApp')
    .controller('LogoutCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma',
        'ngRoute',
        'mobile-angular-ui',
        'mobile-angular-ui.gestures',
        //'ngTouch',
      ];  
});

  //
  // 'Forms' screen
  //  
  $scope.rememberMe = true;
  $scope.email = 'me@example.com';
  
  $scope.login = function() {
    alert('You submitted the login form');
  };

  // 
  // 'Drag' screen
  // 
  $scope.notices = [];
  
  for (var j = 0; j < 10; j++) {
    $scope.notices.push({icon: 'envelope', message: 'Notice ' + (j + 1) });
  }

