var emailLinkElement = document.querySelector('#email-link');
var emailInputElement = document.querySelector('.email-input');

function updateLink() {
  var emailText = emailInputElement.value.trim();
  emailLinkElement.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdz9aFfXK1BQFaqm9Sn54s8Roy6AzSAK6WVJ9EtUR98XWLICw/viewform?entry.1558231148=' + encodeURIComponent(emailText) + '&entry.1143043630';
}
