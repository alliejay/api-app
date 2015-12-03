(function() {
  "use strict";
  angular
    .module('etsyGiftlist')
    .factory('WishlistService', function($http, _, $rootScope){
      var url = 'http://tiny-tiny.herokuapp.com/collections/etsyChristmasG';

      var getGItems = function(){
        return $http.get(url);
      };

      var addToLGist = function(item){
        $http.post(url, item).success(function(response){
          $rootScope.$broadcast('wishlist:added');
        });
      };

      var removeGItem = function(item){
        var itemID = item._id;
        $http.delete(url + "/" + itemID);
      };

      return {
        getGItems: getGItems,
        addToGList: addToGList,
        removeGItem: removeGItem,
      };
    });
})();
