'use strict'
var gId = 1
const gMemes = []
var gMeme = {
  selectedImgId: 0,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'some random text',
      size: 20,
      color: 'white',
      font: 'sans-serif',
      fontStyle: ['normal'],
    },
  ],
}

function addTextLine() {
  gMeme.lines.push(newTextLine())
  saveToStorage('selectedMemeDB', gMeme)
  renderMeme()
}

function newTextLine(txt = 'Some random text') {
  return {
    txt,
    size: 20,
    color: 'white',
    font: 'Impact',
    fontStyle: ['normal'],
  }
}

function removeTextLine() {
  var idx = gMeme.selectedLineIdx
  gMeme.lines.splice(idx, 1)
  if (idx !== 0) {
    idx--
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
}

function createMemes() {
  for (var i = 1; i < 18; i++) {
    gMemes.push(getMeme(i))
  }
  saveToStorage('memesDB', gMemes)
}

function getMemes() {
  var memes = gMemes
  console.log(memes)
  return memes
}

function getMeme(id) {
  const meme = {
    txt: '',
    id,
    keywords: [],
  }
  return meme
}

function addKeywords() {
  gMemes[0].keywords.push('men', 'funny')
  gMemes[1].keywords.push('animal', 'smile')
  gMemes[2].keywords.push('animal', 'funny', 'smile')
  gMemes[3].keywords.push('animal')
  gMemes[4].keywords.push('men', 'funny')
  gMemes[5].keywords.push('men', 'funny')
  gMemes[6].keywords.push('men', 'funny')
  gMemes[7].keywords.push('men', 'funny')
  gMemes[8].keywords.push('men', 'funny')
  gMemes[9].keywords.push('men', 'funny')
  gMemes[10].keywords.push('men', 'funny')
  gMemes[11].keywords.push('men', 'funny')
  gMemes[12].keywords.push('men', 'funny')
  gMemes[13].keywords.push('men', 'funny')
  gMemes[14].keywords.push('men', 'funny')
  gMemes[15].keywords.push('men', 'funny')
  gMemes[16].keywords.push('men', 'funny')
  gMemes[17].keywords.push('men', 'funny')
}

function setSelectedImg(id) {
  gMeme.selectedImgId = id
  saveToStorage('selectedMemeDB', gMeme)
}
