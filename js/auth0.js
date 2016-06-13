var lock = new Auth0Lock('oW84zchhtMj6g53ZZDhfKKoSj3Jt9C16', 'beaachhouseboiz.auth0.com');

document.getElementById('btn-login').addEventListener('click', function() {
  lock.show({
    authParams: { scope: 'openid' },
    icon: 'https://raw.githubusercontent.com/msolomonTMG/obpbeach.house/gh-pages/images/beachball.png'
  });
});

var hash = lock.parseHash(window.location.hash);
if (hash) {
  if (hash.error) {
    console.log("There was an error logging in", hash.error);
    alert('There was an error: ' + hash.error + '\n' + hash.error_description);
  } else {
    //save the token in the session:
    localStorage.setItem('id_token', hash.id_token);
  }
}

//retrieve the profile:
var id_token = localStorage.getItem('id_token');
if (id_token) {
  lock.getProfile(id_token, function (err, profile) {
    if (err) {
      return alert('There was an error getting the profile: ' + err.message);
    }
    $('#login-button-section').hide();
    $('#sign-guest-book-button-section').show();
    $('.form-group').prop("disabled", false);
  });
}
