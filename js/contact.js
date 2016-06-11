'use strict';

$(document).ready(function() {
  $("#contact_form").submit(function(event) {
    sendMessage();
    event.preventDefault();
  });
});

function sendMessage() {
  var HMU_URL = 'http://api.hmu.cool/messages/84607fe0966ef30808b68049f0e049d1';

  var email   = $('#contact_email').val();
  var subject = $('#contact_subject').val();
  var message = $('#contact_text').val();

  var data = {
    email: email,
    fields: {
      subject: subject,
      message: message
    }
  }

  $.post(HMU_URL, data)
    .done(function(response) {
      if (response.ok) {
        showConfirmation({successful:true});
      } else {
        showConfirmation({successful:false});
      }
  });
}

function showConfirmation(result) {
  $('#contact_form').hide();
  if (result.successful) {
    $('#contact-success').show();
  } else {
    $('#show_contact_msg').text('Something went wrong');
  }
}
