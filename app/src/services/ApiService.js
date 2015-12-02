'use strict';

/**
 * @ngdoc service
 * @name MobintChallenge.ApiService
 * @description
 * # ApiService
 * Retrieves correct api to make requests against.
 * Uses settings from API_ENDPOINT defined in /config/apiEndpoint.js
 *
 * Usage example: $http({
 *                      url: ApiService.getEndPoint() + '/things',
 *                      method: 'GET'
 *                 })
 *
 */
module.exports = [
    '$window',
    '$http',
    'API_ENDPOINT',
    'TRACKT',

    function( $window, $http, API_ENDPOINT, TRACKT )
    {
      var _api = API_ENDPOINT;
      var endpoint = _api.port ? (_api.host + ':' + _api.port + _api.path) : (_api.host + _api.path);

      // activate for basic auth
      if (_api.needsAuth) {
        $http.defaults.headers.common.Authorization = 'Basic ' + $window.btoa(_api.username + ':' + _api.password);
      }

      // Trakt Headers
      $http.defaults.headers['trakt-api-key'] = TRACKT.apiKey;
      $http.defaults.headers['trakt-api-version'] = 2;

      // public api
      return {
        getEndpoint: function() { return endpoint; }
      };
    }
];
