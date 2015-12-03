(function () {
  "use strict";
  angular
    .module('etsyChristmas', [
      'ngRoute',
      'underscore',
      'etsyWishlist',
      // 'etsyGiftlist'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'etsy/views/list.html',
          controller: 'EtsyController as etsyCtrl',
        })
        .when('/etsy/:id', {
          templateUrl: 'etsy/views/detail.html',
          controller: 'EtsyController as etsyCtrl',
        })
        .otherwise({ redirectTo: '/404'});
    });

  angular
    .module('underscore', [])
    .factory('_', function($window){
      return $window._;
    });

})();
