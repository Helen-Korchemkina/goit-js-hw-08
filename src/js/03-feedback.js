import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailLabel = document.querySelector('.feedback-form input');
const messageLabel = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

saveInfoOfForm();

function onFormSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
}

function onFormInput() {
  const textIntoForm = {
    email: '',
    message: '',
  };
  textIntoForm.email = emailLabel.value;
  textIntoForm.message = messageLabel.value;

  const textIntoFormJSON = JSON.stringify(textIntoForm);
  localStorage.setItem('feedback-form-state', textIntoFormJSON);
}

function saveInfoOfForm() {
  const savedMessage = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedMessage) {
    emailLabel.value = savedMessage.email;
    messageLabel.value = savedMessage.message;
  }
}
