(function() {
  "use strict";
  angular
    .module('etsyGiftlist')
    .factory('GiftlistService', function($http, _, $rootScope){
      var url = 'http://tiny-tiny.herokuapp.com/collections/etsyChristmasG';

      var getGItems = function(){
        return $http.get(url);
      };

      var addToGList = function(item){
        $http.post(url, item).success(function(response){
          $rootScope.$broadcast('giftlist:added');
        });
      };

      var removeGItem = function(item){
        var itemID = item._id;
        $http.delete(url + "/" + itemID);
      };

      var getSingleGItem = function(item){
        var id = item._id;
        var single = $http.get(url + "/"+ _id);
        console.log(single);
      };

      return {
        getGItems: getGItems,
        addToGList: addToGList,
        removeGItem: removeGItem,
        getSingleGItem: getSingleGItem
      };
    });
})();
