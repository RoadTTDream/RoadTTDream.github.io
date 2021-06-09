function preloadImages() {
    for (let i = 0; i < arguments.length; i++) {
      new Image().src = arguments[i];
    }
  }
  
  preloadImages(
    '../img/background-header.jpg',
    '../img/background-header1.jpg',
    '../img/background-header2.jpg',
    '../img/background-header3.jpg',
    '../img/background-header4.jpg',
    '../img/background-header5.jpg',
  );