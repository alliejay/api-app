(function () {
  "use strict";
  angular
    .module('etsyChristmas')
    .directive('intro', function () {
      return {
        restrict: 'EA',
        templateUrl: 'etsy/views/intro.html',
        link: function (scope, element, attributes) {
          element.on('click', function (evt) {
            element.text(attributes.enter);
          });
        }
      };
    });
})();
