'use strict';

$(document).ready(function() {
  $("#contact_form").submit(function(event) {
    sendMessage();
    event.preventDefault();
  });
});

function sendMessage() {
  const HMU_URL = 'http://api.hmu.cool/messages/84607fe0966ef30808b68049f0e049d1';

  let email   = $('#contact_email').val();
  let subject = $('#contact_subject').val();
  let message = $('#contact_text').val();

  fetch(HMU_URL, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      email: email,
      fields: {
        subject: subject,
        message: message
      }
    })
  }).then(function (response) {
    if (response.ok) {
      showConfirmation({successful:true});
    } else {
      showConfirmation({successful:false});
    }
  })
}

function showConfirmation(result) {
  $('#contact_form').hide();
  if (result.successful) {
    $('#contact-success').show();
  } else {
    $('#show_contact_msg').text('Something went wrong');
  }
}
