import throttle from 'lodash.throttle';

const feedbackform = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

feedbackform.addEventListener(
  'input',
  throttle(e => {
    const sevedObject = { email: email.value, message: message.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(sevedObject));
  }, 500)
);

feedbackform.addEventListener('submit', e => {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });
  if (!e.target.email.value || !e.target.message.value) {
    alert('Please enter all data to form');
    return;
  }
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
});

try {
  const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  return data === null ? undefined : data;
} catch (error) {
  console.error('Error.message ', error.message);
}

const loadedData = data;
if (loadedData) {
  email.value = loadedData.email;
  message.value = loadedData.message;
}
