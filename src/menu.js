const gear = document.querySelector('.fa-gear')
const settingsMenu = document.querySelector('.settings-menu')

const menuState = localStorage.getItem('menu-state')
if (menuState != null && menuState === 'open') {
  settingsMenu.classList.add('open')
}

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'Escape':
      settingsMenu.classList.remove('open')
      localStorage.setItem('menu-state', 'closed')
      break
    default:
      break
  }
})

gear.addEventListener('click', () => {
  const toggle = settingsMenu.classList.toggle('open')

  toggle
    ? localStorage.setItem('menu-state', 'open')
    : localStorage.setItem('menu-state', 'closed')

})
