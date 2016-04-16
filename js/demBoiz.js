'use strict';

let demBoiz = [
  {
    "name": "Scooter",
    "fbId": 684792852,
    "social": [
      {
        "site": "instagram",
        "user": "56slevin"
      }
    ]
  },
  {
    "name": "Machiste",
    "fbId": 666455808,
    "social": [
      {
        "site": "instagram",
        "user": "mike_solomon"
      }
    ]
  },
  {
    "name": "Uncle Greg",
    "fbId": 1363290225,
    "social": [
      {
        "site": "twitter",
        "user": "The_Uncle_Greg"
      }
    ]
  },
  {
    "name": "Coach",
    "fbId": 705764484,
    "social": [
      {
        "site": "instagram",
        "user": "ryan_pearsall64"
      }
    ]
  },
  {
    "name": "Croxley",
    "fbId": 533712842,
    "social": [
      {
        "site": "instagram",
        "user": "corymeyers"
      }
    ]
  },
  {
    "name": "Blush",
    "fbId": 637890096,
    "social": [
      {
        "site": "instagram",
        "user": "diabeticbuzzi"
      }
    ]
  },
  {
    "name": "Nick",
    "fbId": 1235542852,
    "social": [
      {
        "site": "facebook",
        "user": "nicholas.delplato"
      }
    ]
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
          <p><a href="//' + boi.social[0].site + '.com/' + boi.social[0].user + '"><i class="fa fa-' + boi.social[0].site + '"></i> ' + boi.social[0].user + '</a></p>\
        </div>\
      </div>\
    ';

    $('#demBoiz').append(broCode);
  }
});
