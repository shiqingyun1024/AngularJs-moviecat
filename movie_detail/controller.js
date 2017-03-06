
'use strict';

/**
 * app.movie_detail Module
 *
 * Description
 */
angular.module('app.movie_detail', [])
  .controller('MovieDetailController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    window.doubanMovieDetailCallback = function(data) {
      $scope.movie = data;
    };
    $http.jsonp('https://api.douban.com/v2/movie/subject/' + $routeParams.id + '?callback=doubanMovieDetailCallback');
  }]);
