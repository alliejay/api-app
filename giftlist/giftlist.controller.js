(function () {
  "use strict";

angular
  .module('etsyGiftlist')
  .controller('GiftlistController', function ($scope, GiftlistService, WishlistService, $routeParams) {
    var vm = this;

    vm.addGItem = function(item){
      GiftlistService.addToGList(item);
    };

    GiftlistService.getGItems().then(function(items){
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

    vm.deleteG = function(item){
      GiftlistService.removeGItem(item);
    };

  });
})();
