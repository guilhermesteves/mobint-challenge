'use strict';

/**
 * @ngdoc constant
 * @name MobintChallenge.API_ENDPOINT
 * @description
 * # API_ENDPOINT
 * Defines the API endpoint where our resources will make requests against.
 * Is used inside /services/ApiService.js to generate correct endpoint dynamically
 */


angular.module('MobintChallenge')

  // development
  .constant('API_ENDPOINT', {
    host: 'https://api-v2launch.trakt.tv',
    needsAuth: false
  })
  .constant('TRACKT', {
    apiKey: '6aa9d371decb2ccdc37cda1a4211be9ce04ed9848730c250247e3e1ea826777c'
  });

