//animação do menu
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

//animação banner

const $img = document.querySelectorAll('.banner-img img');
const $btnBannerLeft = document.querySelector('.left');
const $btnBannerRight = document.querySelector('.right');

$btnBannerLeft.addEventListener('click', ()=>{
    clearInterval(tempoBanner);
    animacaoBanner();
})
$btnBannerRight.addEventListener('click', ()=>{
    clearInterval(tempoBanner);
    animacaoBanner();
})
$img[0].addEventListener('mouseover', ()=>{
    $btnBannerLeft.classList.add('btn-banner-aparece');
})

let n = 0;
let tempoBanner = null;

tempoBanner = setInterval(()=>{
    animacaoBanner();
},10000)

function animacaoBanner(){
    $img[n].classList.remove('aparecendo');
    n++
    if(n >= ($img.length )){
        n = 0;
    }
    $img[n].classList.add('aparecendo');
}