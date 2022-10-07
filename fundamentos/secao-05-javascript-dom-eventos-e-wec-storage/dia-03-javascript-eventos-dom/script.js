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


//Parte 1
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
 

  if (decemberDaysList[i] === 24 || decemberDaysList[i] === 25 ) {
    liDays.className = 'day holiday';
  };

  if (decemberDaysList[i] === 4 || decemberDaysList[i] === 11 || decemberDaysList[i] === 18) {
    liDays.className = 'day friday';
  };

  //Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
  if (decemberDaysList[i] === 25 || decemberDaysList[i] === 31) {
    liDays.className = 'day holiday  friday';
  };

/*   if (decemberDaysList[i].innerText.includes('Sexta')) {
    liDays.className = 'sexta';
  } */
  
}

//Parte 2
//Implemente uma função que crie dinamicamente um botão com o nome “Feriados”.
  let buttonsContainer = document.querySelector('.buttons-container'); //deixando essa seleção global

  let buttonFunction = (Feriados) => {

  let buttonFeriado = document.createElement('button');
  //Adicione a este botão a ID "btn-holiday"
  buttonFeriado.id = 'btn-holiday';
  buttonFeriado.innerHTML = Feriados;
  
  //Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

  /* let buttonsContainer = document.querySelector('.buttons-container'); */
  buttonsContainer.appendChild(buttonFeriado);

}

buttonFunction('Feriados');

//Parte 3
//Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday" É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.


//assim adicionamos e removemos algum atributo de alguma tag usando o mesmo evento
let CorFeriados = document.querySelector('#btn-holiday');
CorFeriados.addEventListener('click', cor) 

function cor () {

  let mudarCorFeriados = document.querySelectorAll('.holiday');

for(let i = 0; i < mudarCorFeriados.length; i += 1){
  if (mudarCorFeriados[i].style.backgroundColor.includes('green')){
    mudarCorFeriados[i].style.backgroundColor = 'rgb(238,238,238)';
  } else {
    mudarCorFeriados[i].style.backgroundColor = 'green';
  }
  console.log(mudarCorFeriados);
  }
}


//Parte 4
//Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira".

function sextaFeira (sexta) { 
  let buttoSextaFeira = document.createElement('button');
  //Adicione a esse botão o ID "btn-friday";
  buttoSextaFeira.setAttribute('id', 'btn-friday');
  //Sua função deve receber como parâmetro a string “Sexta-feira”;
  buttoSextaFeira.innerHTML = sexta;
  //Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".
  buttonsContainer.appendChild(buttoSextaFeira);
}

sextaFeira('Sexta-Feira');

//Parte 5
//mplemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras. É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.
let buttoSextou = document.querySelector('#btn-friday')
buttoSextou.addEventListener('click', sextouFunction);

function sextouFunction (sextou) {
  let mudarTexto = document.querySelectorAll('.friday');

  for (let i = 0; i < mudarTexto.length; i += 1) {
    if (mudarTexto[i].className.includes('Sextou!!!')) {
      mudarTexto[i].innerHTML = mudarTexto[i];
    } else {
      mudarTexto[i].innerHTML = 'Sextou!!';
    }
  }
}