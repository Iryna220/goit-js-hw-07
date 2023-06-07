import { galleryItems } from './gallery-items.js';
const galleryContainer = document.querySelector(".gallery");
const markup = galleryItems.map(({ preview, original, description }) => 
`<li class="gallery__item">
  <a class="gallery__link" href= ${original}>
    <img
      class="gallery__image"
      src= ${preview}
      data-source= ${original}
      alt= ${description}
    />
  </a>
</li>`
)
galleryContainer.insertAdjacentHTML('beforeend', markup.join(" "));

galleryContainer.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();


    const { target } = evt;
    if (!target.classList.contains('gallery__image')) {
        return
    }
    const imgEl = target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${imgEl}" width="800" height="600">
`)

    instance.show()
}
