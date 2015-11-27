var bookControllers = angular.module('bookControllers', [
  'ngRoute'
]);

var cats = [
  {name: "Aventura",cod: "AV"},
  {name: "Ficção",cod: "FC"},
  {name: "Romance",cod: "RM"},
  {name: "Desporto",cod: "DP"},
  {name: "Culinária",cod: "CL"},
  {name: "Informática",cod: "IN"},
  {name: "Viagens",cod: "VG"},
  {name: "Fantástico",cod: "FN"},
  {name: "Crime",cod: "CR"}
];



bookControllers.controller('HomeCtrl', function ($scope,$http) {


  $scope.categories = cats;
  $http({
    url: "http://127.0.0.1:49822/api/artigos/listaRating/12",
    method: "GET",
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }).success(function(response) {$scope.books = response;});


});

bookControllers.controller('BookCtrl', function ($scope,$http,$routeParams) {


  $scope.categories = cats;


  var s = $routeParams.bookId+"";
  while (s.length < 4) s = "0" + s;

  $http({
    url: "http://127.0.0.1:49822/api/artigos/" + s,
    method: "GET",
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }).success(function(response) {$scope.book = response;});

});

bookControllers.controller('CartCtrl',function ($scope,$http){




});
bookControllers.controller('SearchCtrl',function ($scope,$http){
  $scope.categories = cats;




});

bookControllers.controller('CatsCtrl',function($scope,$http,$routeParams){
  $scope.cod = $routeParams.catCod +"";
  $scope.categories = cats;


  $http({
    url: "http://127.0.0.1:49822/api/artigos/cat/" + $routeParams.catCod,
    method: "GET",
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }).success(function(response) {$scope.books = response;});

});
