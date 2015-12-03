(function () {
  "use strict";

  angular
    .module('etsyWishlist', [
      'ngRoute',
      'underscore',
      'etsyChristmas'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/wishlist', {
          templateUrl: 'wishlist/views/list.html',
          controller: 'WishlistController as wishlistCtrl'
        });
    });

  angular
    .module('underscore', [])
    .factory('_', function($window){
      return $window._;
    });

})();
