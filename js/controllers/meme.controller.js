'use strict'

function onInit() {
  createMemes()
  renderImages()
  //Service calls renderPictures
}

function toggleMenu() {
  document.querySelector('body').classList.toggle('menu-open')
}

function renderImages() {
  const elContainer = document.querySelector('section.photos')

  var memes = getMemes()
  var strHTML = ''
  memes.map(meme => {
    console.log(meme.id)
    strHTML += `<img src="meme-img/${meme.id}.jpg" class="meme-img" onclick="selectImg(${meme.id})"></img>`
  })
  elContainer.innerHTML = strHTML
}

function selectImg(id) {
  setSelectedImg(id)
  window.location.href = 'meme-maker.html'
}