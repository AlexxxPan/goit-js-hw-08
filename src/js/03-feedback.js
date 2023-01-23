import throttle from 'lodash.throttle';
const feedbackform = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

feedbackform.addEventListener('input', throttle (e => {

}));