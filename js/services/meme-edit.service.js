'use strict'

function getLineText() {
  return gMeme
}

function changeText(txtInput) {
  gMeme.lines[gMeme.selectedLineIdx].txt = txtInput
  saveToStorage('selectedMemeDB', gMeme)
  renderMeme()
}

function changeColor(colorInput) {
  gMeme.lines[gMeme.selectedLineIdx].color = colorInput
  saveToStorage('selectedMemeDB', gMeme)
  renderMeme()
}

function changeFontsize(type) {
  if (type === 'increase') {
    gMeme.lines[gMeme.selectedLineIdx].size += 2
  } else if (type === 'decrease') {
    gMeme.lines[gMeme.selectedLineIdx].size -= 2
  }
  saveToStorage('selectedMemeDB', gMeme)
  renderMeme()
}

function fontChange(font) {
  gMeme.lines[gMeme.selectedLineIdx].font = font
  saveToStorage('selectedMemeDB', gMeme)
  renderMeme()
}

function fontStyleAdd(style) {
  var idx = gMeme.selectedLineIdx
  var currLineStyle = gMeme.lines[idx].fontStyle
  if (currLineStyle.includes(style)) {
    return
  } else {
    if (currLineStyle.includes('normal')) {
      const styleIdx = currLineStyle.indexOf('normal')
      currLineStyle.splice(styleIdx, 1)
    }
    currLineStyle.push(style)
  }
  saveToStorage('selectedMemeDB', gMeme)
  renderMeme()
}

function fontStyleRemove(style) {
  var idx = gMeme.selectedLineIdx
  var currLineStyle = gMeme.lines[idx].fontStyle
  const i = currLineStyle.indexOf(style)
  currLineStyle.splice(i, 1)
  if (currLineStyle.length === 0) {
    currLineStyle.push('normal')
  }
  saveToStorage('selectedMemeDB', gMeme)
  renderMeme()
}

function addTextLine() {
  if (gMeme.lines.length !== 0) {
    gMeme.selectedLineIdx++
  }
  gMeme.lines.push(newTextLine())
  saveToStorage('selectedMemeDB', gMeme)
  renderMeme()
}

function newTextLine(txt = 'Some random text') {
  return {
    x: 20,
    y: 200,
    txt,
    size: 24,
    color: 'white',
    font: 'Impact',
    fontStyle: ['normal'],
    isDrag: false,
  }
}

function removeTextLine() {
  var idx = gMeme.selectedLineIdx
  gMeme.lines.splice(idx, 1)
  if (idx !== 0) {
    gMeme.selectedLineIdx--
  }
  saveToStorage('selectedMemeDB', gMeme)
  renderMeme()
}

function pickAnotherLine() {
  gMeme.selectedLineIdx++
  if (gMeme.lines.length <= gMeme.selectedLineIdx) {
    gMeme.selectedLineIdx = 0
  }
  console.log(gMeme)
  saveToStorage('selectedMemeDB', gMeme)
  renderMeme()
}

function isWithinLineRange(mouseX, mouseY, ctx) { 
  const idx = gMeme.selectedLineIdx
  if (
    mouseX >= gMeme.lines[idx].x &&
    mouseX <= gMeme.lines[idx].x + ctx.measureText(gMeme.lines[idx].txt).width &&
    mouseY >= gMeme.lines[idx].y - gMeme.lines[idx].size &&
    mouseY <= gMeme.lines[idx].y
  ) {
    gMeme.lines[idx].isDrag = true
    console.log(gMeme.lines[idx].isDrag);
    return true
  }
}
