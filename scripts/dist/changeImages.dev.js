"use strict";

var images = ['../img/background-header.jpg', '../img/background-header1.jpg', '../img/background-header2.jpg', '../img/background-header3.jpg', '../img/background-header4.jpg', '../img/background-header5.jpg'];
var i = 0;

function changeImages() {
  document.querySelector('.vimeworld').style.backgroundImage = "url(".concat(images[i], ")");
  i++;

  if (i == images.length) {
    i = 0;
  }

  setTimeout('changeImages()', 8000);
}

function preloadImages() {
  for (var _i = 0; _i < arguments.length; _i++) {
    new Image().src = arguments[_i];
  }
}

changeImages();
preloadImages('../img/background-header.jpg', '../img/background-header1.jpg', '../img/background-header2.jpg', '../img/background-header3.jpg', '../img/background-header4.jpg', '../img/background-header5.jpg');