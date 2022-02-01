export function navigation() {
  const buttonHome = document.querySelector('[data-nav="home"]');
  const buttonBookmarks = document.querySelector('[data-nav="bookmarks"]');
  const buttonCreate = document.querySelector('[data-nav="create"]');
  const buttonProfile = document.querySelector('[data-nav="profile"]');

  const pageHome = document.querySelector('[data-page="home"]');
  const pageBookmarks = document.querySelector('[data-page="bookmarks"]');
  const pageCreate = document.querySelector('[data-page="create"]');
  const pageProfile = document.querySelector('[data-page="profile"]');

  const headerHome = document.querySelector('[data-header="home"]');
  const headerBookmarks = document.querySelector('[data-header="bookmarks"]');
  const headerCreate = document.querySelector('[data-header="create"]');
  const headerProfile = document.querySelector('[data-header="profile"]');

  const allPages = document.querySelectorAll('[data-page]');
  const allHeader = document.querySelectorAll('[data-header]');
  const allButtons = document.querySelectorAll('[data-nav]');

  buttonHome.addEventListener('click', () => {
    allPages.forEach(page => {
      page.classList.add('dp-hide');
    });
    allHeader.forEach(header => {
      header.classList.add('dp-hide');
    });
    allButtons.forEach(button => {
      button.classList.remove('navigation__button--active');
    });
    pageHome.classList.remove('dp-hide');
    headerHome.classList.remove('dp-hide');
    buttonHome.classList.add('navigation__button--active');
  });

  buttonBookmarks.addEventListener('click', () => {
    allPages.forEach(page => {
      page.classList.add('dp-hide');
    });
    allHeader.forEach(header => {
      header.classList.add('dp-hide');
    });
    allButtons.forEach(button => {
      button.classList.remove('navigation__button--active');
    });
    pageBookmarks.classList.remove('dp-hide');
    headerBookmarks.classList.remove('dp-hide');
    buttonBookmarks.classList.add('navigation__button--active');
  });

  buttonCreate.addEventListener('click', () => {
    allPages.forEach(page => {
      page.classList.add('dp-hide');
    });
    allHeader.forEach(header => {
      header.classList.add('dp-hide');
    });
    allButtons.forEach(button => {
      button.classList.remove('navigation__button--active');
    });
    pageCreate.classList.remove('dp-hide');
    headerCreate.classList.remove('dp-hide');
    buttonCreate.classList.add('navigation__button--active');
  });

  buttonProfile.addEventListener('click', () => {
    allPages.forEach(page => {
      page.classList.add('dp-hide');
    });
    allHeader.forEach(header => {
      header.classList.add('dp-hide');
    });
    allButtons.forEach(button => {
      button.classList.remove('navigation__button--active');
    });
    pageProfile.classList.remove('dp-hide');
    headerProfile.classList.remove('dp-hide');
    buttonProfile.classList.add('navigation__button--active');
  });
}
