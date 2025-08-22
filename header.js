//recupere le bloque
const slides=document.querySelector('.slides');
const count=document.querySelectorAll('.slide').length;
//compteur qui nous permettra de creer les mouvements
let index=0;
//fontion permetant de deplacer chaque slide
function showslide(){
    index++;

if(index>=count){
    index=0;
}
slides.style.transform=`translateX(${-index*100}%)`;
}
setInterval(showslide,3000);