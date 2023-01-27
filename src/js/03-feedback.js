// import throttle from 'lodash.throttle';

// const feedbackform = document.querySelector('.feedback-form');
// const email = document.querySelector('input[name="email"]');
// const message = document.querySelector('textarea[name="message"]');
// const LOCALSTORAGE_KEY = 'feedback-form-state';

// let sevedObject = {};
// feedbackform.addEventListener('input', throttle(storageFormData, 500));

// function storageFormData(e) {
//   sevedObject[e.target.name] = e.target.value.trim();
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(sevedObject));
// }

// feedbackform.addEventListener('submit', onFormSubmit);

//   function onFormSubmit(e) {
//     console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
//   e.preventDefault();
//     if (!e.target.email.value || !e.target.message.value) {
//     alert('Please enter all data to form');
//     return;
//   }

//   e.target.reset();
//   localStorage.removeItem(LOCALSTORAGE_KEY);
//   sevedObject = {};
// };
// reloadPage();
// function reloadPage() {
// try {
//   const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
//   return data === null ? undefined : data;
// } catch (error) {
//   console.error('Error.message ', error.message);
// }

// if (data) {
//   sevedObject = JSON.parse(data);
//   console.log(sevedObject);
//   email.value = data.email;
//   message.value = data.message;
// }
// }

import throttle from 'lodash.throttle';

const feedbackform = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

let formData = {};

feedbackform.addEventListener('input', throttle(storageFormData, 500));
feedbackform.addEventListener('submit', onFormSubmit);

reloadPage();

function storageFormData(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  if (email.value === "" || message.value === "") {
      return alert('Please enter all data to form');
  }

  const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  console.log(savedData);

  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  formData = {};
}

function reloadPage() {
   const savedValues = localStorage.getItem(LOCALSTORAGE_KEY);

  if (savedValues) {
    formData = JSON.parse(savedValues);
    console.log(formData);

    email.value = formData.email;
    message.value = formData.message;
    
  }
}
