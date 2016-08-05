'use strict';

/**
 * @ngdoc overview
 * @name clmMasterApp
 * @description
 * # clmMasterApp
 *
 * Main module of the application.
 */
angular
  .module('clmMasterApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-json-editor'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/edit', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        templateUrl: 'views/404.html',
        controller: 'ErrorCtrl'
      });
  });