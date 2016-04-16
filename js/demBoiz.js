'use strict';

let demBoiz = [
  {
    "name": "Scooter",
    "fbId": 684792852,
    "bio": ""
  },
  {
    "name": "Mike",
    "fbId": 666455808,
    "bio": ""
  },
  {
    "name": "Greg",
    "fbId": 1363290225,
    "bio": ""
  },
  {
    "name": "Coach",
    "fbId": 705764484,
    "bio": ""
  },
  {
    "name": "Croxley",
    "fbId": 533712842,
    "bio": ""
  },
  {
    "name": "Blush",
    "fbId": 637890096,
    "bio": ""
  },
  {
    "name": "Nick",
    "fbId": 1235542852,
    "bio": ""
  }
];

$(document).ready(function () {
  demBoiz.forEach(function (boi) {
    addBoiToPage(boi);
  });

  function addBoiToPage (boi) {
    let broCode = '\
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">\
        <div class="welcome_part wow fadeInLeft">\
          <div class="welcome_icon">\
            <img class="img-circle" height="100%" width="100%" src="http://graph.facebook.com/v2.5/'+ boi.fbId +'/picture?height=200&width=200">\
          </div>\
          <h2>' + boi.name + '</h2>\
          <p>' + boi.bio + '</p>\
        </div>\
      </div>\
    ';

    $('#demBoiz').append(broCode);
  }
});
