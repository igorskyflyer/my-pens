const btnDialog = document.querySelector('#btn-dialog')
const dialog = document.querySelector('dialog')
const btnClose = document.querySelector('#btn-close')

btnDialog.addEventListener('click', () => {
  // current Web standard
  if ('showModal' in dialog) {
    dialog.showModal()
  } else {
    // fallback / polyfill
    dialog.setAttribute('open', 'true')
  }

  dialog.classList.add('show')
})

btnClose.addEventListener('click', () => {
  dialog.classList.add('close')

  // wait for the animation to finish
  setTimeout(() => {
    // current Web standard
    if ('close' in dialog) {
      dialog.close()
    } else {
      // fallback / polyfill
      dialog.removeAttribute('open')
    }

    dialog.classList.remove('close')
    dialog.classList.remove('show')
  }, 220)
})
