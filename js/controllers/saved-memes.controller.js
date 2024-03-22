'use strict'

var gElBody

function onInit() {
  gElBody = document.querySelector('body')
  renderStorage('gSavedMemes')
  renderSavedMemes()
}

function toggleMenu() {
  document.querySelector('body').classList.toggle('menu-open')
}

function renderSavedMemes() {
  const elMemesContainer = gElBody.querySelector('.memes-container')
  const savedMemes = getSavedMemes()
  console.log(savedMemes)

  for (var i = 0 ; i < savedMemes.length ; i++) {
      elMemesContainer.innerHTML += `<canvas class="meme-${i}" onclick="goToMemeEditor(${i})" height="334px" width="334px"></canvas>`
      loadCanvasContent(i)
  }
}

function loadCanvasContent(idx) {
  const currMeme = getSavedMemes()[idx]
    //   console.log(getSavedMemes())
  const elCanvas = gElBody.querySelector(`canvas.meme-${idx}`)
  console.log(idx);
  const ctx = elCanvas.getContext('2d')
  renderSavedImage(ctx, elCanvas, currMeme)
}

function renderSavedImage(ctx, elCanvas, meme) {
  const { selectedImgId } = meme
  const img = new Image()
  img.src = `meme-img/${selectedImgId}.jpg`
  img.onload = () => {
    const scaleFactor = Math.min(
      elCanvas.width / img.width,
      elCanvas.height / img.height
    )
    const scaledWidth = img.width * scaleFactor
    const scaledHeight = img.height * scaleFactor
    ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight)
  }
}
function goToMemeEditor(idx) {}
