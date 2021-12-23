var postGallery = document.querySelector('.jl-post-gallery')
var postGalleryHeight = postGallery.clientHeight
postGallery.style.height = (postGalleryHeight - 270) + 'px'

var overlay = document.querySelector('.jl-overlay')
var frameImage = document.querySelector('.jl-gallery-frame-image')
var frameContainer = document.querySelector('.jl-gallery-frame-container')
var galleryImages = document.querySelectorAll('.jl-thumb-img')
var closeGallery = document.querySelectorAll('.jl-toggle-gallery')

var btnNext = document.querySelector('.jl-item-next')
var btnPrev = document.querySelector('.jl-item-prev')

var currCounter = document.querySelector('.jl-current-slide')
var totalCounter = document.querySelector('.jl-total-slide')


var counterFormatter = function (n) {
    if (n < 10) return '0' + n
    else return n
}

totalCounter.innerHTML = counterFormatter(galleryImages.length)

const getImageSrc = function() {
    for(var i = 0; i < galleryImages.length; i++) {
        galleryImages[i].addEventListener('click', function() {
            var imageSrc = this.getAttribute('data-src')
            var itemNum = this.getAttribute('data-item')
            frameImage.setAttribute('src', imageSrc)
            frameImage.setAttribute('data-index', itemNum)

            overlay.classList.add('jl-is-open')
            frameContainer.classList.add('jl-is-open')

            currCounter.innerHTML = counterFormatter(itemNum)
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

const nextItem = function() {
    // Identificar item atual no frame (overlay)
    var currItemNum = frameImage.getAttribute('data-index')

    // Definir numero do proximo item (next)
    var nextItemNum = parseInt(currItemNum) + 1

    // Loop procurando numero do proximo item
    for(let n = 0; n < galleryImages.length; n++) {
        var item = galleryImages[n]
        var itemNum = parseInt(item.getAttribute('data-item'))

        if(itemNum === nextItemNum) {
            // Capturar next.data-src
            var nextSrc = item.getAttribute('data-src')
            var nextIndex = item.getAttribute('data-item')

            // Passar data-src para tag de img-frame
            frameImage.setAttribute('src', nextSrc)
            frameImage.setAttribute('data-index', nextIndex)
            currCounter.innerHTML = counterFormatter(nextIndex)
        }
    }
}

const prevItem = function() {
    var currItemNum = frameImage.getAttribute('data-index')
    var prevItemNum = parseInt(currItemNum) - 1

    for(let n = 0; n < galleryImages.length; n++) {
        var item = galleryImages[n]
        var itemNum = parseInt(item.getAttribute('data-item'))

        if(itemNum === prevItemNum) {
            var prevSrc = item.getAttribute('data-src')
            var prevIndex = item.getAttribute('data-item')

            frameImage.setAttribute('src', prevSrc)
            frameImage.setAttribute('data-index', prevIndex)
            currCounter.innerHTML = counterFormatter(prevIndex)
        }
    }
}

btnNext.addEventListener('click', function() {
    nextItem()
})

btnPrev.addEventListener('click', function() {
    prevItem()
})