
function init() {
  let map = new ymaps.Map('map', {
    center: [59.93814654961048, 30.32288629629509],
    zoom: 16,
  });

  let placemark = new ymaps.Placemark([59.93760280814356, 30.322736092590247], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/svg/marker.svg',
    iconImageSize: [18, 22],
    iconImageOffset: [-9, -10],
  });
  map.geoObjects.add(placemark);
}

export const Map = init;
