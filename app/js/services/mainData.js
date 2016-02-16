'use strict';

shoppingApp.factory('mainData', function () {
	return {
		topics: [{
				name: '化妆品',
				id: 'makeup'
			},
			{
				name: '护肤品',
				id: 'skincare'
			},
			{
				name: '美食',
				id: 'food'
			}],
		blogs: [{
				title: '化妆品1',
				text: 'aaaaa',
				id: '1',
				img: ''
			},
			{
				title: '化妆品2',
				text: 'bbbb',
				id: '2',
				img: ''
			},
			{
				title: '化妆品3',
				text: 'ccccc',
				id: '3',
				img: ''
			}],
		items: [
			{
				id: '1',
				name: 'aaaaa',
				price: 111,
				availability: false,
				details: 'asdfasdfasdf',
				imageNumber: '3',
				category: 'makeup'
				},
			{
				id: '2',
				name: 'bbbbb',
				price: 21,
				oldPrice: 30,
				availability: true,
				details: 'bbbbbfasdf',
				imageNumber: '2',
				category: 'skincare'
				},
			{
				id: '3',
				name: 'ccccc',
				price: 51,
				oldPrice: 60,
				availability: true,
				details: 'ffdfasdf',
				imageNumber: '4',
				category: 'food'
				}

			]
	}
});