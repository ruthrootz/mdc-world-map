function ready(callback) {
    // in case the document is already rendered
    if (document.readyState!='loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
}

ready(() => {

    let map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(49.279504, -123.1162),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    let markers = [];

    var request = new XMLHttpRequest();
    request.open('GET', '/locations', true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            data.forEach(function() {
                markers.push(
                    new google.maps.Marker({
                        position: {
                            lat: data['latitude'],
                            lng: data['longitude'],
                        },
                        map: map,
                        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                        name: data['name'],
                    })
                );
            });
        } else {
            console.error('ERROR: ' + request.error + ', ' + request.status);
        }
    };

    request.onerror = function() {
        console.error('ERROR: ' + request.error + ', ' + request.status);
    };

    request.send();

});
