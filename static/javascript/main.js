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

$.getJSON( '/locations', function(data) {
    $.each(data, function() {
        markers.push(
            new google.maps.Marker({
                position: {
                    lat: data['location'][0],
                    lng: data['location'][1]
                },
                map: map,
                icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            })
        );
    });
});

});
