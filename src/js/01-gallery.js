import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const markupGallery = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', markupGallery);

galleryEl.addEventListener('click', preventDefaultLink);

function createGalleryMarkup(galleryArr) {
  return galleryArr
    .map(({ preview, original, description }) => {
      return ` <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join('');
}

function preventDefaultLink(evt) {
    evt.preventDefault();
}

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
  const { defaultOptions } = gallery;
  defaultOptions.captionsData = 'alt';
  defaultOptions.captionDelay = 250;
  defaultOptions.showCounter = false;
  defaultOptions.scrollZoom = false;
});
