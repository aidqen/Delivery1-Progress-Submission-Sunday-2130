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
