'use strict'

var gElCanvas
var gCtx
var gIsActive = false

function onInitEditor() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
  renderMeme()
}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')

  gElCanvas.width = elContainer.clientWidth
}

function renderMeme() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
  gMeme = loadFromStorage('selectedMemeDB')
  console.log(gMeme)
  renderImage()
}

function renderImage() {
  const { selectedImgId } = gMeme
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
  const meme = getLineText()
  console.log(meme)
  meme.lines.map(line => {
    const { txt, size, color, font, fontStyle } = line
    var x = 200
    var y = 200

    gCtx.fillStyle = color
    gCtx.strokeStyle = 'black'
    gCtx.lineWidth = 1

    gCtx.font = `${fontStyle.join(' ')} ${size}px ${font}`
    gCtx.fontSmoothingEnabled = true
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'centers'

    gCtx.fillText(txt, gElCanvas.width / 2, y)
    gCtx.strokeText(txt, gElCanvas.width / 2, y)
  })
}

function onAddTextLine() {
  addTextLine()
}

function onRemoveTextLine() {
  removeTextLine()
}

function onPickAnotherLine() {
  pickAnotherLine()
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

function onFontStyleChange(elBtn) {
  gIsActive = !gIsActive
  elBtn.classList.toggle('active')
  if (elBtn.classList.contains('active')) {
    fontStyleAdd(elBtn.value)
  } else {
    fontStyleRemove(elBtn.value)
  }
}

function downloadImg(elLink) {
  const imgContent = gElCanvas.toDataURL('image/png') // image/jpeg the default format
  elLink.href = imgContent
}
