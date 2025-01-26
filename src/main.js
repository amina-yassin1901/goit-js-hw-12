import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-function.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';


const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');


const onSearchFormSubmit = async (event) => {
    event.preventDefault();

    const searchQuery = event.currentTarget.elements.query.value.trim();
    if (searchQuery === '') {
    iziToast.error({ title: 'Error', message: 'Please enter a search term' });
    return;
    }

    galleryEl.innerHTML = '';

    try {
    
    const loader = document.querySelector('.loader');
    loader.classList.remove('hidden');

    const images = await fetchImages(searchQuery);
    
    
    if (images.length === 0) {
        iziToast.info({ title: 'No results', message: 'No images found. Please try again.' });
        return;
    }

    
    renderGallery(images);
    } catch (error) {
    iziToast.error({ title: 'Error', message: 'Something went wrong!' });
    } finally {
    
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
    }
    const lightbox = new SimpleLightbox('.js-gallery a');
    lightbox.refresh();
};


searchFormEl.addEventListener('submit', onSearchFormSubmit);