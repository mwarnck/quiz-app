//import { answerButton } from './js/answerButton.js';
//import { bookmarks } from './js/bookmark.js';
import { form } from './js/form.js';
import { navigation } from './js/navigation.js';
import Card from './js/Card.js';

const allCardElements = document.querySelectorAll('[data-js="card"]');

allCardElements.forEach(cardElement => {
  Card(cardElement);
});

//bookmarks();
//answerButton();
form();
navigation();
