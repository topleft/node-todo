// add scripts

function initMap(elementId){
  var map = new google.maps.Map(document.getElementById(elementId), {
      center: {lat:39.393981, lng:-106.016311},
      zoom: 7
    });
  return map;
};


function initAutoComplete(inputId){
  var autocomplete = new google.maps.places.Autocomplete(document.getElementById(inputId));
  return autocomplete;
}

function autoListener(autocomplete){
    var place;
    autocomplete.addListener('place_changed', function() {
    place = autocomplete.getPlace();
    return place;
  });
  return place;
}


$(document).on('ready', function() {
  console.log('sanity check!');
  var autocomplete = initAutoComplete("location-input");

  place = autoListener(autocomplete);

  $(".location").on("click", function(){
    $(".toggle").show();
    var map = initMap("map");
  });

  //create table row for map with unique ID



});
