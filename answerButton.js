const answerButton = document.querySelector('[data-js="answer-button"]');
const answerText = document.querySelector('[data-js="answer-text"]');

answerButton.addEventListener('click', () => {
  if (answerButton.textContent.trim() === 'Show Answer') {
    answerButton.textContent = 'Hide Answer';
  } else {
    answerButton.textContent = 'Show Answer';
  }
  answerText.classList.toggle('dp-hide');
});
