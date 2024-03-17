'use strict'



function getLineText() {
  return gMeme
}

function changeText(txtInput) {
  gMeme.lines[0].txt = txtInput
  saveToStorage('selectedMemeDB', gMeme)
  renderMeme()
}

function changeColor(colorInput) {
  gMeme.lines[0].color = colorInput
  saveToStorage('selectedMemeDB', gMeme)
  renderMeme()
}

function changeFontsize(type) {
    if (type === 'increase') {
        gMeme.lines[0].size += 2
    } else if (type === 'decrease') {
        gMeme.lines[0].size -= 2
    }
    console.log(gMeme.lines[0].size);
    saveToStorage('selectedMemeDB', gMeme)
    renderMeme()
}

function fontChange(font) {
    gMeme.lines[0].font = font
    saveToStorage('selectedMemeDB', gMeme)
    renderMeme()
}