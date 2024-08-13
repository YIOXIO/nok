import './index.css'

const popup = document.querySelector('.popup');
const buttonClosePopup = document.querySelector('.popup__close');
const buttonPopupOpen = document.querySelectorAll('.hero__button');
const popupChoise = document.querySelector('.popup__choise');
const sideNavBar = document.querySelector('.side-navbar');
const burgerMenu = document.querySelector('.burger-menu');
const dropdownButtons = document.querySelectorAll('.header__dropdown-button');
const dropdownMenus = document.querySelectorAll('.dropdown-content');
import SlimSelect from 'slim-select'


burgerMenu.addEventListener('click', function () {
  sideNavBar.classList.toggle('side-navbar-open');
});


burgerMenu.addEventListener('click', function () {
  this.classList.toggle('active');
});

function openPopup(popupElement) {
  popupElement.classList.add('popup_is_active');
  popupElement.addEventListener('click', handleOverlayClosePopup);
  document.addEventListener('keydown', handleEscClosePopup);
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_is_active');
  popupElement.removeEventListener('click', handleOverlayClosePopup);
  document.removeEventListener('keydown', handleEscClosePopup);
}

function handleOverlayClosePopup(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}

function handleEscClosePopup(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_is_active'));
  }
}

if (buttonClosePopup) {
  buttonClosePopup.addEventListener('click', () => closePopup(popup));
}

function toggleDropdown(menu) {
  menu.classList.toggle('active');
}

dropdownButtons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    toggleDropdown(dropdownMenus[index]);
    button.classList.toggle('header__dropdown-button_active');
  });
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    dropdownMenus.forEach(menu => {
      menu.classList.remove('active');
    });
    dropdownButtons.forEach(button => {
      button.classList.remove('header__dropdown-button_active');
    });
  }
});

document.addEventListener('click', function (event) {
  dropdownButtons.forEach((button, index) => {
    if (!button.contains(event.target)) {
      dropdownMenus[index].classList.remove('active');
      button.classList.remove('header__dropdown-button_active');
    }
  });
});

buttonPopupOpen.forEach(button => {
  button.addEventListener('click', () => {
    openPopup(popupChoise)
  })
})





new SlimSelect({
  select: '#finSelect',
  settings: {
    searchText: 'Ничего не найдено',
    searchPlaceholder: 'Поиск...',
  }
});
new SlimSelect({
  select: '#foivSelect',
  settings: {
    searchText: 'Ничего не найдено',
    searchPlaceholder: 'Поиск...',
  }
});

new SlimSelect({
  select: '#dutySelect',
  settings: {
    showSearch: false,
  }
});

