import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEmailEl = document.querySelector('input[name="email"]');
const textareaMessageEl = document.querySelector('textarea[name="message"]');
formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

const FEEDBACK_FORM_STATE = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE)) ?? {};
restoreFormValue();

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData));
}

function restoreFormValue() {
  const savedData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE));

  if (savedData) {
    inputEmailEl.value = savedData[inputEmailEl.name];
    textareaMessageEl.value = savedData[textareaMessageEl.name];
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_STATE);
  console.log(formData);
}
