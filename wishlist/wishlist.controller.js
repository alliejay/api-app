(function () {
  "use strict";

angular
  .module('etsyWishlist')
  .controller('WishlistController', function ($scope, WishlistService, $routeParams) {
    var vm = this;

    vm.addItem = function(item){
      WishlistService.addToList(item);
    };

    WishlistService.getItems().then(function(items){
      vm.items = _.map(items.data, function(el, idx, arr){
        return {
          title: el.title,
          price: el.price,
          img: el.img,
          id: el.id,
          _id: el._id
        };
      });
    });

    vm.delete = function(item){
      WishlistService.removeItem(item);
    };

  });
})();
