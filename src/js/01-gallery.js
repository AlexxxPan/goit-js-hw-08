// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(".gallery");

const result = createGallary(galleryItems);

gallery.insertAdjacentHTML("beforeend", result);


function createGallary(galleryItems) {
  return galleryItems.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<a class="gallery__item" href=${original}>
          <img
            class="gallery__image"
            src=${preview}
            data-source=${original}
            alt=${description}
          />
        </a>`,
    ""
  );
  }

new SimpleLightbox('.gallery a', {captionDelay:250, captionsData:"alt"})