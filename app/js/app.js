'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'myApp.animations',
  'firebase'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/teams', {templateUrl: 'partials/team-list.html', controller: 'TeamListCtrl'});
  $routeProvider.when('/teams/:teamId', {templateUrl: 'partials/team-detail.html', controller: 'TeamDetailCtrl'});
  $routeProvider.otherwise({redirectTo: '/teams'});
}]).
value('fbURL', 'https://sizzling-fire-7612.firebaseio.com/').
factory('Teams', function($firebase, fbURL){
	return $firebase(new Firebase(fbURL));
});
