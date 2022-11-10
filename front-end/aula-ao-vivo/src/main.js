import './style.css';
//pegando o botão
const shuffleButton = document.querySelector('.shuffle');

//chamando a função
shuffleButton.addEventListener('click', startNewGamer);

let deckId;

//função chamada
const startNewGamer = () => {
  //requisição de API
  //pegando um baralho
  fetch('https://www.deckofcardsapi.com/api/deck/new/')
    //transformar a resposta recebida em JSON
    .then((response => response.json()))
    //embaralhando o baralho da API
    .then(data => fetch(`https://www.deckofcardsapi.com/api/deck/new/${data.deck_id}/shuffle`))
    //retonoar positivo
    .then(data => {
      console.log(data);
      deckId = data.deck_id;
    })
    //retonor error
    .catch(error => console.log(error.message));
};