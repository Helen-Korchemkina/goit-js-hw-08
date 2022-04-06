// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryItemsEls = document.querySelector(".gallery");

const makeGalleryItems = createGalleryItems(galleryItems);
galleryItemsEls.insertAdjacentHTML("beforeend", makeGalleryItems);

function createGalleryItems(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
        `;
    })
    .join("");
}

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

