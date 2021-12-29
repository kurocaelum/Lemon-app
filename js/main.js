// Declarando variáveis
var btnContact = document.querySelector('.jl-btn-contact')
var toggleModal = document.querySelectorAll('.jl-toggle-modal')
var toggleMenu = document.querySelectorAll('.jl-toggle-menu')
var menuMobile = document.querySelector('.jl-menu-mob')
var btnMenuMobIcon = document.querySelector('.jl-btn-menu-mob ion-icon')

// Page Preloader
window.addEventListener('load', function () {
    var pagePreloader = document.querySelector('.jl-preloader')

    setTimeout(function () {
        pagePreloader.classList.add('jl-fade-out')
        pagePreloader.style.display = 'none'
    }, 1000)
})

// Botão de informações de contato
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.jl-contact-info')
    boxContact.classList.toggle('jl-is-open')
    this.classList.toggle('jl-change-icon')
})

// Abrir/fechar menu mobile (drawer menu)
for (let i = 0; i < toggleMenu.length; i++) {
    toggleMenu[i].addEventListener('click', function () {
        var overlay = document.querySelector('.jl-menu-overlay')
        overlay.classList.toggle('jl-is-open')

        menuMobile.classList.toggle('jl-menu-is-closed')
        menuMobile.classList.toggle('jl-menu-is-open')

        var icon = btnMenuMobIcon.getAttribute('name')
        
        if (icon === 'menu') btnMenuMobIcon.setAttribute('name', 'close')
        else btnMenuMobIcon.setAttribute('name', 'menu')
    })
}

// Abrir/fechar modal de orçamento
for (let i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener('click', function () {
        var overlay = document.querySelector('.jl-overlay')
        var modalOrcamento = document.querySelector('#jl-modal-orcamento')

        overlay.classList.toggle('jl-is-open')
        modalOrcamento.classList.toggle('jl-is-open')
        modalOrcamento.classList.toggle('jl-slide-top-in')
    })
}

// Animando elementos on scroll (com Waypoints)
var myScrollDown = document.querySelector('.jl-scroll-down')
var waypoint = new Waypoint({
    element: myScrollDown,
    handler: function () {
        myScrollDown.classList.toggle('jl-fade-out')
    },
    offset: '80%',
})
