const cards = document.querySelectorAll('.card')
const container = document.querySelector('.container')
const btnPrevious = document.querySelector('.button-previous')
const btnNext = document.querySelector('.button-next')

const count = cards.length
const min = 0
const max = count - 1
const threshold = 60

let index = 0
let touchX = -1

function setActiveCard(currentIndex) {
  index = currentIndex

  if (index === min) {
    btnPrevious.dataset['disabled'] = 'true'
    btnNext.dataset['disabled'] = 'false'
  } else if (index === max) {
    btnPrevious.dataset['disabled'] = 'false'
    btnNext.dataset['disabled'] = 'true'
  } else {
    btnPrevious.dataset['disabled'] = 'false'
    btnNext.dataset['disabled'] = 'false'
  }

  cards.forEach((card, i) => {
    if (i === currentIndex) {
      card.classList.add('active')
    } else {
      card.classList.remove('active')
    }
  })
}

function goBack() {
  const currentIndex = index - 1

  if (currentIndex < min || currentIndex > max) {
    return
  } else {
    setActiveCard(currentIndex)
  }
}

function goForward() {
  const currentIndex = index + 1

  if (currentIndex < min || currentIndex > max) {
    return
  } else {
    setActiveCard(currentIndex)
  }
}

btnPrevious.addEventListener('click', goBack)
btnNext.addEventListener('click', goForward)

document.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowLeft') {
    goBack()
  } else if (e.key === 'ArrowRight') {
    goForward()
  }
})

container.addEventListener('touchstart', (e) => {
  touchX = e.changedTouches[0].screenX
})

container.addEventListener('touchend', (e) => {
  currentX = e.changedTouches[0].screenX

  if (touchX - currentX < -threshold) {
    goBack()
  } else if (touchX - currentX > threshold) {
    goForward()
  }
})
