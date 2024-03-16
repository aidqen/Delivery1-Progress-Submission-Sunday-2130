'use strict'

const gMemes = []

function getMemes() {
    for (var i = 1 ; i < 18 ; i++) {
        getMeme(i)
    }
    renderPictures(gMemes)
}

function getMeme(img) {
    const meme = {
        name: img,
        txt: '',
        id: getRandomId(6)
    }
    gMemes.push(meme)
}