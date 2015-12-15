'use strict';

var bookApp = angular.module('bookApp', [
  'ngRoute',
  'bookControllers',
  'door3.css',
  'ngCookies'
]);

bookApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl',
         css: 'css/shop-homepage.css'
      }).
      when('/book/:bookId', {
        templateUrl: 'partials/book.html',
        controller: 'BookCtrl',
        css: 'css/shop-homepage.css'
      }).
      when('/cats/:catCod',{
        templateUrl: 'partials/cats.html',
        controller: 'CatsCtrl',
        css: 'css/shop-homepage.css'
      }).
      when('/cart',{
        templateUrl: 'partials/cart.html',
        controller: 'CartCtrl',
        css: 'css/shop-homepage.css'
      }).
      when('/search/:query',{
        templateUrl: 'partials/search.html',
        controller: 'SearchCtrl',
        css: 'css/shop-homepage.css'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
