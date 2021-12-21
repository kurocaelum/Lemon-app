var overlay = document.querySelector('.jl-overlay')
var frameImage = document.querySelector('.jl-gallery-frame-image')
var frameContainer = document.querySelector('.jl-gallery-frame-container')
var galleryImages = document.querySelectorAll('.jl-thumb-img')

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