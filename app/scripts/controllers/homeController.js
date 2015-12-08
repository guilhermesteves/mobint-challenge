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
      TracktService.fetchTopShows(1)
        .then(function(response) {

          if (response.data) {

            var shows = [];

            for (var index in response.data) {

              var responseItem = response.data[index];
              var show = {
                images: responseItem.images,
                title: responseItem.title,
                year: responseItem.year
              };

              shows.push(show);
            }

            $scope.topShows = $scope.topShows.concat(shows);

            if (!response.data || response.data == []) {
              $scope.end = true;
            }
          }

          $scope.$broadcast('scroll.refreshComplete');
        });
    };

    $scope.fetchMore = function() {

      $scope.page = $scope.page+1;

      TracktService.fetchTopShows($scope.page)
        .then(function(response) {

          if (response.data) {

            var shows = [];

            for (var index in response.data) {

              var responseItem = response.data[index];
              var show = {
                images: responseItem.images,
                title: responseItem.title,
                year: responseItem.year
              };

              shows.push(show);
            }

            $scope.topShows = $scope.topShows.concat(shows);
            $scope.page += 1;

            if (!response.data || response.data == []) {
              $scope.end = true;
            }
          }

          $scope.$broadcast('scroll.refreshComplete');
        });
    };

    $scope.fetchTopShows();

  });
