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
