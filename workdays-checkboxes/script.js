// not needed, just for fun 😀

const section = document.querySelector('section')
const message = document.querySelector('#message')
const days = section.querySelectorAll('label')
const count = days.length

function process() {}

for (let i = 0; i < count; i++) {
  days[i].addEventListener('click', () => {
    const selected = section.querySelectorAll('.checkbox:checked')
    const selectedCount = selected.length
    let msg = ''

    if (selectedCount === 0) {
      msg = 'We don&apos;t work. 🙄'
    } else if (selectedCount === count) {
      msg = 'We work everyday. 🎉'
    } else {
      let currentDays = []
      msg = 'We work on '

      for (let j = 0; j < selectedCount; j++) {
        currentDays.push(selected[j].getAttribute('data-day'))
      }

      msg += currentDays.join(', ') + '. 📆'
    }

    message.innerHTML = msg
  })
}
