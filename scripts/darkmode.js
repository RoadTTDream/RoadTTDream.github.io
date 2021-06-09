function darkmode() {
    const body = document.body
    const wasDarkMode = localStorage.getItem('darkmode') === 'true'

    localStorage.setItem('darkmode', !wasDarkMode)
    body.classList.toggle('dark-mode', !wasDarkMode)
}

document.querySelector('.header__nav__ul__theme').addEventListener('click', darkmode)

function onload() {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true')
}

document.addEventListener('DOMContentLoaded', onload)

function switchIcon() {
    const switcher = document.querySelector('.header__nav__ul__theme')
    switcher.style.backgroundImage = `url('../img/theme-light.png')`
}

switchIcon()