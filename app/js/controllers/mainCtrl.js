'use strict';

shoppingApp.controller('mainCtrl',
	function MainCtrl($scope, mainData, $routeParams) {
		$scope.sortorder = 'name';

		$scope.topics = mainData.topics;
		$scope.blogs = mainData.blogs;
		$scope.items = mainData.items;
		$scope.itemNow = mainData.items[$routeParams.itemId - 1];

		$scope.category = $routeParams.category;
		$scope.minPrice = 0;
		$scope.maxPrice = 10000;
		$scope.priceFilter = function (item) {
			return item.price > $scope.minPrice && item.price <= $scope.maxPrice;
		};


	});