import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryCard = galleryItems.map(
    (item) => `<li><a class = "gallery__item" href = "${item.original}"><img class = "gallery__image" src = "${item.preview}" alt = "${item.description}"/></a></li>`
).join("");

gallery.innerHTML = galleryCard;

const lightbox = new SimpleLightbox('.gallery, a', {
    captions: true,
    captionType: "attr",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});

