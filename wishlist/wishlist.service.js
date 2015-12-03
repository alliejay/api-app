(function() {
  "use strict";
  angular
    .module('etsyWishlist')
    .factory('WishlistService', function($http, _, $rootScope){
      var url = 'http://tiny-tiny.herokuapp.com/collections/etsyChristmas';

      var getItems = function(){
        return $http.get(url);
      };

      var addToList = function(item){
        $http.post(url, item).success(function(response){
          $rootScope.$broadcast('wishlist:added');
        });
      };

      var getID = function(item){
        return item._id;
      };

      var removeItem = function(item){
        var itemID = getID(item);
        $http.delete(url + "/" + itemID);
      };

      var getSingleItem = function(item){
        var id = getID(item);
        var single = $http.get(url + "/"+ _id);
        console.log(single);
      };

      return {
        getItems: getItems,
        addToList: addToList,
        removeItem: removeItem,
        getSingleItem: getSingleItem
      };
    });
})();
