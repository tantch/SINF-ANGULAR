var bookControllers = angular.module('bookControllers', [
  'ngRoute','ngCart'
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




bookControllers.controller('HomeCtrl', function ($scope,$http,$cookies) {


  $scope.categories = cats;
  $http({
    url: "http://127.0.0.1:49822/api/artigos/listaRating/12",
    method: "GET",
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }).success(function(response) {$scope.books = response;});


});
bookControllers.controller('HeaderCtrl', function ($scope,$http,$cookies,$location) {


  $scope.search = function(query){
  console.log(query);
  $location.path('/search/'+query);

  }


  var cart = $cookies.get('cart');

  if(!cart){
    console.log('cart is empty')
    $cookies.put('cart', '[]');
  }



});

bookControllers.controller('BookCtrl', function ($scope,$http,$cookies,$routeParams) {


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


bookControllers.controller('SearchCtrl',function ($scope,$http,$routeParams,$cookies){
  $scope.categories = cats;
  console.log("ugh");
   $http({
    url: "http://127.0.0.1:49822/api/artigos/pesquisaNome/" + $routeParams.query + "/20",
    method: "GET",
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }).success(function(response) {$scope.books = response;});






});

bookControllers.controller('AuthorCtrl',function ($scope,$http,$routeParams,$cookies){
  $scope.categories = cats;
  console.log("ugh");
   $http({
    url: "http://127.0.0.1:49822/api/artigos/autor/" + $routeParams.aut,
    method: "GET",
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }).success(function(response) {$scope.books = response;});



});

bookControllers.controller('CatsCtrl',function($scope,$http,$routeParams,$cookies){
  $scope.cod = $routeParams.catCod +"";
  $scope.categories = cats;


  $http({
    url: "http://127.0.0.1:49822/api/artigos/cat/" + $routeParams.catCod,
    method: "GET",
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }).success(function(response) {$scope.books = response;});


});
