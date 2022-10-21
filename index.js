var gMap

function initMap() {

    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.6303, lng: 87.8539}, zoom: 3});

    //Adds marker for Silwad, Palestine
    var marker = new google.maps.Marker({position: {lat:31.9794, lng: 35.2619 }, map:gMap})

    var infoWindow = new google.maps.InfoWindow({content: 'Silwad, Palestine: Where I was born'})
    marker.addListener('click', function() {
        infoWindow.open(gMap, marker)
    })

}