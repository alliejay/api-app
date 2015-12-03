(function () {
  "use strict";

  angular
    .module('etsyGiftlist', [
      'ngRoute',
      'underscore',
      'etsyChristmas'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/giftlist', {
          templateUrl: 'giftlist/views/list.html',
          controller: 'GiftlistController as giftlistCtrl'
        });
    });

  angular
    .module('underscore', [])
    .factory('_', function($window){
      return $window._;
    });

})();
