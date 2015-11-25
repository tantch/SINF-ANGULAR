'use strict';

var bookApp = angular.module('bookApp', [
  'ngRoute',
  'bookControllers',
  'door3.css'
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
        css: 'css/shop-item.css'
      }).
      when('/cart',{
        templateUrl: 'partials/cart.html',
        controller: 'CartCtrl',
        css: 'css/shop-homepage.css'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
