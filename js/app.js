var app = angular.module('rtfmApp', ['ngRoute', 'firebase']);

console.log("Something");

app.constant('fb', {
  		url: 'https://rtfm-wpg.firebaseIO.com'
	});

app.config(function($routeProvider) {
      
      $routeProvider
      .when('/login', {
      	templateUrl: 'login/login.html',
      	controller: 'loginCtrl'
      })

      .when('/threads', {
      	templateUrl: 'threads/threads.html',
      	controller: 'threadsController',
      	resolve:{
      		threadsRef: function(threadsService) {
      			return threadsService.getThreads();
      		}
      	}
      })

      .when('/threads/:threadId', {
      	templateUrl: 'thread/thread.html',
      	controller: 'threadCtrl',
      	resolve: {
      		threadRef: function(threadsService, $route) {
      			return threadsService.getThread($route.current.params.threadId);
      		},
      		commentsRef: function(threadsService, $route) {
      			return threadsService.getComments($route.current.params.threadId);
      		}
      	  }
	}) 

      .otherwise ({
      	redirectTo: '/login'
      })

}) // end the config
