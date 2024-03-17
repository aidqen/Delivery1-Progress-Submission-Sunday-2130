'use strict'

function onInit() {
    createMemes()
  renderImages()
  //Service calls renderPictures
}

function toggleMenu() {
  document.querySelector('body').classList.toggle('menu-open')
}

function renderImages(gMemes) {
  const elContainer = document.querySelector('section.photos')

  var memes = getMemes()
  var strHTML = ''
  memes.map(meme => {
    strHTML += `<img src="meme-img/${meme.id}.jpg" class="meme-img" onclick="selectImg()"></img>`
  })
  elContainer.innerHTML = strHTML
}

function selectImg(id) {
  setSelectedImg(id)
  window.location.href = 'meme-maker.html'  
}
