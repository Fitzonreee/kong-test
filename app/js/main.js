const menuIcon = document.querySelector('.title-bar > .menuIcon')
const menuBar = menuIcon.querySelector('.bar')
const topBar = document.querySelector('.top-bar')

menuIcon.addEventListener('click', function() {
  topBar.classList.toggle('open')
  menuBar.classList.toggle('animate')
})
