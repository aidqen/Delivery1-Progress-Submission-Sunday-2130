'use strict'

var gElCanvas
var gCtx

function onInitEditor() {
  renderImageToEditor()
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')

  // Changing the canvas dimension clears the canvas
  gElCanvas.width = elContainer.clientWidth
}

function renderMeme() {
  var txtSettings = getLineText()
  var {txt, size, color} = txtSettings.lines[0]
  var x = '45'
  var y = '45'

  // gCtx.lineWidth = 2
  gCtx.strokeStyle = color

  gCtx.fillStyle = 'lightsteelblue'

  gCtx.font = `${size}px Arial'`
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'middle'

  gCtx.fillText(txt, x, y)
  gCtx.strokeText(txt, x, y)
}

function changeText(elTxtInput) {
  setLineText(elTxtInput.value)
}