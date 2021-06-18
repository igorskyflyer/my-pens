const MouseThreshold = 50
const TouchThreshold = 60

const Sides = {
  front: 0,
  back: 1,
  top: 2,
  right: 3,
  left: 4,
  bottom: 5,
}

const Directions = {
  left: 0,
  right: 1,
  up: 2,
  down: 3,
}

const isTouchscreen = (function () {
  try {
    document.createEvent('TouchEvent')
    return true
  } catch {
    return false
  }
})()

const scene = document.querySelector('.scene')
const cube = document.querySelector('.cube')

let currentSide = Sides.front
let mouseX = -1
let mouseY = -1
let touchX = -1
let touchY = -1
let triggerEvent = false

function rotateCube(direction) {
  cube.className = 'cube'

  if (direction === Directions.left) {
    switch (currentSide) {
      case Sides.front: {
        cube.classList.add('rotate-left')
        currentSide = Sides.left
        break
      }

      case Sides.left: {
        cube.classList.add('rotate-back')
        currentSide = Sides.back
        break
      }

      case Sides.back: {
        cube.classList.add('rotate-right')
        currentSide = Sides.right
        break
      }

      case Sides.right: {
        cube.classList.add('rotate-front')
        currentSide = Sides.front
        break
      }

      case Sides.top:
      case Sides.bottom: {
        cube.classList.add('rotate-left')
        currentSide = Sides.left
        break
      }
    }
  } else if (direction === Directions.right) {
    switch (currentSide) {
      case Sides.front: {
        cube.classList.add('rotate-right')
        currentSide = Sides.right
        break
      }

      case Sides.right: {
        cube.classList.add('rotate-back')
        currentSide = Sides.back
        break
      }

      case Sides.back: {
        cube.classList.add('rotate-left')
        currentSide = Sides.left
        break
      }

      case Sides.left: {
        cube.classList.add('rotate-front')
        currentSide = Sides.front
        break
      }

      case Sides.top:
      case Sides.bottom: {
        cube.classList.add('rotate-right')
        currentSide = Sides.right
        break
      }
    }
  } else if (direction === Directions.up) {
    if (currentSide !== Sides.top) {
      cube.classList.add('rotate-top')
      currentSide = Sides.top
    } else {
      cube.classList.add('rotate-bottom')
      currentSide = Sides.bottom
    }
  } else if (direction === Directions.down) {
    if (currentSide !== Sides.bottom) {
      cube.classList.add('rotate-bottom')
      currentSide = Sides.bottom
    } else {
      cube.classList.add('rotate-top')
      currentSide = Sides.top
    }
  }
}

if (!isTouchscreen) {
  cube.addEventListener('mousedown', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
    triggerEvent = true
  })

  document.addEventListener('mouseup', (e) => {
    if (!triggerEvent) {
      return
    }

    const deltaX = mouseX - e.clientX
    const deltaY = mouseY - e.clientY

    if (Math.abs(deltaX) > MouseThreshold && deltaY < MouseThreshold) {
      if (deltaX > 0) {
        rotateCube(Directions.left)
      } else {
        rotateCube(Directions.right)
      }
    } else if (Math.abs(deltaY) > MouseThreshold && deltaX < MouseThreshold) {
      if (deltaY > 0) {
        rotateCube(Directions.down)
      } else {
        rotateCube(Directions.up)
      }
    }

    triggerEvent = false
  })

  window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft' || e.code === 'KeyA') {
      rotateCube(Directions.left)
    } else if (e.key === 'ArrowRight' || e.code === 'KeyD') {
      rotateCube(Directions.right)
    } else if (e.key === 'ArrowDown' || e.code === 'KeyS') {
      rotateCube(Directions.down)
    } else if (e.key === 'ArrowUp' || e.code === 'KeyW') {
      rotateCube(Directions.up)
    }
  })
} else {
  scene.addEventListener('touchstart', (e) => {
    touchX = e.changedTouches[0].screenX
    touchY = e.changedTouches[0].screenY
  })

  scene.addEventListener('touchend', (e) => {
    const deltaX = touchX - e.changedTouches[0].screenX
    const deltaY = touchY - e.changedTouches[0].screenY

    if (deltaX < -TouchThreshold) {
      rotateCube(Directions.left)
    } else if (deltaX > TouchThreshold) {
      rotateCube(Directions.right)
    } else if (deltaY < -TouchThreshold) {
      rotateCube(Directions.up)
    } else if (deltaY > TouchThreshold) {
      rotateCube(Directions.down)
    }
  })
}
