var app = angular.module('rtfmApp');

app.service('threadsService', function(fb, $q) {


	this.getThreads = function() {
		return new Firebase(fb.url + '/threads');


	}

	this.getThread = function(threadId) {
		var dfd = $q.defer();
		new Firebase(fb.url + '/threads/' + threadId);
		return dfd.promise
	}
    
    this.getComments = function(threadId) {
    	var dfd = $q.defer();
		new Firebase(fb.url + '/threads/' + threadId + '/comments');
		return dfd.promise
	}



}); //ends service