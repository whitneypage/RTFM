var app = angular.module('rtfmApp');

app.controller('loginCtrl', function($scope, $location) {

$scope.username;

$scope.logMeIn = function(name) {
	alert(name);
	$location.path('/threads/' + name);
}








}); //ends controller