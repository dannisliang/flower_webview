'use strict';

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * コンストラクタです.
 * @constructor
 */
function SearchService() {
}
 
/**
 * サンプルデータを返します.
 * @returns {Array} 検索対象データ
 */
SearchService.prototype.getData = function () {
    return [
        {
            id: 1,
            name: "空条承太郎",
            kana: "クウジョウジョウタロウ",
            note: "オラオラ"
        },
        {
            id: 2,
            name: "東方仗助",
            kana: "ヒガシカタジョウスケ",
            note: "変な髪型"
        },
        {
            id: 3,
            name: "荒木飛呂彦",
            kana: "アラキヒロヒコ",
            note: "歳を取らない"
        },
        {
            id: 4,
            name: "虹村億泰",
            kana: "ニジムラオクヤス",
            note: "東方仗助が岸辺露伴を困らせた時わたしは焼身自殺します"
        },
        {
            id: 5,
            name: "岸辺露伴",
            kana: "キシベロハン",
            note: "岸部露伴は動かない"
        },
        {
            id: 6,
            name: "広瀬康一",
            kana: "ヒロセコウイチ",
            note: "エコーズ"
        }
    ];
};

/**
 * @ngdoc function
 * @name vagrantApp.controller:SearchCtrl
 * @description
 * Controller of the vagrantApp
 */
angular.module('vagrantApp')
    .controller('SearchCtrl', function () {
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
    .controller('SearchGetData', function($scope, $element) {
        $scope.users = [
            {
                name: "薔薇",
                note: "薔薇のお花です"
            },
            {
                name: "菊",
                note: "菊のお花です"
            },
            {
                name: "桜",
                note: "桜のお花です"
            },
            {
                name: "トルコキキョウ",
                note: "トルコキキョウのお花です"
            },
            {
                name: "薔薇",
                note: "薔薇2のお花です"
            },
            {
                name: "薔薇3",
                note: "薔薇3のお花です"
            },
            {
                name: "薔薇4",
                note: "薔薇4のお花です"
            },
            {
                name: "薔薇5",
                note: "薔薇5のお花です"
            },
            {
                name: "薔薇6",
                note: "薔薇6のお花です"
            },
            {
                name: "薔薇7",
                note: "薔薇7のお花です"
            },
            {
                name: "薔薇8",
                note: "薔薇8のお花です"
            }
        ];
    }
);


