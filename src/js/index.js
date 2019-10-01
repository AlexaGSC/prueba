let contenido = document.querySelector('.contenido');
let lanzar = document.querySelector('.bDice');




function random (min , max) {
 return min + Math.floor(Math.random() * max);
  
 
}

function throwDice()  {
  contenido.textContent = random(1, 6);
}

lanzar.addEventListener('click', throwDice);