
'use strict';

/**
 * app.components.nav-active Module
 *
 * Description
 */
angular.module('app.components.nav', [])
  .directive('auto', ['$location', function($location) {
    return {
      restrict: 'A',
      link: function($scope, iElm, iAttrs, controller) {
        var className = iAttrs.auto;
        var path = iAttrs.href.substring(1);
        $scope.location = $location;
        $scope.$watch('location.path()', function(newPath) {
          if (path === newPath.substring(0, path.length)) {
            iElm.parent().addClass(className);
          } else {
            iElm.parent().removeClass(className);
          }
        });
      }
    };
  }]);
