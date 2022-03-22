const winterGallery = document.querySelectorAll('.winter-photo');

winterGallery.forEach((photo, index) => {
    const offsetPixel = 10 * index;
    photo.style.bottom = `${offsetPixel}px`;
    photo.style.left = `${offsetPixel}px`;

    const sizePixel = 200 - offsetPixel;
    photo.style.height = `${sizePixel}px`;
    photo.style.width = `${sizePixel}px`;
});
