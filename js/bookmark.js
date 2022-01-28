export function bookmarks() {
  const buttonFill = document.querySelector('[data-js="button-fill"]');

  buttonFill.addEventListener('click', () => {
    buttonFill.classList.toggle('card__bookmark--filled');
  });
}
