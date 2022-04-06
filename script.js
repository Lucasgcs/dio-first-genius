let order = [];
let clickedOrder = [];
let score = 0;

/**
 * 0 - verde
 * 1 - vermelho
 * 2 - amarelo
 * 3 - azul
 */

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//ordem aleatória de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for(let i in order){
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

//acendo próxima cor
let lightColor = (element, number) => {
  let time = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, time - 250);

  setTimeout(() => {
   element.classList.remove('selected'); 
  });
}

//checa se cor clicada corresponde a ordem gerada
let checkOrder = () => {
  for(let i in clickedOrder){
    if(clickedOrder[i] != order[i]){
      gameOver();
      break;
    }
  }

  if(clickedOrder.length == order.length){
    alert(`Pontuação: ${score}\nVocê acerto! Iniciando próximo nível!`);
    nextLevel();
  }
}

//realizar click
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() =>{
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);

  
}

//retorna a cor
let createColorElement = (color) => {
  if(color == 0 ){
    return green;
  } else if(color == 1){
    return red;
  } else if(color == 2){
    return yellow;
  }else{
    return blue;
  }
}

//proximo nivel
let nextLevel = () =>{
  score++;
  shuffleOrder();
}

//game over
let gameOver = () => {
  alert(`Pontuação: ${score}!\n Você perdeu o jogo!\nClique em Ok para iniciar um novo jogo`);
  order = [];
  clickedOrder = [];

  playGame();
}

//iniciar o jogo
let playGame = () => {
  alert('Bem vindo ao Genius! Inciando o Jogo');
  score = 0;

  nextLevel();
}

green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();