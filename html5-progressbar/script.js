const intervals = [120, 50]
const step = 2
const bars = document.querySelectorAll('progress')

bars.forEach((progress, index) => {
  const timer = setInterval(() => {
    if (progress.value !== null && parseInt(progress.value) < 100) {
      progress.value = parseInt(progress.value) + step
    } else {
      clearInterval(timer)
      console.log(`✔ cleared timer #${index + 1}`)
    }
  }, intervals[index])
})
