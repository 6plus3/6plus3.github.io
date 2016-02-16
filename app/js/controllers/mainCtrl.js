'use strict';

shoppingApp.controller('mainCtrl',
	function MainCtrl($scope, mainData, $routeParams) {
		$scope.sortorder = 'name';

		$scope.topics = mainData.topics;
		$scope.blogs = mainData.blogs;
		$scope.items = mainData.items;

		$scope.itemNow = mainData.items[$routeParams.itemId - 1];
		$scope.blogNow = mainData.blogs[$routeParams.blogId - 1];

		if ($routeParams.itemId == mainData.items.length) {
			$scope.itemNext = mainData.items[0];
		} else {
			$scope.itemNext = mainData.items[$routeParams.itemId];
		}
		if ($routeParams.itemId - 2 < 0) {
			$scope.itemPrev = mainData.items[mainData.items.length - 1];
		} else {
			$scope.itemPrev = mainData.items[$routeParams.itemId - 2];
		}

		$scope.category = $routeParams.category;



		$scope.priceFilter = function (item) {
			if (!$scope.priceRange) {
				return true;
			}
			if (!$scope.priceRange.maxPrice) {
				return item.price > $scope.priceRange.minPrice;
			}
			return item.price > $scope.priceRange.minPrice && item.price <= $scope.priceRange.maxPrice;
		};
	});