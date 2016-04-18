'use strict';

var demBoiz = [
  {
    "name": "Scooter",
    "fbId": 684792852,
    "bio": "Testing",
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
    "bio": "Testing",
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
    "bio": "Testing",
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
    "bio": "Testing",
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
    "bio": "Testing",
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
    "bio": "Testing",
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
    "bio": "Testing",
    "social": [
      {
        "site": "facebook",
        "user": "nicholas.delplato"
      }
    ]
  }
];

$(document).ready(function () {
  demBoiz.forEach(function (boi, index) {
    var animation = new Promise (function (resolve, reject) {
      if (index % 2 === 0) {
        resolve('fadeInLeft');
      } else {
        resolve('fadeInRight');
      }
    });

    animation.then(function (animation) {
      addBoiToPage(boi, animation);
    });
  });

  function addBoiToPage (boi, animation) {
    var broCode = '\
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">\
        <div class="welcome_part wow ' + animation + '">\
          <div class="welcome_icon">\
            <img class="img-circle" height="100%" width="100%" src="http://graph.facebook.com/v2.5/'+ boi.fbId +'/picture?height=200&width=200">\
          </div>\
          <h2>' + boi.name + '</h2>\
          <p><a href="//' + boi.social[0].site + '.com/' + boi.social[0].user + '"><i class="fa fa-' + boi.social[0].site + '"></i> ' + boi.social[0].user + '</a></p>\
          <p> ' + boi.bio +' </p>
        </div>\
      </div>\
    ';

    $('#demBoiz').append(broCode);
  }
});
