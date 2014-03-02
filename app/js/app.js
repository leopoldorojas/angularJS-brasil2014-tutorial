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
  $routeProvider.when('/teams/:teamId', {templateUrl: 'partials/team-detail.html', controller: 'TeamDetailCtrl'});
  $routeProvider.otherwise({redirectTo: '/teams'});
}]).
factory('Teams', function(){
	return {
		'get': 
			[

			    {
			        "id": "costa_rica", 
			        "imageUrl": "img/teams/costa-rica.0.jpg", 
			        "name": "Costa Rica",
			        "group": "D", 
			        "headline": "Costa Rica ganó todos los partidos que disputó en su casa en la ronda final.",
			        "chances": 0.10,
			        "confederation": "Concacaf",
			        "championships": 0,
			        "worldCups": 4,
			        "rankingFifa": 35
			    },

			    {
			        "id": "uruguay", 
			        "imageUrl": "img/teams/uruguay.0.jpg", 
			        "name": "Uruguay",
			        "group": "D", 
			        "headline": "Tras superar con solvencia el partido de ida en Jordania por 5-0, Uruguay cerró con un 0-0 ante su público esta instancia para sellar su boleto a Brasil.",
			        "chances": 0.09,
			        "confederation": "Conmebol",
			        "championships": 2,
			        "worldCups": 11,
			        "rankingFifa": 7
			    }  

		  	]
	}
});
