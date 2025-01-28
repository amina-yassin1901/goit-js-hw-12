import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-function.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more-btn');
const loaderEl = document.querySelector('.loader');

let page = 1;
let searchedQuery = '';
let totalHits = 0;

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    searchedQuery = event.currentTarget.elements.query.value.trim();
    console.log('Search query:', searchedQuery);

    if (searchedQuery === '') {
      iziToast.error({ title: 'Error', message: 'Please enter a search term' });
      return;
    }

    page = 1;
    totalHits = 0;
    galleryEl.innerHTML = ''; 
    loadMoreBtnEl.classList.add('is-hidden');
    loaderEl.classList.remove('is-hidden');

    loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnClick);

    const { hits, totalHits: newTotalHits } = await fetchImages(searchedQuery, page);

    if (hits.length === 0) {
      iziToast.info({ title: 'No results', message: 'No images found. Please try again.' });
      loaderEl.classList.add('is-hidden');
      return;
    }

    totalHits = newTotalHits;
    renderGallery(hits, true);

    if (totalHits > hits.length) {
      loadMoreBtnEl.classList.remove('is-hidden');
      loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
    }

    const lightbox = new SimpleLightbox('.js-gallery a');
    lightbox.refresh();
  } catch (error) {
    iziToast.error({ title: 'Error', message: 'Something went wrong!' });
    console.error(error);
  } finally {
    loaderEl.classList.add('is-hidden');
  }
};

const smoothScroll = () => {
  const cardHeight = galleryEl.firstElementChild.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
};


const onLoadMoreBtnClick = async () => {
  try {
    page++;
    loaderEl.classList.remove('is-hidden');

    const { hits } = await fetchImages(searchedQuery, page);
    console.log('Fetched more hits:', hits);

    if (hits.length > 0) {
      renderGallery(hits, false); 
    }

    const lightbox = new SimpleLightbox('.js-gallery a');
    lightbox.refresh();

    if (page * 15 >= totalHits) {
      loadMoreBtnEl.classList.add('is-hidden');
      iziToast.info({ title: 'End of results', message: "We're sorry, but you've reached the end of search results." });
      loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnClick);
    }

    smoothScroll();
  } catch (error) {
    iziToast.error({ title: 'Error', message: 'Something went wrong!' });
    console.error(error);
  } finally {
    loaderEl.classList.add('is-hidden');
  }
};



searchFormEl.addEventListener('submit', onSearchFormSubmit);
