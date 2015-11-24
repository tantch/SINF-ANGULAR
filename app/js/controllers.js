var bookControllers = angular.module('bookControllers', [
  'ngRoute'
]);

bookControllers.controller('HomeCtrl', function ($scope,$http) {

  $http({
    url: "http://127.0.0.1:49822/api/artigos/listaRating/12",
    method: "GET",
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }).success(function(response) {$scope.books = response;});


});

bookControllers.controller('BookCtrl', function ($scope,$http,$routeParams) {



  var s = $routeParams.bookId+"";
  while (s.length < 4) s = "0" + s;

  $http({
    url: "http://127.0.0.1:49822/api/artigos/" + s,
    method: "GET",
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }).success(function(response) {$scope.book = response;});

});
