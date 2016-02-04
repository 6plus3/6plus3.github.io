'use strict';

shoppingApp.controller('mainCtrl',
	function MainCtrl($scope, mainData, $routeParams) {
		$scope.sortorder = 'name';

		$scope.topics = mainData.topics;
		$scope.blogs = mainData.blogs;
		$scope.items = mainData.items;

		$scope.itemNow = mainData.items[$routeParams.itemId - 1];
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

		switch ($scope.priceOption) {
		case 1:
			$scope.priceRange = {
				maxPrice: 20,
				minPrice: 0
			}
			break;
		case 2:
			$scope.priceRange = {
				maxPrice: 50,
				minPrice: 20
			}
			break;
		case 3:
			$scope.priceRange = {
				maxPrice: 100,
				minPrice: 50
			}
			break;
		case 4:
			$scope.priceRange = {
				maxPrice: 10000,
				minPrice: 100
			}
			break;
		default:
			$scope.priceRange = {
				maxPrice: 10000,
				minPrice: 0
			}
		}

		$scope.priceRange = {
			maxPrice: 10000,
			minPrice: 0
		};
		$scope.priceFilter = function (item) {
			if (typeof $scope.priceRange == "string") {
				$scope.priceRange = JSON.parse($scope.priceRange);
			}
			return item.price > $scope.priceRange.minPrice && item.price <= $scope.priceRange.maxPrice;
		};


	});