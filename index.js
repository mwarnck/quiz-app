import { form } from './components/form.js';
import { navigation } from './components/navigation.js';
import Card from './components/Card.js';

const allCardElements = document.querySelectorAll('[data-js="card"]');

allCardElements.forEach(cardElement => {
  Card(cardElement);
});

form();
navigation();
