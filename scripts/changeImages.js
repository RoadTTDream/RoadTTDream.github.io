let images = [
  '../img/background-header.png',
  '../img/1.jpg',
  '../img/2.jpg',
  '../img/3.png',
]
let i = 0

function changeImages() {
  document.querySelector(
    '.vimeworld'
  ).style.backgroundImage = `url(${images[i]})`
  i++
  if (i == images.length) {
    i = 0
  }
  setTimeout('changeImages()', 5000)
}

changeImages()

// function fade_on() {
//   var img1 = document.images.img1
//   var img2 = document.images.img2
//   timer2 = null
//   img1.style.opacity -= 0.1
//   img2.style.opacity = img2.style.opacity * 1 + 0.1
//   if (img2.style.opacity < 1.0) timer1 = setTimeout(arguments.callee, 100)
// }
// function fade_off() {
//   var img1 = document.images.img1
//   var img2 = document.images.img2
//   timer1 = null
//   img1.style.opacity = img1.style.opacity * 1 + 0.1
//   img2.style.opacity -= 0.1
//   if (img1.style.opacity < 1.0) timer2 = setTimeout(arguments.callee, 100)
// }
