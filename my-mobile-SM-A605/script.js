const ui = document.querySelector('main')
const mobile = document.querySelector('.mobile-ui')
const toast = document.querySelector('#toast-main')

function showToast(message, duration = 2300) {
  toast.classList.remove('active')
  toast.textContent = message
  toast.classList.add('active')

  const timeout = setTimeout(() => {
    toast.classList.remove('active')
    clearTimeout(timeout)
  }, duration)
}

ui.addEventListener('dblclick', () => {
  const isFullscreen =
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement

  if (!isFullscreen) {
    if (ui.requestFullscreen) {
      ui.requestFullscreen()
    } else if (ui.mozRequestFullScreen) {
      ui.mozRequestFullScreen()
    } else if (ui.webkitRequestFullscreen) {
      ui.webkitRequestFullscreen()
    } else if (ui.msRequestFullscreen) {
      ui.msRequestFullscreen()
    }

    mobile.classList.add('fullscreen')
    showToast('Double 👆 to exit fullscreen')
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }

    mobile.classList.remove('fullscreen')
    showToast('Double 👆 for fullscreen')
  }
})

// dirty, I know :D
const timeout = setTimeout(() => {
  toast.classList.add('active')
}, 1400)
