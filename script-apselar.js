const $btnMenu = document.querySelector('.barra-menu');
const $menu = document.querySelector('.menu')

$btnMenu.addEventListener('click', ()=>{
    $menu.classList.toggle('menu-aberto');
})