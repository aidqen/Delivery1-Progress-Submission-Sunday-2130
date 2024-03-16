'use strict'

function onInit() {
    renderPictures()
}

function renderPictures() {
    const elContainer = document.querySelector('section.photos') 
    var strHTML = ''
    for (var i = 0 ; i < 18 ; i++) {
        strHTML += `<img src="meme-img/${i}.jpg" class="meme-img" onclick="makeMeme()"></img>`
    }
    elContainer.innerHTML = strHTML
}