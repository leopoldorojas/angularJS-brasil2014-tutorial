'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/teams', {templateUrl: 'partials/team-list.html', controller: 'TeamListCtrl'});
  $routeProvider.when('/teams/:teamId', {templateUrl: 'partials/team-detail.html', controller: 'TeamDetailCtrl'});
  $routeProvider.otherwise({redirectTo: '/teams'});
}]).
factory('Teams', function($resource){
	return $resource('teams/:teamId.json', {teamId:'teams'});
});
