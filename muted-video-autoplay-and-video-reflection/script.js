// needed mostly for mobile browsers

window.addEventListener('load', async () => {
  const video = document.querySelector('#video-db')
  try {
    await video.play()
  } catch (err) {
    console.log(err)
  }
})
