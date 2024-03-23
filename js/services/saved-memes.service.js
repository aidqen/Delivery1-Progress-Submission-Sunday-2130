'use strict'

var gSavedMemes = [
  {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
      {
        x: 50,
        y: 300,
        txt: 'some random text',
        size: 30,
        color: 'white',
        font: 'Impact',
        fontStyle: ['normal'],
        isDrag: false,
      },
    ],
  },
]

function getSavedMemes() {
  return gSavedMemes
}

function saveMeme() {
  gSavedMemes.push(gMeme)
  saveToStorage('savedMemesDB', gSavedMemes)
}
