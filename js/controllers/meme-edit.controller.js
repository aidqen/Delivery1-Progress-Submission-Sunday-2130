'use strict'

var gElCanvas
var gCtx
var gIsActive = false
var gStartPos
const TOUCH_EVENTS = ['touchstart', 'touchmove', 'touchend']
var offsetX, offsetY

function onInitEditor() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
  renderMeme()
  // renderStorage('gSavedMemes')
  gElCanvas.addEventListener('mousedown', onDown)
  gElCanvas.addEventListener('touchstart', onDown)
}

function addListeners() {
  gElCanvas.addEventListener('mousemove', onMove)
  gElCanvas.addEventListener('mouseup', onUp)
  gElCanvas.addEventListener('touchmove', onMove)
  gElCanvas.addEventListener('touchend', onUp)
}

function removeListeners() {
  gElCanvas.removeEventListener('mousemove', onMove)
  gElCanvas.removeEventListener('touchmove', onMove)
}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')

  gElCanvas.width = elContainer.clientWidth
}

function renderMeme() {
  renderStorage('gMeme')
  renderImage()
  renderInput()
}

function renderInput() {
  const meme = getCurrMeme()
  document.querySelector('input.text-input').value =
    meme.lines[meme.selectedLineIdx].txt
}

function clearCanvas() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function renderImage() {
  clearCanvas()

  const meme = getCurrMeme()
  const { selectedImgId } = meme
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
  meme.lines.map((line, idx) => {
    const { x, y, txt, size, color, font, fontStyle } = line
    gCtx.fillStyle = color
    gCtx.strokeStyle = 'black'
    gCtx.lineWidth = 1

    gCtx.font = `${fontStyle.join(' ')} ${size}px ${font}`
    gCtx.fontSmoothingEnabled = true
    gCtx.textAlign = 'start'

    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)

    if (idx === meme.selectedLineIdx) {
      const textWidth = gCtx.measureText(txt).width
      const padding = 2
      gCtx.strokeStyle = 'black'
      gCtx.lineWidth = 2
      gCtx.strokeRect(
        x - padding,
        y - size + padding,
        textWidth + 2 * padding,
        size + 2 * padding
      )
    }
  })
}

function onDown(ev) {
  addListeners()
  const currLine = getCurrMeme().lines[gMeme.selectedLineIdx]
  const mouseX = ev.clientX - gElCanvas.getBoundingClientRect().left
  const mouseY = ev.clientY - gElCanvas.getBoundingClientRect().top

  if (isWithinLineRange(mouseX, mouseY, gCtx)) {
    offsetX = mouseX - currLine.x
    offsetY = mouseY - currLine.y
  }
  document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
  const meme = getCurrMeme()
  const idx = meme.selectedLineIdx
  if (gMeme.lines[gMeme.selectedLineIdx].isDrag) {
    const mouseX = ev.clientX - gElCanvas.getBoundingClientRect().left
    const mouseY = ev.clientY - gElCanvas.getBoundingClientRect().top

    meme.lines[idx].x = mouseX - offsetX
    meme.lines[idx].y = mouseY - offsetY
    clearCanvas()
    renderImage()
    renderText()
  }
}

function onUp() {
  const meme = getCurrMeme()
  const idx = meme.selectedLineIdx
  meme.lines[idx].isDrag = false
  saveToStorage('selectedMemeDB', gMeme)
  removeListeners()
  document.body.style.cursor = 'auto'
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

function onDownloadImg(elLink) {
  const imgContent = gElCanvas.toDataURL('image/png') // image/jpeg the default format
  elLink.href = imgContent
}

function onSaveMeme() {
  saveMeme()
}

function renderRandomMeme() {
  randomMemePick()
}

function onUploadImg() {
  // Gets the image from the canvas
  const imgDataUrl = gElCanvas.toDataURL('image/jpeg') 

  function onSuccess(uploadedImgUrl) {
      // Handle some special characters
      const url = encodeURIComponent(uploadedImgUrl)
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${url}`)
  }
  
  // Send the image to the server
  doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
  const formData = new FormData()
  formData.append('img', imgDataUrl)

  const XHR = new XMLHttpRequest()
  XHR.onreadystatechange = () => {
      if (XHR.readyState !== XMLHttpRequest.DONE) return
      if (XHR.status !== 200) return console.error('Error uploading image')
      const { responseText: url } = XHR

      onSuccess(url)
  }
  XHR.onerror = (req, ev) => {
      console.error('Error connecting to server with request:', req, '\nGot response data:', ev)
  }
  XHR.open('POST', '//ca-upload.com/here/upload.php')
  XHR.send(formData)
}

function onSetTextPosition(pos) {
  alignText(pos)
}

function onAlignText(align) {
  const meme = getCurrMeme()
  const idx = meme.selectedLineIdx
  const textWidth = measureTextWidth(gCtx)
  if (align === 'left') meme.lines[idx].x = 5
  if (align === 'right') meme.lines[idx].x = (gElCanvas.width - textWidth) - 5
  if (align === 'center') meme.lines[idx].x = (gElCanvas.width - textWidth) / 2

  saveToStorage('selectedMemeDB', gMeme)
  renderMeme()
}