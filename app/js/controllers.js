'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('TeamListCtrl', ['$scope', 'Teams', function($scope, Teams) {
  	$scope.orderProp="name";
  	$scope.teams = Teams.get;
  }])
  .controller('TeamDetailCtrl', ['$scope', '$routeParams', 'Teams', function($scope, $routeParams, Teams) {

    var teams = Teams.get;

  	$scope.team = teams.filter(function(team) {
  		return team.id == $routeParams.teamId
  	})[0];

  }]);