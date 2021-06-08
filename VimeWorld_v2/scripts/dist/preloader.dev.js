"use strict";

window.onload = function () {
  var preload = document.querySelector('.preloader');
  preload.id = 'hidePreload';
  setTimeout(function () {
    preload.classList.add('fullHide');
  }, 950);
};