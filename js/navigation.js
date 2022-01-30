export function navigation() {
  const buttonHome = document.querySelector('[data-js="button-home"]');
  const buttonBookmarks = document.querySelector(
    '[data-js="button-bookmarks"]'
  );
  const buttonCreate = document.querySelector('[data-js="button-create"]');
  const buttonProfile = document.querySelector('[data-js="button-profile"]');

  const pageHome = document.querySelector('[data-js="home"]');
  const pageBookmarks = document.querySelector('[data-js="bookmarks"]');
  const pageCreate = document.querySelector('[data-js="create"]');
  const pageProfile = document.querySelector('[data-js="profile"]');

  const headerHome = document.querySelector('[data-js="header-home"]');
  const headerBookmarks = document.querySelector(
    '[data-js="header-bookmarks"]'
  );
  const headerCreate = document.querySelector('[data-js="header-create"]');
  const headerProfile = document.querySelector('[data-js="header-profile"]');

  buttonHome.addEventListener('click', () => {
    pageHome.classList.remove('dp-hide');
    headerHome.classList.remove('dp-hide');
    buttonHome.classList.add('navigation__button--active');
    pageBookmarks.classList.add('dp-hide');
    headerBookmarks.classList.add('dp-hide');
    buttonBookmarks.classList.remove('navigation__button--active');
    pageCreate.classList.add('dp-hide');
    headerCreate.classList.add('dp-hide');
    buttonCreate.classList.remove('navigation__button--active');
    pageProfile.classList.add('dp-hide');
    headerProfile.classList.add('dp-hide');
    buttonProfile.classList.remove('navigation__button--active');
  });

  buttonBookmarks.addEventListener('click', () => {
    pageHome.classList.add('dp-hide');
    headerHome.classList.add('dp-hide');
    buttonHome.classList.remove('navigation__button--active');
    pageBookmarks.classList.remove('dp-hide');
    headerBookmarks.classList.remove('dp-hide');
    buttonBookmarks.classList.add('navigation__button--active');
    pageCreate.classList.add('dp-hide');
    headerCreate.classList.add('dp-hide');
    buttonCreate.classList.remove('navigation__button--active');
    pageProfile.classList.add('dp-hide');
    headerProfile.classList.add('dp-hide');
    buttonProfile.classList.remove('navigation__button--active');
  });

  buttonCreate.addEventListener('click', () => {
    pageHome.classList.add('dp-hide');
    headerHome.classList.add('dp-hide');
    buttonHome.classList.remove('navigation__button--active');
    pageBookmarks.classList.add('dp-hide');
    headerBookmarks.classList.add('dp-hide');
    buttonBookmarks.classList.remove('navigation__button--active');
    pageCreate.classList.remove('dp-hide');
    headerCreate.classList.remove('dp-hide');
    buttonCreate.classList.add('navigation__button--active');
    pageProfile.classList.add('dp-hide');
    headerProfile.classList.add('dp-hide');
    buttonProfile.classList.remove('navigation__button--active');
  });

  buttonProfile.addEventListener('click', () => {
    pageHome.classList.add('dp-hide');
    headerHome.classList.add('dp-hide');
    buttonHome.classList.remove('navigation__button--active');
    pageBookmarks.classList.add('dp-hide');
    headerBookmarks.classList.add('dp-hide');
    buttonBookmarks.classList.remove('navigation__button--active');
    pageCreate.classList.add('dp-hide');
    headerCreate.classList.add('dp-hide');
    buttonCreate.classList.remove('navigation__button--active');
    pageProfile.classList.remove('dp-hide');
    headerProfile.classList.remove('dp-hide');
    buttonProfile.classList.add('navigation__button--active');
  });
}
