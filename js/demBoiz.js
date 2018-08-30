'use strict';

var demBoiz = [
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
    "name": "Sol",
    "fbId": 666455808,
    "social": [
      {
        "site": "instagram",
        "user": "mike_solomon"
      }
    ]
  },
  {
    "name": "Uncle Gerg",
    "fbId": 1363290225,
    "social": [
      {
        "site": "twitter",
        "user": "The_Uncle_Greg"
      }
    ]
  },
  {
    "name": "Matt",
    "fbId": 713070099,
    "social": [
      {
        "site": "instagram",
        "user": "mmbayerr1"
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
    "name": "Armani Jon",
    "fbId": 100013299765951,
    "social": [
      {
        "site": "instagram",
        "user": "jon_farcc"
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
             <a href="http://www.facebook.com/' + boi.fbId + '"><img class="img-circle" height="100%" width="100%" src="http://graph.facebook.com/v2.5/'+ boi.fbId +'/picture?height=200&width=200"></a>\
          </div>\
          <h2>' + boi.name + '</h2>\
          <p><a href="//' + boi.social[0].site + '.com/' + boi.social[0].user + '"><i class="fa fa-' + boi.social[0].site + '"></i> ' + boi.social[0].user + '</a></p>\
        </div>\
      </div>\
    ';

    $('#demBoiz').append(broCode);
  }
});
