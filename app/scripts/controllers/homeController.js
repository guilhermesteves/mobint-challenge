'use strict';

/**
 * @ngdoc function
 * @name MobintChallenge.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('MobintChallenge')
  .controller('HomeController', function($scope, TracktService) {

    $scope.myHTML   = null;
    $scope.topShows = [];
    $scope.page     = 1;

    $scope.fetchTopShows = function() {
      TracktService.fetchTopShows()
        .then(function(response) {

          if (response.data) {
            $scope.topShows = response.data;
            $scope.page += 1;
          } else {
            $scope.myHTML = 'Indisponível';
          }

          if (response.headers['X-Pagination-Page-Count']) {
            $scope.totalPages = response.headers['X-Pagination-Page-Count'];
          }

          $scope.$broadcast('scroll.refreshComplete');
        });
    };

    $scope.fetchTopShows();

  });
