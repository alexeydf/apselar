const $btnMenu = document.querySelector('.barra-menu');
const $menu = document.querySelector('.menu');
const $main = document.querySelector('main');

$btnMenu.addEventListener('click', ()=>{
    $menu.classList.toggle('menu-aberto');
})
$main.addEventListener('click', ()=>{
    $menu.classList.remove('menu-aberto');
})
/*$btnMenu.addEventListener('click', ()=>{
    $menu.classList.toggle('menu-aberto');
})*/