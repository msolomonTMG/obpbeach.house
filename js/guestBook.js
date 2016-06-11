$(document).ready(function() {
  $("#guestBookSubmit").on("click", function(event) {
    var displayName = $('#post_display_name').val();
    var msg         = $('#post_message').val();
    writePost(displayName, msg);
    event.preventDefault();
  });

  $('#show-all-button').on("click", function(event) {
    $('.timeline-item').css("display", "block");
    $(this).hide();
    event.preventDefault();
  })

  initializeGuestBook();
});

function initializeGuestBook() {
  // this sets up a real-time retrieval of guest book posts
  // if another post gets added, this code gets fired
  // we also fire it for each post on initial retrieval
  // TODO: give users the ability to delete their own posts and update that in real time

  var posts = firebase.database().ref('posts');
  posts.on('child_added', function(post) {
    var postData = {
      'displayName': post.val().displayName,
      'message': post.val().message,
      'createdDate': post.val().createdDate
    };
    // not sure why but we get undefined if the created date is right now
    if (postData.createdDate === undefined) {
      postData.createdDate = "just now";
    }
    printPost(postData);
  });

  function printPost(post) {
    var createdDate = post.createdDate;

    if (createdDate != "just now") {
      createdDate  = new Date(post.createdDate);
      createdDate = createdDate.toString();
      createdDate = createdDate.split(/[0-9][0-9][0-9][0-9]/)[0];
    }

    var postHTML = '\
      <li class="timeline-item timeline-inverted">\
        <div class="timeline-badge"><i class="fa fa-comment-o fa-flip-horizontal" aria-hidden="true"></i></div>\
        <div class="timeline-panel">\
          <div class="timeline-heading">\
            <h4 class="timeline-title"><strong>' + post.displayName + '</strong></h4>\
            <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> ' + createdDate + '</small></p>\
          </div>\
          <div class="timeline-body">\
            <p>' + post.message + '</p>\
          </div>\
        </div>\
      </li>\
    ';

    $('#guest_book_posts').append(postHTML);

    if ( $('#guest_book_posts :nth-last-child(2)').hasClass('timeline-inverted') ) {
      $('#guest_book_posts :last-child').removeClass('timeline-inverted');
      $('#guest_book_posts :last-child i').removeClass('fa-flip-horizontal');
    }

    // if (index % 2 != 0) {
    //   $('#post_' + index).addClass('timeline-inverted');
    //   $('#icon_' + index).addClass('fa-flip-horizontal');
    // }

  }
}

function writePost(displayName, message, callback) {
  //retrieve the profile:
  var id_token = localStorage.getItem('id_token');
  if (id_token) {
    lock.getProfile(id_token, function (err, profile) {
      if (err) {
        return alert('There was an error getting the profile: ' + err.message);
      }
      var postData = {
        username: profile.name,
        userURL: profile.link,
        displayName: displayName,
        message: message,
        createdDate: new Date()
      };
      // Get a key for a new Post.
      var newPostKey = firebase.database().ref().child('posts').push().key;
      // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {};
      updates['/posts/' + newPostKey] = postData;
      updates['/user-posts/' + profile.clientID + '/' + newPostKey] = postData;

      return firebase.database().ref().update(updates);
    });
  }
}
