let map;
let markers = [];
let marker;
let disabled = true;

function initialize() {
    console.log('test');
    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(31.7771, -40.24965),
        zoom: 3,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
    var request = new XMLHttpRequest();
    request.open('GET', '/locations', true);
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            data.forEach((location) => {
                markers.push(
                    new google.maps.Marker({
                        position: {
                            lat: parseFloat(location['latitude']),
                            lng: parseFloat(location['longitude']),
                        },
                        label: location['label'],
                        map: map,
                        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                    })
                );
            });
        } else {
            console.error('ERROR: ' + request.error + ', ' + request.status);
        }
    };
    request.onerror = () => {
        console.error('ERROR: ' + request.error + ', ' + request.status);
    };
    request.send();

    addClickEventListener();
    disableSaveButton();
}

function addClickEventListener() {
    map.addListener('click', (e) => {
        placeMarkerAndPanTo(e.latLng, map);
    });
}

function placeMarkerAndPanTo(latLng, map) {
   marker = new google.maps.Marker({
        position: latLng,
        map: map,
    });
    map.panTo(latLng);
}

function disableSaveButton() {
    document.getElementById('save-button').disabled = true;
}
