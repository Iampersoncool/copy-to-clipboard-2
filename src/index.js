const container = document.querySelector('.container')
const template = document.querySelector('.copy-to-clipboard-template')
const clearAll = document.querySelector('.clear-all')

import './theme.js'
import './menu.js'

for (let i = 0; i < 30; i++) {
  const t = template.content.cloneNode(true)

  const input = t.querySelector('#input')
  const copyBtn = t.querySelector('.copy')
  const resetBtn = t.querySelector('.clear')

  const inputSaved = localStorage.getItem(`inputValue${i}`)
  if (inputSaved != null) {
    input.value = inputSaved
  }

  input.addEventListener('input', () => {
    if (input.value.trim() == '') {
      localStorage.removeItem(`inputValue${i}`)
      return
    }
    localStorage.setItem(`inputValue${i}`, input.value)
  })

  copyBtn.addEventListener('click', () => {
    if (input.value.trim() != '') {
      navigator.clipboard.writeText(input.value)
        .then(console.log('copied to clipboard sucessfully'))
        .catch(err => console.log(err))
    }
  })

  resetBtn.addEventListener('click', () => {
    if (input.value.trim() != '') {
      if (confirm('are you sure?')) {
        localStorage.removeItem(`inputValue${i}`)
        input.value = ''
      }
    } else {
      alert('that is a blank value.')
    } 
  })

  container.append(t)
}

clearAll.onclick = () => {
  if (confirm('are you sure?')) {
    localStorage.clear()
    location.reload()
  }
}
