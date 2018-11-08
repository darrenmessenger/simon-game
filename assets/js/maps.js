/***************************Google Map Functions*******************************/

/*Initialize and add the map*/
function initMap() {
    // The location of my location
    var myCenter = new google.maps.LatLng(51.241896, -0.210983);
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: myCenter
    });
    
    /*Create a marker that pinpoints where I live*/
    
    var marker = new google.maps.Marker({
        position: myCenter,
        map: map
    });

    /*If the user clicks on the marker then zoom in*/
    
    google.maps.event.addListener(marker, 'click', function() {
        map.setZoom(11);
        map.setCenter(marker.getPosition());
    });
}
