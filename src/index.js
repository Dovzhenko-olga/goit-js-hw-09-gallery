import images from './gallery-items.js';
import createGalleryCardsMarkup from './murkup';
import onArrowKeyPress from './arrow';


const galleryBox = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const backdrop = document.querySelector('.lightbox__overlay');

const cardsMarkup = createGalleryCardsMarkup(images);
galleryBox.insertAdjacentHTML('beforeend', cardsMarkup);


//   galleryBox.addEventListener('click', preventDef, false);
// function preventDef(e) {
//   // if (e.target.nodeName === "A") return;
// }

galleryBox.addEventListener('click', onImageCardClik);

function onImageCardClik(e) {
  if(!e.target.classList.contains('gallery__image')) {
    return;
  }
  e.preventDefault();
  window.addEventListener('keydown', onEscKeyPress);
  window.addEventListener('keydown', onArrowKeyPress)
  lightbox.classList.add('is-open');
  getImageAttr(e.target.dataset.source, e.target.alt);
}

const closeBtn = document.querySelector('[data-action="close-lightbox"]');
 closeBtn.addEventListener('click', closeModal);
 backdrop.addEventListener('click', closeModal);

 function closeModal() {
   window.removeEventListener('keydown', onEscKeyPress)
   window.removeEventListener('keydown', onArrowKeyPress)
   lightbox.classList.remove('is-open');
   getImageAttr('', '');
 }
 function onEscKeyPress (e) {
   if(e.code === 'Escape') {
     closeModal();
   }
 }

 function getImageAttr (src, alt) {
  lightboxImage.src = src;
  lightboxImage.alt = alt;
 }
