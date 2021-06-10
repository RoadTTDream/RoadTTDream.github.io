"use strict";

var themeIcon = document.querySelector('.header__nav__ul__theme');
themeIcon.addEventListener('click', function (event) {
  event.preventDefault();

  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }

  addDarkTheme();
});

function addDarkTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    console.log('dark');
    document.querySelector('#header-logo').src = '../img/header-logo-dark.png';
    document.querySelector('#theme').href = '../styles/dark-theme.css';
    document.querySelector('.theme-img').src = '../img/theme-light.png';
  } else {
    console.log('light');
    document.querySelector('#header-logo').src = '../img/header-logo.png';
    document.querySelector('#theme').href = '../styles/light-theme.css';
    document.querySelector('.theme-img').src = '../img/theme-dark.png';
  }
}

addDarkTheme(); // function darkmode() {
//     const wasDarkMode = localStorage.getItem('darkmode') === 'true'
//     localStorage.setItem('darkmode', !wasDarkMode)
//     // body.classList.toggle('dark-mode', !wasDarkMode)
//     if (wasDarkMode) {
//         document.querySelector('#header-logo').src = '../img/header-logo.png'
//         document.querySelector('#theme').href = '../styles/light-theme.css'
//         document.querySelector('.theme-img').src = '../img/theme-dark.png'
//     } else {
//         document.querySelector('#header-logo').src = '../img/header-logo-dark.png'
//         document.querySelector('#theme').href = '../styles/dark-theme.css'
//         document.querySelector('.theme-img').src = '../img/theme-light.png'
//     }
// }
// themeIcon.addEventListener('click', darkmode)
// function onload() {
//     document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true')
// }
// document.addEventListener('DOMContentLoaded', onload)