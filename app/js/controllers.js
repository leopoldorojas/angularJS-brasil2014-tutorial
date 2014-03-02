'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('TeamListCtrl', ['$scope', 'Teams', function($scope, Teams) {
  	$scope.orderProp="-chances";
  	$scope.teams = Teams;
  }])
  .controller('TeamDetailCtrl', ['$scope', '$routeParams', 'Teams', '$firebase', 'fbURL', function($scope, $routeParams, Teams, $firebase, fbURL) {
    //$scope.team = Teams.get({teamId: $routeParams.teamId});

    var teamUrl = fbURL + $routeParams.teamId + '/details';
    $scope.team = $firebase(new Firebase(teamUrl));

    $scope.setImage = function(imageUrl) {
    	$scope.mainImageUrl = imageUrl;
    };
  }]);