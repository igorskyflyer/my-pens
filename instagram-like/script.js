const max = 35 + Math.floor(Math.random() * 64)
const spanHeart = document.querySelector('#instagram-heart')
const spanCount = document.querySelector('#instagram-like-count')

let count = 0
let timer = setInterval(() => {
  if (count > max) {
    clearInterval(timer)
    count = 0
  } else {
    spanHeart.classList.add('animate-beat')
    spanCount.textContent = ++count

    spanCount.classList.add('animate-count')

    setTimeout(() => {
      spanCount.classList.remove('animate-count')
      spanHeart.classList.remove('animate-beat')
    }, 500)
  }
}, 600)
