'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/teams', {templateUrl: 'partials/team-list.html', controller: 'TeamListCtrl'});
  $routeProvider.when('/team-detail', {templateUrl: 'partials/team-detail.html', controller: 'TeamDetailCtrl'});
  $routeProvider.otherwise({redirectTo: '/teams'});
}]);
