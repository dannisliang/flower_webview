'use strict';

/**
 * @ngdoc function
 * @name vagrantApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the vagrantApp
 */
angular.module('vagrantApp')
    .controller('ProductCtrl', function () {
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
    .controller('SelectProductCtrl', ['$scope', function ($scope) {
        $scope.product_info = {
              icon_image: 'http://hibiyakadn.hs.llnwd.net/e1/ito/0000000/0000000092/sb/550_550/6298TH1930_s01.jpg',
              name: 'カーネーションの花束',
              explain: '薔薇を1本いかがですか',
              review_status: 5.0,
              supplier     : '瀬川フラワーコンサルタント',
              cateogry     : '花束',
              value        : 2000,
              update_time  : '2015-04-30',
        };
        $scope.review_list = [
            {
                title    : '購入しました',
                nickname : '瀬川 翔太',
                purchase_date: '2015-06-01',
                status   : 4.0,
                sentence : 'すごい綺麗でよかった'
            },
            {
                title    : '購入しました',
                nickname : '加島 たくみ',
                purchase_date: '2015-06-01',
                status   : 4.0,
                sentence : 'すごい綺麗でよかった'
            },
            {
                title    : '購入しました',
                nickname : '加島 たくみ',
                purchase_date: '2015-06-03',
                status   : 4.0,
                sentence : 'すごい綺麗でよかった'
            },
            {
                title    : '購入しました',
                nickname : '加島 たくみ',
                purchase_date: '2015-06-05',
                status   : 4.0,
                sentence : 'すごい綺麗でよかった'
            }
        ];
      }]
    )
    .controller('ProductCapturesCtrl', function ($scope) {
      $scope.myInterval = 5000;
      var slides = $scope.slides = [];
      /*$scope.addSlide = function() {
        slides.push({
          image: 'http://organic-naturalife.com/wp-content/uploads/2014/05/0a11f1164a932e9e8d6282c7a1ae0239.jpg',
          text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
            ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
      };*/
      var event_image = [];
      event_image.push('http://www.fleurir-oasis.com/images/material/banner01.jpg');
      event_image.push('http://ic4-a.dena.ne.jp/mi/gr/114/imgr-a.dena.ne.jp/exr8/mbspe/4817743/42/48177431_A.jpg');
      event_image.push('http://www.hanatown.net/eyecatch_img/left/flower_arrangement.jpg');
      event_image.push('http://kenya-rose.com/wp-content/uploads/2014/10/%E3%82%A2%E3%83%95%E3%83%AA%E3%82%AB%E3%81%AE%E8%8A%B1%E5%B1%8B%E3%83%90%E3%83%8A%E3%83%BC.jpg');
      for (var i=0; i<4; i++) {
        //$scope.addSlide();
        $scope = slides.push({
          image: event_image[i],
          text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
            ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
      }
    });
//    .controller('NewBouquetCtrl', function ($scope) {
//      $scope.bouquets = [
//          {
//              image : 'http://hibiyakadn.hs.llnwd.net/e1/ito/0000000/0000000092/sb/550_550/6298TH1930_s01.jpg',
//              name  : 'カーネションの花束',
//              value : 1980,
//              url   : '/#/product/1',
//          },
//          {
//              image : 'http://www.i879.com/image/products/big/112009.jpg',
//              name  : 'ひまわりの花束',
//              value : 980,
//          },
//          {
//              image : 'https://www.flowers-do.jp/imgdb/item_baranohanataba/107-1.jpg',
//              name  : 'バラ尽くし',
//              value : 3980,
//          },
//          {
//              image : 'http://ar-flower.com/wp-content/uploads/2014/10/a43d3055896b8d57b3f48073d8dc2a09.jpg',
//              name : '愛する人へ',
//              value : 5980,
//          },
//      ];
//    })
//    .controller('NewPlantCtrl', function ($scope) {
//      $scope.bouquets = [
//          {
//              image : 'http://www.hanayumi.net/images/p453_1.jpg',
//              name  : 'カーネションの鉢物',
//              value : 1980,
//          },
//          {
//              image : 'http://sakata-tanet.com/img/goods/L/2000197100147.jpg',
//              name  : 'ひまわりの鉢物',
//              value : 980,
//          },
//          {
//              image : 'http://image.rakuten.co.jp/kajoen/cabinet/nae3/img61775391.jpg',
//              name  : 'バラ尽くし',
//              value : 3980,
//          },
//          {
//              image : 'http://www.emono1.jp/img/fshanasho/20070322215644_img1_34.jpg',
//              name : '愛する人へ',
//              value : 5980,
//          },
//      ];
//    })
//    .controller('NewFoliageCtrl', function ($scope) {
//      $scope.bouquets = [
//          {
//              image : 'http://mf8.jp/ky/ky205/001.jpg',
//              name  : '青年の木/ユッカ',
//              value : 1980,
//          },
//          {   image : 'http://storage.kanshin.com/free/img_45/452195/k747750249.jpg',
//              name  : 'ひまわりの鉢物',
//              value : 980,
//          },
//          {
//              image : 'http://www.spiralmarket.com/2008/01/17/img/wood.jpg',
//              name  : 'バラ尽くし',
//              value : 3980,
//          },
//          {
//              image : 'http://photo-chips.com/db/file/IMGP0347(2).JPG',
//              name : '愛する人へ',
//              value : 5980,
//          },
//      ];
//    })
//    .controller('NewCutFlowerCtrl', function ($scope) {
//      $scope.bouquets = [
//          {
//              image : 'http://385r.com/wordpress/wp-content/uploads/2012/06/azi0.jpg',
//              name  : 'あじさい',
//              value : 1980,
//          },
//          {   image : 'http://storage.kanshin.com/free/img_45/452195/k747750249.jpg',
//              name  : 'ひまわりの鉢物',
//              value : 980,
//          },
//          {
//              image : 'https://t.pimg.jp/003/523/630/1/3523630.jpg',
//              name  : '1本の薔薇',
//              value : 3980,
//          },
//          {
//              image : 'http://photo-chips.com/db/file/IMGP0347(2).JPG',
//              name : '愛する人へ',
//              value : 5980,
//          },
//      ];
//    }
//);

// 
// You can configure ngRoute as always, but to take advantage of SharedState location
// feature (i.e. close sidebar on backbutton) you should setup 'reloadOnSearch: false' 
// in order to avoid unwanted routing.
// 
angular.module('vagrantApp').config(function($routeProvider) {
  $routeProvider.when('/',              {templateUrl: 'views/main.html', reloadOnSearch: false});
//  $routeProvider.when('/scroll',        {templateUrl: 'scroll.html', reloadOnSearch: false}); 
//  $routeProvider.when('/toggle',        {templateUrl: 'toggle.html', reloadOnSearch: false}); 
//  $routeProvider.when('/tabs',          {templateUrl: 'tabs.html', reloadOnSearch: false}); 
//  $routeProvider.when('/accordion',     {templateUrl: 'accordion.html', reloadOnSearch: false}); 
//  $routeProvider.when('/overlay',       {templateUrl: 'overlay.html', reloadOnSearch: false}); 
//  $routeProvider.when('/forms',         {templateUrl: 'forms.html', reloadOnSearch: false});
//  $routeProvider.when('/dropdown',      {templateUrl: 'dropdown.html', reloadOnSearch: false});
//  $routeProvider.when('/drag',          {templateUrl: 'drag.html', reloadOnSearch: false});
//  $routeProvider.when('/carousel',      {templateUrl: 'carousel.html', reloadOnSearch: false});
});

//
// `$drag` example: drag to dismiss
//
angular.module('vagrantApp').directive('dragToDismiss', function($drag, $parse, $timeout){
  return {
    restrict: 'A',
    compile: function(elem, attrs) {
      var dismissFn = $parse(attrs.dragToDismiss);
      return function(scope, elem, attrs){
        var dismiss = false;

        $drag.bind(elem, {
          constraint: {
            minX: 0, 
            minY: 0, 
            maxY: 0 
          },
          move: function(c) {
            if( c.left >= c.width / 4) {
              dismiss = true;
              elem.addClass('dismiss');
            } else {
              dismiss = false;
              elem.removeClass('dismiss');
            }
          },
          cancel: function(){
            elem.removeClass('dismiss');
          },
          end: function(c, undo, reset) {
            if (dismiss) {
              elem.addClass('dismitted');
              $timeout(function() { 
                scope.$apply(function() {
                  dismissFn(scope);  
                });
              }, 400);
            } else {
              reset();
            }
          }
        });
      };
    }
  };
});

//
// Another `$drag` usage example: this is how you could create 
// a touch enabled "deck of cards" carousel. See `carousel.html` for markup.
//
angular.module('vagrantApp').directive('carousel2', function(){
  return {
    restrict: 'C',
    scope: {},
    controller: function($scope) {
      this.itemCount = 0;
      this.activeItem = null;

      this.addItem = function(){
        var newId = this.itemCount++;
        this.activeItem = this.itemCount == 1 ? newId : this.activeItem;
        return newId;
      };

      this.next = function(){
        this.activeItem = this.activeItem || 0;
        this.activeItem = this.activeItem == this.itemCount - 1 ? 0 : this.activeItem + 1;
      };

      this.prev = function(){
        this.activeItem = this.activeItem || 0;
        this.activeItem = this.activeItem === 0 ? this.itemCount - 1 : this.activeItem - 1;
      };
    }
  };
});

angular.module('vagrantApp').directive('carouselItem', function($drag) {
    
  return {
    restrict: 'C',
    require: '^carousel',
    scope: {},
    transclude: true,
    template: '<div class="item"><div ng-transclude></div></div>',
    link: function(scope, elem, attrs, carousel) {
      scope.carousel = carousel;
      var id = carousel.addItem();
      
      var zIndex = function(){
        var res = 0;
        if (id == carousel.activeItem){
          res = 2000;
        } else if (carousel.activeItem < id) {
          res = 2000 - (id - carousel.activeItem);
        } else {
          res = 2000 - (carousel.itemCount - 1 - carousel.activeItem + id);
        }
        return res;
      };

      scope.$watch(function(){
        return carousel.activeItem;
      }, function(n, o){
        elem[0].style['z-index']=zIndex();
      });
      

      $drag.bind(elem, {
        constraint: { minY: 0, maxY: 0 },
        adaptTransform: function(t, dx, dy, x, y, x0, y0) {
          var maxAngle = 15;
          var velocity = 0.02;
          var r = t.getRotation();
          var newRot = r + Math.round(dx * velocity);
          newRot = Math.min(newRot, maxAngle);
          newRot = Math.max(newRot, -maxAngle);
          t.rotate(-r);
          t.rotate(newRot);
        },
        move: function(c){
          if(c.left >= c.width / 4 || c.left <= -(c.width / 4)) {
            elem.addClass('dismiss');  
          } else {
            elem.removeClass('dismiss');  
          }          
        },
        cancel: function(){
          elem.removeClass('dismiss');
        },
        end: function(c, undo, reset) {
          elem.removeClass('dismiss');
          if(c.left >= c.width / 4) {
            scope.$apply(function() {
              carousel.next();
            });
          } else if (c.left <= -(c.width / 4)) {
            scope.$apply(function() {
              carousel.next();
            });
          }
          reset();
        }
      });
    }
  };
});


//
// For this trivial demo we have just a unique MainController 
// for everything
//
angular.module('vagrantApp').controller('MainController', function($rootScope, $scope){

  // User agent displayed in home page
  $scope.userAgent = navigator.userAgent;
  
  // Needed for the loading screen
  $rootScope.$on('$routeChangeStart', function(){
    $rootScope.loading = true;
  });

  $rootScope.$on('$routeChangeSuccess', function(){
    $rootScope.loading = false;
  });

  // Fake text i used here and there.
  $scope.lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel explicabo, aliquid eaque soluta nihil eligendi adipisci error, illum corrupti nam fuga omnis quod quaerat mollitia expedita impedit dolores ipsam. Obcaecati.';

  // 
  // 'Scroll' screen
  // 
  var scrollItems = [];

  for (var i=1; i<=100; i++) {
    scrollItems.push('Item ' + i);
  }

  $scope.scrollItems = scrollItems;

  $scope.bottomReached = function() {
    alert('Congrats you scrolled to the end of the list!');
  }

  // 
  // Right Sidebar
  // 
  $scope.chatUsers = [
    { name: 'Carlos  Flowers', online: true },
    { name: 'Byron Taylor', online: true },
    { name: 'Jana  Terry', online: true },
    { name: 'Darryl  Stone', online: true },
    { name: 'Fannie  Carlson', online: true },
    { name: 'Holly Nguyen', online: true },
    { name: 'Bill  Chavez', online: true },
    { name: 'Veronica  Maxwell', online: true },
    { name: 'Jessica Webster', online: true },
    { name: 'Jackie  Barton', online: true },
    { name: 'Crystal Drake', online: false },
    { name: 'Milton  Dean', online: false },
    { name: 'Joann Johnston', online: false },
    { name: 'Cora  Vaughn', online: false },
    { name: 'Nina  Briggs', online: false },
    { name: 'Casey Turner', online: false },
    { name: 'Jimmie  Wilson', online: false },
    { name: 'Nathaniel Steele', online: false },
    { name: 'Aubrey  Cole', online: false },
    { name: 'Donnie  Summers', online: false },
    { name: 'Kate  Myers', online: false },
    { name: 'Priscilla Hawkins', online: false },
    { name: 'Joe Barker', online: false },
    { name: 'Lee Norman', online: false },
    { name: 'Ebony Rice', online: false }
  ];

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

  $scope.deleteNotice = function(notice) {
    var index = $scope.notices.indexOf(notice);
    if (index > -1) {
      $scope.notices.splice(index, 1);
    }
  };
});

