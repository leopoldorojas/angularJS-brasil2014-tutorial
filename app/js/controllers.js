'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('TeamListCtrl', ['$scope', 'Teams', function($scope, Teams) {
  	$scope.orderProp="name";
  	$scope.teams = Teams.query();
  }])
  .controller('TeamDetailCtrl', ['$scope', '$routeParams', 'Teams', function($scope, $routeParams, Teams) {
    $scope.team = Teams.get({teamId: $routeParams.teamId});

    $scope.setImage = function(imageUrl) {
    	$scope.mainImageUrl = imageUrl;
    };
  }]);