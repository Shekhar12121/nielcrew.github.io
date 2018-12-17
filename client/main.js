var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'template/instagram.html',
			controller:'myCtrl'
		})
});