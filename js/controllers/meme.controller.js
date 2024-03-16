'use strict'

function onInit() {
    getMemes()
    //Service calls renderPictures
}

function renderPictures(gMemes) {
    const elContainer = document.querySelector('section.photos') 
    var strHTML = ''
    gMemes.map(meme => {
        strHTML += `<img src="meme-img/${meme.name}.jpg" class="meme-img" onclick="makeMeme()"></img>`
    })
    elContainer.innerHTML = strHTML
}