'use strict'

function onInit() {
    getMemes()
    //Service calls renderPictures
}

function toggleMenu() {
    document.querySelector('body').classList.toggle('menu-open')
  }

function renderImages(gMemes) {
    const elContainer = document.querySelector('section.photos') 
    var strHTML = ''
    gMemes.map(meme => {
        strHTML += `<img src="meme-img/${meme.name}.jpg" class="meme-img" onclick="goToMemeEditor(${meme.name})"></img>`
    })
    elContainer.innerHTML = strHTML
}

function goToMemeEditor(memeImg) {
    console.log('hi')
    window.location.href = 'meme-maker.html';
    renderImage(memeImg)
}

