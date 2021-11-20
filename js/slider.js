// Declarando variáveis do slider
var sliderContainer = document.querySelector('.jl-slider-container')
var sliderList = document.querySelector('.jl-slider-list')
var sliderItem = document.querySelectorAll('.jl-slider-item')
var sliderListWidth = null

// Capturando larguras individuais
var containerWidth = sliderContainer.parentElement.offsetWidth

// Passando larguras dinâmicas
sliderContainer.style.width = containerWidth + 'px'

for(var p=0; p < sliderItem.length; p++) {
    sliderItem[p].style.width = containerWidth + 'px'

    var sliderItemWidth = sliderItem[p].offsetWidth
    sliderListWidth += sliderItemWidth
}

sliderList.style.width = sliderListWidth + 'px'

// Fazendo animação do slider onClick
var prevItem = document.querySelector('.jl-item-prev')
var nextItem = document.querySelector('.jl-item-next')
var sliderPos = 0

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

nextItem.addEventListener('click', function(){
    nextSlideAnim()
})

prevItem.addEventListener('click', function(){
    prevSlideAnim()
})