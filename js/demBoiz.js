'use strict';

var demBoiz = [
  {
    "name": "Scooter",
    "fbId": 684792852,
    "bio": "Has broken more windows than all other members combined",
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
    "bio": "Owns the record for most Finleys' Revenges consumed in one night, with Eight.",
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
    "bio": "In Uncle Greg's last beach house residency, he took full advantage; sleeping for a grand total of 35 minutes for the entire week.",
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
    "bio": "As Republican as he is Angry, there's a good chance he's already fed up with your 'bullshit'",
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
    "bio": "Young. Hot. Brash. With more covers in his first year than any male rookie model ever, and an attitude that says 'Who cares, it's only fashion'",
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
    "bio": "Diabetes hasn't stopped him yet; but it will soon enough",
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
    "bio": "One half of Nictoria, Nick is the only person in the Beach House Boiz that believes in climate change",
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
          <p>' + boi.bio + '</p>\
        </div>\
      </div>\
    ';

    $('#demBoiz').append(broCode);
  }
});
