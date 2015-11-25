var bookControllers = angular.module('bookControllers', [
  'ngRoute'
]);

bookControllers.controller('HomeCtrl', function ($scope,$http) {

  $(function() {
    var pop = $('.popbtn');
    var row = $('.row:not(:first):not(:last)');


    pop.popover({
      trigger: 'manual',
      html: true,
      container: 'body',
      placement: 'bottom',
      animation: false,
      content: function() {
        return $('#popover').html();
      }
    });


    pop.on('click', function(e) {
      pop.popover('toggle');
      pop.not(this).popover('hide');
    });

    $(window).on('resize', function() {
      pop.popover('hide');
    });

    row.on('touchend', function(e) {
      $(this).find('.popbtn').popover('toggle');
      row.not(this).find('.popbtn').popover('hide');
      return false;
    });

  });

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

bookControllers.controller('CartCtrl',function ($scope,$http){




});
