'use strict';

/**
 * @ngdoc function
 * @name vagrantApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the vagrantApp
 */
angular.module('vagrantApp')
    .controller('UsersCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma',
        'ngRoute',
        'mobile-angular-ui',
        'mobile-angular-ui.gestures',
        //'ngTouch',
      ];  
    })
    .controller('UserInfoCtrl', function ($scope) {
      $scope.user_info = {
          user_id : 1,
          user_name : 'segasho',
          email     : 'syo_sega04@yahoo.co.jp',
          address_info : [
              {
                  address_name: '瀬川 翔太',
                  address : '東京都 杉並区 宮前4-14-10 シャルマン久我山102号室',
              },
              {
                  address_name: '瀬川 賀容子',
                  address : '香川県 高松市 香川町浅野2977',
              }
          ]
      }
    }
);