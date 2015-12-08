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
    $scope.end      = false;

    $scope.fetchTopShows = function() {
      TracktService.fetchTopShows($scope.page)
        .then(function(response) {

          if (response.data) {
            $scope.topShows.concat(response.data);
            $scope.page += 1;

            if (response.data == []) {
              $scope.end = true;
            }
          }

          $scope.$broadcast('scroll.refreshComplete');
        });
    };

    $scope.fetchTopShows();

  });
