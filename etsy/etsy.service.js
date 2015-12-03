(function() {
  "use strict";
  angular
    .module('etsyChristmas')
    .factory('etsyService', function($http, _){

      var urlPieces = {
        baseUrl: "https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&keywords=",
        api: "&api_key=tat73xghox07k8tqmm27wh9p",
        callback: "&callback=JSON_CALLBACK",
        buildUrl: function(keyword){
          return this.baseUrl + keyword + this.api + this.callback;
        }
      };

      var etsyData = "https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&keywords=gift&api_key=tat73xghox07k8tqmm27wh9p&callback=JSON_CALLBACK";

      var mapData = function (collection){
        return _.map(collection, function(obj){
          return {
            description: obj.description,
            id: obj.listing_id,
            img: obj.MainImage.url_170x135,
            price: obj.price,
            title: obj.title,
            url: obj.url
          };
        });
      };

      var getItems = function(){
        return $http.jsonp(etsyData).then(function(item){
          return mapData(item.data.results);
        });
      };

      return {
        getItems: getItems,
      };

    });
})();
