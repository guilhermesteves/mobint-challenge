'use strict';

/**
 * @ngdoc function
 * @name MobintChallenge.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('MobintChallenge')
  .controller('HomeController', function($scope, TracktService) {

    $scope.myHTML = null;
    $scope.topShows = [];

    $scope.fetchTopShows = function() {
      TracktService.fetchTopShows()
        .then(function(response) {

          if (response.data) {
            $scope.topShows = response.data;
          }

          $scope.$broadcast('scroll.refreshComplete');
        });
    };

    $scope.fetchTopShows();

  });
