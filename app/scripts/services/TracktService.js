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

    var fetchTopShows = function() {
      return $http({
          url: 'https://api-v2launch.trakt.tv',
          headers: {
            'trakt-api-key':      TRACKT.apiKey,
            'trakt-api-version':  TRACKT.version,
            'Content-Type':       'application/json'
          },
          params: {
              paras: 2
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
