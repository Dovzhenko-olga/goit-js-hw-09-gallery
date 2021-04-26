import images from './gallery-items.js';

const lightboxImage = document.querySelector('.lightbox__image');

function getImageAttr (src, alt) {
  lightboxImage.src = src;
  lightboxImage.alt = alt;
 }
 
export default function onArrowKeyPress(e) {
  //  const imagesSrc = [];
  //  images.forEach(img => {
  //      imagesSrc.push(img.original);
  //     });
 let newIndex = images.findIndex(image => image.original === lightboxImage.src);
 if(newIndex < 0) {
   return;
 }
 if(e.code === 'ArrowLeft') {
    newIndex -= 1;
    if(newIndex === -1) {
      newIndex = images.length - 1;
    }
 } else if(e.code === 'ArrowRight') {
   newIndex += 1;
   if(newIndex === images.length) {
     newIndex = 0;
   }
 }
 getImageAttr (images[newIndex].original, images[newIndex].description);
}