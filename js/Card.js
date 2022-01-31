export default function Card(cardElement) {
  const buttonFill = cardElement.querySelector('[data-js="button-fill"]');

  buttonFill.addEventListener('click', () => {
    buttonFill.classList.toggle('card__bookmark--filled');
  });

  const answerButton = cardElement.querySelector('[data-js="answer-button"]');
  const answerText = cardElement.querySelector('[data-js="answer-text"]');

  answerButton.addEventListener('click', () => {
    if (answerButton.textContent.trim() === 'Show Answer') {
      answerButton.textContent = 'Hide Answer';
    } else {
      answerButton.textContent = 'Show Answer';
    }
    answerText.classList.toggle('dp-hide');
  });
}
