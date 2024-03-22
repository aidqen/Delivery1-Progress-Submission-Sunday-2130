'use strict'
var gId = 1
const gMemes = []
var gMeme = {
  selectedImgId: 3,
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
      isDrag: false
    },
  ],
}




function createMemes() {
  for (var i = 1; i <= 18; i++) {
    gMemes.push(createMeme(i))
  }
  addKeywords()
  saveToStorage('picturesDB', gMemes)
  console.log(loadFromStorage('picturesDB'));
}

function getMemes() {
  return gMemes
}

function createMeme(id) {
  return {
    txt: '',
    id,
    keywords: [],
  }
}


function addKeywords() {
  gMemes[0].keywords.push('men', 'funny')
  gMemes[1].keywords.push('animal', 'cute')
  gMemes[2].keywords.push('animal', 'cute')
  gMemes[3].keywords.push('animal')
  gMemes[4].keywords.push('men', 'funny', 'cute')
  gMemes[5].keywords.push('men', 'funny', 'smile')
  gMemes[6].keywords.push('men', 'cute')
  gMemes[7].keywords.push('men', 'smile')
  gMemes[8].keywords.push('men', 'funny', 'cute')
  gMemes[9].keywords.push('men', 'funny', 'smile')
  gMemes[10].keywords.push('men', 'funny')
  gMemes[11].keywords.push('men')
  gMemes[12].keywords.push('men', 'smile')
  gMemes[13].keywords.push('men')
  gMemes[14].keywords.push('men')
  gMemes[15].keywords.push('men', 'funny')
  gMemes[16].keywords.push('men', 'funny')
  gMemes[17].keywords.push('men', 'cute', 'smile', 'funny')
}

function setSelectedImg(id) {
  gMeme.selectedImgId = id
  saveToStorage('selectedMemeDB', gMeme)
}

function pickRandomPicture() {
  gMeme.selectedImgId = getRandomInt(0, gMemes.length)
  saveToStorage('selectedMemeDB', gMeme)
}


