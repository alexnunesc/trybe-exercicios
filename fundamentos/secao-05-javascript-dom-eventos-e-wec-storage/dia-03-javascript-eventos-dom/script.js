function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

//A tag <ul> deve conter o id 'days'
const idUl = document.querySelector('ul.task-list');
idUl.id = 'days';


const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

//Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
for (let i = 0; i < decemberDaysList.length; i += 1) {
  const liDays = document.createElement('li');
  liDays.className = 'day';
  liDays.innerText = decemberDaysList[i];
  idUl.appendChild(liDays);

  //Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day
  if (decemberDaysList[i] === 24 || decemberDaysList[i] === 25 || decemberDaysList[i] === 31) {
    liDays.className = 'day holiday';
  };

  if (decemberDaysList[i] === 4 || decemberDaysList[i] === 11 || decemberDaysList[i] === 18) {
    liDays.className = 'day friday';
  };

  //Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
  if (decemberDaysList[i] === 25) {
    liDays.className = 'day holiday  friday';
  };

}

//Implemente uma função que crie dinamicamente um botão com o nome “Feriados”.
let buttonFunction = (Feriados) => {

  let buttonFeriado = document.createElement('button');
  //Adicione a este botão a ID "btn-holiday"
  buttonFeriado.id = 'btn-holiday';
  buttonFeriado.innerHTML = Feriados;
  
  //Adicione este botão como filho/filha da tag <div> com classe "buttons-container"
  let buttonsContainer = document.querySelector('.buttons-container');
  buttonsContainer.appendChild(buttonFeriado);

}

buttonFunction('Feriados');

//Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday" É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.
let CorFeriados = document.querySelector('#btn-holiday');
CorFeriados.addEventListener('click', cor) 

function cor () {

  let mudarCorFeriados = document.querySelector('.holiday');

  if (mudarCorFeriados.style.backgroundColor.includes('green')){
    mudarCorFeriados.style.backgroundColor = 'rgb(238,238,238)';
  } else {
    let mudarCorFeriados = document.querySelector('.holiday');
    mudarCorFeriados.style.backgroundColor = 'green';
  }
  
}


