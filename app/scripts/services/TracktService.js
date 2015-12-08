'use strict';

/**
 * @ngdoc function
 * @name MobintChallenge.service:ExampleService
 * @description
 * # ExampleService
 */
angular.module('MobintChallenge')
  // use factory for services
  .factory('TracktService', function($http, $timeout, $q, TRACKT) {

    var fetchTopShows = function(page) {
      return $http({
          url: 'https://api-v2launch.trakt.tv' + '/shows/popular',
          headers: {
            'trakt-api-key':      TRACKT.apiKey,
            'trakt-api-version':  TRACKT.version,
            'Content-Type':       'application/json'
          },
          params: {
            page:     page || 1,
            limit:    10,
            extended: 'full,images'
          },
          method: 'GET'
        })
        .success(function(data) {
          console.log(data);
        })
        .error(function(error) {
          console.log('an error occured', error);
        });
    };

    // public api
    return {
      fetchTopShows: fetchTopShows
    };

  });
