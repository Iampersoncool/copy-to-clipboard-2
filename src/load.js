document.addEventListener('DOMContentLoaded', () => {
  const themesSelect = document.getElementById('themes')
  const body = document.body

  body.classList.replace('preload', 'loaded')

  const theme = localStorage.getItem('theme')
  if (theme != null) {
    console.log('theme: ' + theme)
    body.classList.replace(body.className, theme)
    themesSelect.value = theme
  }
})
