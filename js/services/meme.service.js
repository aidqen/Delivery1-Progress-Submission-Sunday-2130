'use strict'
var gId = 1
const gMemes = []
var gMeme = {
  selectedImgId: 0,
  selectedLineIdx: 0,
  lines: [
    {
      x: 20,
      y: 200,
      txt: 'some random text',
      size: 24,
      color: 'white',
      font: 'sans-serif',
      fontStyle: ['normal'],
      isDrag: false
    },
  ],
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

function getCurrMeme() {
  return gMeme
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

function setCircleDrag(isDrag) {
  gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}
