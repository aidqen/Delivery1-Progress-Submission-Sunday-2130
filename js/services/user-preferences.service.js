'use strict'

function setSelectedImg(id) {
    gMeme.selectedImgId = id
    saveToStorage('selectedMemeDB', gMeme)
  }
  
  function getLineText() {
      return gMeme
  }
  
  function changeText(txtInput) {
      gMeme.lines[0].txt = txtInput
      saveToStorage('selectedMemeDB',gMeme)
      renderMeme()
  }
  
  function changeColor(colorInput) {
      gMeme.lines[0].color = colorInput
      saveToStorage('selectedMemeDB', gMeme)
      renderMeme()
  }