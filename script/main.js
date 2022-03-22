const winterGallery = document.querySelectorAll('.winter-photo')


const visina = 200

for(var i=0; i < winterGallery.length; i++){
    if(winterGallery[i].style.offsetHeight >= visina){
        winterGallery[i].style.offsetHeight = visina - 20;
    }
}
