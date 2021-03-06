'use strict';

var shoppingApp = angular.module('shoppingApp', ['ngRoute', 'angularUtils.directives.dirPagination'])
	.config(function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'views/main.html',
			controller: 'mainCtrl'
		});
		$routeProvider.when('/blog/:blogId', {
			templateUrl: 'views/blog.html',
			controller: 'mainCtrl'
		});
		$routeProvider.when('/bloglist', {
			templateUrl: 'views/bloglist.html',
			controller: 'mainCtrl'
		});
		$routeProvider.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'mainCtrl'
		});
		$routeProvider.when('/items', {
			templateUrl: 'views/itemlist.html',
			controller: 'mainCtrl'
		});
		$routeProvider.when('/items/:category', {
			templateUrl: 'views/itemlist.html',
			controller: 'mainCtrl'
		});
		//		$routeProvider.when('/items/:category', {
		//			templateUrl: 'views/itemlist.html',
		//			controller: 'mainCtrl'
		//		});
		$routeProvider.when('/item/:itemId', {
			templateUrl: 'views/itemDetail.html',
			controller: 'mainCtrl'
		});
		$routeProvider.otherwise({
			redirectTo: '/'
		});
	})