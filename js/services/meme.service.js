'use strict'

const gMemes = []

function getMemes() {
    for (var i = 1 ; i < 18 ; i++) {
        getMeme(i)
    }
    renderImages(gMemes)
}

function getMeme(img) {
    const meme = {
        name: img,
        txt: '',
        id: getRandomId(6),
        keywords: []
    }
    gMemes.push(meme)
}

function addKeywords() {
    gMemes[0].keywords.push('men', 'funny')
    gMemes[1].keywords.push('animal', 'smile')
    gMemes[2].keywords.push('animal', 'funny','smile')
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