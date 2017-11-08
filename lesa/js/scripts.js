ymaps.ready(init);
var myMap;

function init() {
	myMap = new ymaps.Map('map', {
		center: [53.768904500749464, 27.597200248224823],
		zoom: 12,
	});

	ymaps
		.route([
			{
				type: 'viaPoint',
				point: [53.90229709105455, 27.55189864160153],
			},
			{
				type: 'viaPoint',
				point: [53.768904500749464, 27.597200248224823],
			},
		])
		.then(
			function(route) {
				myMap.geoObjects.add(route);
			},
			function(error) {
				alert('Возникла ошибка: ' + error.message);
			}
		);
}
