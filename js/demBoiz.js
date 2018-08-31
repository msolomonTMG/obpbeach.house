'use strict';

var demBoiz = [
  {
    "name": "Scooter",
    "fbId": 684792852,
    "bio": "It'd be weird if i wrote my own",
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
    "bio": "Hobbies include going to the hospital, and not doing things. Recently moved down the street. It almost killed him.",
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
    "bio": "AKA  Gerg. Not so secretly wishes Four Lokos would make a comeback. Really only here for new profile pictures.",
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
    "bio": "Your garden variety 'hotel-manager turned business owner turned pilot turned physical therapist turned eletrical engineer' story. ",
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
    "bio": "AKA 'Big House Cory'. Chances are, hes not enjoying a single minute of this trip. Anyway, here's Wonderwall.",
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
    "bio": "Self-proclaimed GOAT. Self-proclaimed diabetic. Self-proclaims a lot. To the right is his cousin, Chris. He hates this photo.",
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
    "bio": "Really hates that we still call him Armani Jon. Really hates us in general. Thinks beer is made with broccoli. Idiot.",
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
             <a href="http://www.facebook.com/' + boi.fbId + '"><img class="img-circle" height="100%" width="100%" src="images/'+ boi.name +'.png"></a>\
          </div>\
          <h2>' + boi.name + '</h2>\
          <p><a href="//' + boi.social[0].site + '.com/' + boi.social[0].user + '"><i class="fa fa-' + boi.social[0].site + '"></i> ' + boi.social[0].user + '</a></p>\
        <p>' + boi.bio + ' </p>\
        </div>\
      </div>\
    ';

    $('#demBoiz').append(broCode);
  }
});
