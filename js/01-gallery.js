import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryCard = galleryItems.map(
    (item) => `<li class = "gallery__item"><a class = "gallery__link" href = "${item.original}"><img class = "gallery__image" src = "${item.preview}" alt = "${item.description}" data-source = "${item.original}"/></a></li>`
).join("");

gallery.innerHTML = galleryCard;


gallery.addEventListener("click", (event) => {
    event.preventDefault();
    const instance = basicLightbox.create(`
    <img src = "${event.target.dataset.source}" width = "800" height = "600"/>`);
    instance.show();
});
console.log(galleryItems);
