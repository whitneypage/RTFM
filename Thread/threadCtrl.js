var app = angular.module('rtfmApp');

app.controller('threadCtrl', function($scope, threadRef, commentsRef, $firebaseObject ) {

	var thread = $firebaseObject(threadRef);

	thread.$bindTo($scope, 'thread');

	$scope.comments = $firebaseArray(commentsRef);

	$scope.createComment = function(username, text) {
		$scope.comments.$add({
			username:username,
			text: text
		});
	};


});