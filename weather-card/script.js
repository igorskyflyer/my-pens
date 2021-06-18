/* Just for (geek) fun ^^ */

function updateTime() {
  document.querySelector('.info-date h1').innerText =
    new Date().toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    })
}

const minTemperature = 20
const maxTemperature = 35 // 🏖
const factor = maxTemperature - minTemperature

const spanDate = document.querySelector('.info-date span')
const currentTemperature = Math.floor(Math.random() * factor) + minTemperature
const spanTemperature = document.querySelector('.weather-temperature')

spanDate.innerText = new Date().toLocaleDateString('en-GB')
spanTemperature.innerHTML = `${currentTemperature}&deg;`
updateTime()

const now = new Date()
const difference = 60 - now.getSeconds()
const milliseconds = difference * 1000

let timeout = setTimeout(() => {
  updateTime()
  setInterval(updateTime, 60000)
  clearTimeout(timeout)
}, milliseconds)
