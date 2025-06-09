import './css/style.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/api';


const form = document.querySelector('#search-form');
const gallery = document.querySelector('#gallery');
const loader = document.querySelector('#loader');

let lightbox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = e.currentTarget.searchQuery.value.trim();
  if (!query) return;

  loader.classList.remove('hidden');
  gallery.innerHTML = '';

  try {
    const images = await fetchImages(query);

    if (images.length === 0) {
      iziToast.warning({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    const markup = images
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => `
        <div class="photo-card">
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>👍 ${likes}</b></p>
            <p><b>👁️ ${views}</b></p>
            <p><b>💬 ${comments}</b></p>
            <p><b>⬇️ ${downloads}</b></p>
          </div>
        </div>
      `
      )
      .join('');

    gallery.innerHTML = markup;
    lightbox.refresh();
  } catch (err) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
    console.error(err);
  } finally {
    loader.classList.remove('hidden'); // Göster
    loader.classList.add('hidden');
  }
});
