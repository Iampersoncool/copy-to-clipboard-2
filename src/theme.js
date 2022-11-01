const themesSelect = document.getElementById('themes')
const body = document.body

const themes = ['light', 'dark', 'red']

themes.forEach((theme) => {
  const option = new Option(theme, theme)
  themesSelect.appendChild(option)
})

themesSelect.addEventListener('input', (e) => {
  const value = e.target.value
  replaceClassName(value)
  localStorage.setItem('theme', value)
})

function replaceClassName(v) {
  body.classList.replace(body.className, v)
}
