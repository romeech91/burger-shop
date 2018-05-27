
ymaps.ready(init);
var myMap;
var myPlacemark1, myPlacemark2, myPlacemark3;

function init() {
	myMap = new ymaps.Map("map", {
		center: [59.93337799, 30.34010308],
		zoom: 12
			});
	myPlacemark1 = new ymaps.Placemark([59.93402348, 30.33998880], {
		hintContent: 'Mr.Burger',
		balloonContent: 'Ресторан быстрого питания, График работы: пн-вс 10:00 - 23:00'
	}, {
		iconLayout: 'default#image',
		iconImageHref: './img/icons/map-marker.svg',
		iconImageSize: [46, 58],
		iconImageOffset: [-3, -42]
	});
	myPlacemark2 = new ymaps.Placemark([59.96180304, 30.40697009], {
		hintContent: 'Mr.Burger',
		balloonContent: 'Ресторан быстрого питания, График работы: пн-вс 10:00 - 23:00'
	}, {
		iconLayout: 'default#image',
		iconImageHref: './img/icons/map-marker.svg',
		iconImageSize: [46, 58],
		iconImageOffset: [-3, -42]
	});
	myPlacemark3 = new ymaps.Placemark([59.95471786, 30.32426274], {
		hintContent: 'Mr.Burger',
		balloonContent: 'Ресторан быстрого питания, График работы: пн-вс 10:00 - 23:00'
	}, {
		iconLayout: 'default#image',
		iconImageHref: './img/icons/map-marker.svg',
		iconImageSize: [46, 58],
		iconImageOffset: [-3, -42]
	});

	myMap.geoObjects.add(myPlacemark1);
	myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
}