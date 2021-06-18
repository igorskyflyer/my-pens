const seekbar = document.querySelector('.ui-slider')
const seekbarMax = seekbar.max

setInterval(() => {
  let position = parseInt(seekbar.value)

  if (position < seekbarMax) {
    seekbar.value = parseInt(position) + 1
  } else {
    seekbar.value = 0
  }
}, 1000)
