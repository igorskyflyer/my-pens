// just a little, dirty code to improve it :)

const timeWrapper = document.getElementById('time-wrapper')
const timeElement = document.getElementById('time-value')
const timePicker = document.getElementById('time-picker')

const timeHours = document.getElementById('time-hours')
const timeMinutes = document.getElementById('time-minutes')

const increasers = document.querySelectorAll('.time-inc')
const decreasers = document.querySelectorAll('.time-dec')
// 🟢🏹 YOU HAVE FAILED THIS CITY !
const arrowsCount = increasers.length

function padNumber(num) {
  if (num.length === 1) {
    return '0' + num
  } else {
    return num
  }
}

function setTime(useCurrent) {
  if (useCurrent) {
    const now = new Date()
    const hours = now.getHours().toString()
    const minutes = now.getMinutes().toString()

    timeHours.setAttribute('data-value', padNumber(hours))
    timeMinutes.setAttribute('data-value', padNumber(minutes))
  }

  time =
    padNumber(timeHours.getAttribute('data-value')) +
    ':' +
    padNumber(timeMinutes.getAttribute('data-value'))

  timeElement.setAttribute('data-value', time)
}

function increase(id, min, max) {
  const element = document.getElementById(id)

  if (!element) {
    return
  }

  let value = parseInt(element.getAttribute('data-value'))

  if (value < max) {
    value++
  } else {
    value = min
  }

  element.setAttribute('data-value', value)
  setTime()
}

function decrease(id, min, max) {
  const element = document.getElementById(id)

  if (!element) {
    return
  }

  let value = parseInt(element.getAttribute('data-value'))

  if (value > min) {
    value--
  } else {
    value = max
  }

  element.setAttribute('data-value', value)
  setTime()
}

for (let i = 0; i < arrowsCount; i++) {
  if (i === 0) {
    increasers[i].addEventListener('mousedown', function () {
      increase('time-hours', 0, 23)
    })

    decreasers[i].addEventListener('mousedown', function () {
      decrease('time-hours', 0, 23)
    })
  } else {
    increasers[1].addEventListener('mouseup', function () {
      increase('time-minutes', 0, 59)
    })

    decreasers[1].addEventListener('mouseup', function () {
      decrease('time-minutes', 0, 59)
    })
  }
}

timeElement.addEventListener('click', function () {
  const open = timePicker.getAttribute('data-open')

  if (open === 'true') {
    timePicker.setAttribute('data-open', 'false')
  } else {
    timePicker.setAttribute('data-open', 'true')
  }
})

timeWrapper.addEventListener('mouseout', function () {
  const hover = document.querySelectorAll(':hover')

  if (!hover || hover.length === 0) {
    return
  }
  if (!timeWrapper.contains(hover[hover.length - 1])) {
    timePicker.setAttribute('data-open', 'false')
  }
})

setTime(true)
