'use strict';

/**
 * @ngdoc function
 * @name MobintChallenge.controller:HomeController
 * @description
 * # HomeController
 */
module.exports = [
    '$scope',
    'TracktService',

    function( $scope, TracktService )
    {
      $scope.topShows = [];

      $scope.fetchTopShows = function() {
        TracktService.fetchTopShows()
          .then(function(response) {

            if (response.data) {
              $scope.topShows = response.data;
            }

            // close pull to refresh loader
            $scope.$broadcast('scroll.refreshComplete');
          });
      };

      $scope.fetchTopShows();
    }
];
