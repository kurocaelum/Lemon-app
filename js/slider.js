// Declarando variáveis do slider
var sliderContainer = document.querySelector('.jl-slider-container')
var sliderList = document.querySelector('.jl-slider-list')
var sliderItem = document.querySelectorAll('.jl-slider-item')
const sliderTotalItems = sliderItem.length
var sliderListWidth = null
var prevItem = document.querySelector('.jl-item-prev')
var nextItem = document.querySelector('.jl-item-next')
var sliderPos = 0
var currentSlide = document.querySelector('.jl-current-slide')
var totalSlide = document.querySelector('.jl-total-slide')

// Capturando larguras individuais
var containerWidth = sliderContainer.parentElement.offsetWidth

// Passando larguras dinâmicas
sliderContainer.style.width = containerWidth + 'px'

for(var p=0; p < sliderTotalItems; p++) {
    sliderItem[p].style.width = containerWidth + 'px'

    var sliderItemWidth = sliderItem[p].offsetWidth
    sliderListWidth += sliderItemWidth
}

sliderList.style.width = sliderListWidth + 'px'

// HANDLERS
var nextSlideAnim = function() {
    var lastItem = sliderListWidth - containerWidth
    
    if((-1 * sliderPos) === lastItem) {
        return
    }
    
    sliderPos -= containerWidth
    
    anime({
        targets: sliderList,
        translateX: sliderPos
    });
}

var prevSlideAnim = function() {
    if(sliderPos === 0) {
        return
    }
    
    sliderPos += containerWidth
    
    anime({
        targets: sliderList,
        translateX: sliderPos
    });
}

// Counter formatter
var counterFormatter = function(n) {
    if(n < 10) return '0' + n
    else return n
}

// ACTIONS

totalSlide.innerHTML = counterFormatter(sliderTotalItems)


nextItem.addEventListener('click', function(){
    nextSlideAnim()
})

prevItem.addEventListener('click', function(){
    prevSlideAnim()
})