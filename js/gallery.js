var postGallery = document.querySelector('.jl-post-gallery')
var postGalleryHeight = postGallery.clientHeight
postGallery.style.height = (postGalleryHeight - 270) + 'px'

var overlay = document.querySelector('.jl-overlay')
var frameImage = document.querySelector('.jl-gallery-frame-image')
var frameContainer = document.querySelector('.jl-gallery-frame-container')
var galleryImages = document.querySelectorAll('.jl-thumb-img')
var closeGallery = document.querySelectorAll('.jl-toggle-gallery')

const getImageSrc = function() {
    for(var i = 0; i < galleryImages.length; i++) {
        galleryImages[i].addEventListener('click', function() {
            var imageSrc = this.getAttribute('data-src')
            frameImage.setAttribute('src', imageSrc)

            overlay.classList.add('jl-is-open')
            frameContainer.classList.add('jl-is-open')
        })
    }
}

getImageSrc()

for (let c = 0; c < closeGallery.length; c++) {
    closeGallery[c].addEventListener('click', function() {
        overlay.classList.remove('jl-is-open')
        frameContainer.classList.remove('jl-is-open')
    })
}

/* TODO next/prev */
// Identificar item atual no frame (overlay)
// Definir numero do proximo item (next)
// Loop procurando numero do proximo item
// Capturar next.data-src
// Passar data-src para tag de img-frame