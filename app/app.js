'use strict';

var bookApp = angular.module('bookApp', [
  'ngRoute',
  'bookControllers'
]);

bookApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/book/:bookId', {
        templateUrl: 'partials/book.html',
        controller: 'BookCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
