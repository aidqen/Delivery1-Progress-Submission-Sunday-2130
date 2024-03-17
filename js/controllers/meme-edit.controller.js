'use strict'

var gElCanvas
var gCtx

function onInitEditor() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
  renderMeme()
}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')

  // Changing the canvas dimension clears the canvas
  gElCanvas.width = elContainer.clientWidth
}

function renderMeme() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
  gMeme = loadFromStorage('selectedMemeDB')
  renderImage()
  // renderText()
}

function renderImage() {
  const { selectedImgId } = gMeme
  console.log(gMeme);
  const img = new Image()
  img.src = `meme-img/${selectedImgId}.jpg`
  img.onload = () => {
    const scaleFactor = Math.min(
      gElCanvas.width / img.width,
      gElCanvas.height / img.height
    )
    const scaledWidth = img.width * scaleFactor
    const scaledHeight = img.height * scaleFactor
    gCtx.drawImage(img, 0, 0, scaledWidth, scaledHeight)
    renderText()
  }
}

function renderText() {
  var txtSettings = getLineText()
  var {txt, size, color, font} = txtSettings.lines[0]
  var x = 200
  var y = 200

  gCtx.fillStyle = color
  gCtx.strokeStyle = 'black'
  gCtx.lineWidth = 1
  
  gCtx.font = `bold ${size}px ${font}`
  gCtx.fontSmoothingEnabled = true;
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'middle'
  
  gCtx.fillText(txt, gElCanvas.width / 2, y)
  gCtx.strokeText(txt, gElCanvas.width / 2, y)
}

function onChangeText(elTxtInput) {
  changeText(elTxtInput.value)
}

function onChangeColor(elColorInput) {
  changeColor(elColorInput.value)
}

function onChangeFontsize(type) {
  changeFontsize(type)
}

function onFontChange(font) {
  fontChange(font)
}

function downloadImg(elLink) {
  const imgContent = gElCanvas.toDataURL('image/png') // image/jpeg the default format
  elLink.href = imgContent
}