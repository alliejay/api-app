(function () {
  "use strict";

angular
  .module('etsyChristmas')
  .controller('EtsyController', function ($scope, etsyService, WishlistService, GiftlistService, $routeParams) {
    var vm = this;

    etsyService.getItems().then(function(items){
      vm.items = items;
      if($routeParams.id) {
        var something = vm.items;
        var newItem;
        newItem = something.filter(function(el) {
          return el.id === +$routeParams.id;
        });
        vm.item = newItem[0];
      }
    });

    vm.searchFor = function(){
      etsyService.getItems(items).then(function(items){
        vm.items = items;
      });
    };

    vm.addToList = function(item) {
      WishlistService.addToList(item);
    };

    vm.assign = function(item){

    };

    vm.addToGList = function(item) {
      GiftlistService.addToGList(item);
    };

  });
})();
