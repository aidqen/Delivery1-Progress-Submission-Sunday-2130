'use strict'
var gId = 1
const gMemes = []
var gMeme = {
  selectedImgId: 0,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'some random text',
      size: '20',
      color: 'white',
    },
  ],
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

function renderImageToEditor() {
  gMeme = loadFromStorage('selectedMemeDB')
  const { selectedImgId, selectedLineIdx } = gMeme

  const img = new Image()
  img.src = `meme-img/${selectedImgId}.jpg`
  img.onload = () => {
    const scaleFactor = Math.min(
      gElCanvas.width / img.width,
      gElCanvas.height / img.height
    )
    const scaledWidth = img.width * scaleFactor
    const scaledHeight = img.height * scaleFactor
    gCtx.drawImage(img, 0, 0, scaledWidth, scaledHeight)
    renderMeme()
  }
}

function getLineText() {
    return gMeme
}

function setLineText(txtInput) {
    gMeme.lines[0].txt = txtInput
    saveToStorage('selectedMemeDB',gMeme)
    renderMeme()
}
