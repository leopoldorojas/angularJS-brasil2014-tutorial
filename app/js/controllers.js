'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('TeamListCtrl', ['$scope', function($scope) {
  	$scope.orderProp="name";
  	$scope.teams = [

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

  	];
  }])
  .controller('TeamDetailCtrl', [function() {

  }]);