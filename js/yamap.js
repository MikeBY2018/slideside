        // Функция ymaps.ready() будет вызвана, когда
        // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){ 
    // Создание карты.    
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [53.93972093, 27.60276092],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16
    });

    var myPin = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/bluepointer.png',
        iconImageSize: [30, 47],
        iconImageOffset: [-20, -42]
    });

    //элементы управления карты
    myMap.controls
        .remove('geolocationControl')
        .remove('searchControl')
        .remove('trafficControl')
        .remove('typeSelector');

    //поведение карты
    myMap.behaviors.disable(['scrollZoom', 'dblClickZoom', 'drag']);


    //балун и хинт
    var myPlacemark1 = new ymaps.Placemark([53.93958839, 27.60170091], {
        balloonContentHeader: '<img src="img/logo_site.svg" alt="2FAS Shield" class="shield-baloon"><span class="baloon-header">Курсы программирования</span>',
        balloonContentBody: '<span class="baloon-body">HTML, CSS, JS, JAVA, Python/JANGO</span>',
        balloonContentFooter: 'Наш адрес: г.Минск, ул.Мележа,1, оф.1223',
        hintContent: 'Офис ORMEDIA'
    });

    myPin.add(myPlacemark1);    
    myMap.geoObjects.add(myPin);    
}




