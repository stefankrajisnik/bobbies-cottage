const winterGallery = document.querySelectorAll('.winter-photo');

winterGallery.forEach((photo, index) => {
    const offsetPixel = 10 * index;
    photo.style.bottom = `${offsetPixel}px`;
    photo.style.left = `${offsetPixel}px`;

    const sizePixel = 200 - offsetPixel;
    photo.style.height = `${sizePixel}px`;
    photo.style.width = `${sizePixel}px`;
});

const nav = document.querySelector('.navigation')
const topNavigation = document.querySelector('.top-navigation');

window.addEventListener('scroll', fixNavigation)

function fixNavigation() {
    window.scrollY > 32 ? nav.classList.add('active') : nav.classList.remove('active');
}
