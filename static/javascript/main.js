let map;
let markers = [];
let disabled = true;

function initialize() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(31.7771, -40.24965),
        zoom: 3,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
    makeLocationsRequest();
    addClickEventListener();
    disableSaveButton();
}

function makeLocationsRequest() {
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
}

function addClickEventListener() {
    const marker = new google.maps.Marker({
        position: myLatlng,
        map,
        title: "click to zoom",
    });
    marker.addListener('click', () => {
        map.setZoom(8);
        map.setCenter(marker.getPosition());
    });
}

function disableSaveButton() {
    const button = document.getElementById('save-button');
    button.disabled = true;
}
