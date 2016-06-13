var map;
var markers = [];
var pos = {};

$("#checkinSubmit").on("click", function(event) {
  var title       = $('#checkin-title').val();
  var msg         = $('#checkin-message').val();
  var createdDate = new Date();
  saveCheckIn(title, msg, createdDate);
  event.preventDefault();
});

function initMap() {
  // setup realtime listener of checkins
  var checkins = firebase.database().ref('checkins');
  checkins.on('child_added', function(checkin) {
    var checkinData = {
      'title': checkin.val().title,
      'message': checkin.val().message,
      'position': {
        'lat': checkin.val().lat,
        'lng': checkin.val().lng
      },
      'createdDate': moment(new Date(checkin.val().createdDate)).format('dddd, MMMM Do YYYY, h:mm a')
    };
    // not sure why but we get undefined if the created date is right now
    if (checkin.createdDate === undefined) {
      checkin.createdDate = "just now";
    }
    addPin(checkinData);
  });
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.6463044, lng: -73.1608573},
    zoom: 15
  });
}

function addPin(checkinData) {
  // the image of our markers
  var image = {
    url: 'https://raw.githubusercontent.com/msolomonTMG/obpbeach.house/map/images/beachball-32.png',
    size: new google.maps.Size(32, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0)
  };

  // create the marker
  var marker = new google.maps.Marker({
    position: checkinData.position,
    title: checkinData.title,
    map: map,
    icon: image,
    animation: google.maps.Animation.DROP
  });

  // create the marker pop up info
  var popupHTML = '<div id="content"><div id="siteNotice"><h1>' + checkinData.title + '</h1><small>' + checkinData.createdDate + '</small></div><hr><div id="bodyContent"><p>' + checkinData.message + '</p></div></div>';
  var infowindow = new google.maps.InfoWindow({
    content: popupHTML
  });

  // when you click the marker, the pop up info shows
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  markers.push(marker); //add the marker to our marker array
  marker.setAnimation(google.maps.Animation.BOUNCE); // make the marker bounce

  // remove beachball and bounce from previous marker so that only the last marker gets this treatment
  var previousMarker = markers[markers.indexOf(marker) - 1];
  if (previousMarker) {
    delete previousMarker.icon;
    previousMarker.setAnimation(null);
  }

  // center the map on the new marker
  var center = new google.maps.LatLng(checkinData.position.lat, checkinData.position.lng);
  map.panTo(center);
}

function saveCheckIn(title, msg, createdDate) {
  var checkinData = {
    lat: pos.lat,
    lng: pos.lng,
    title: title,
    message: msg,
    createdDate: createdDate
  };

  // Get a key for a new Post.
  var newCheckinKey = firebase.database().ref().child('checkins').push().key;
  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/checkins/' + newCheckinKey] = checkinData;

  var onCheckInSaved = function(error) {
    $("#checkin_form").addClass('hidden');

    if (error) {
      console.log('Synchronization failed when saving checkin');
      $("#checkin_failure").removeClass('hidden');
      // failed message
    } else {
      console.log('Synchronization succeeded');
      $("#checkin_success").removeClass('hidden');
      //success message
    }
  };

  return firebase.database().ref().update(updates, onCheckInSaved);
}

function getCheckInLocation() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.6463044, lng: -73.1608573},
    zoom: 15
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Check In Here');
      map.setCenter(pos);
      $('#checkinSubmit').removeClass('disabled');
    }, function(err) {
      handleLocationError(true, infoWindow, map.getCenter(), err);
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter(), err);
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos, err) {
  console.log(err);
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}
