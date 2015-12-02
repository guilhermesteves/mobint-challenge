'use strict';

/**
 * @ngdoc function
 * @name MobintChallenge.service:TracktService
 * @description
 * # TracktService
 */
module.exports = [
    '$http',
    '$timeout',
    '$q',
    'ApiService',

    function( $http, $timeout, $q, ApiService )
    {

      var fetchTopShows = function() {
        return $http({
            url: ApiService.getEndPoint(),
            method: 'GET'
          })
          .success(function(data) {
            return data;
          })
          .error(function(error) {
            console.log('an error occurred', error);
            return null;
          });
      };

      // public api
      return {
        fetchToShows: fetchTopShows
      };
    }
];
