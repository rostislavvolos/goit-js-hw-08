// Add imports above this line
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
 //import "simplelightbox/dist/simple-lightbox.esm";
import { galleryItems } from './gallery-items';
// Change code below this line
// Change code below this line
const divGallery = document.querySelector(".gallery");


const imgItem = galleryItems.map(item => {
    return `<div class="gallery__item">
    <a class="gallery__link" href=${item.original}>
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
    </div>`
}).join("");
// Change code below this line


divGallery.insertAdjacentHTML("afterbegin", imgItem);


const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});



console.log(galleryItems);


