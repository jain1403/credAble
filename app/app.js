'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router']).
config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider,$state) {
	$urlRouterProvider.when("", "home");
	 $stateProvider
	.state('dashboard', {
		url: "/dashboard",
		templateUrl: 'views/dashboard.html',
		controller: 'dashboardCtrl'
	})
	
}]);
