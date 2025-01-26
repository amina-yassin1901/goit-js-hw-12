

export const createGalleryCardTemplate = (imgInfo) => {
    return `
    <li class="gallery-item">
        <a href="${imgInfo.largeImageURL}">
        <img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" />
        </a>
        <div class="info">
        <p class="info-item"><b>Likes:</b> ${imgInfo.likes}</p>
        <p class="info-item"><b>Views:</b> ${imgInfo.views}</p>
        <p class="info-item"><b>Comments:</b> ${imgInfo.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${imgInfo.downloads}</p>
        </div>
    </li>
    `;
};

export const renderGallery = (images) => {
    const galleryEl = document.querySelector('.js-gallery');
    const galleryTemplate = images.map((imgInfo) => createGalleryCardTemplate(imgInfo)).join('');
    galleryEl.innerHTML = galleryTemplate;
}

