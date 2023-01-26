
// import { legacy_createStore as createStore } from 'redux';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    
    case 'PREVIUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };
    default:
      return state;
    }
  };
  
const store = Redux.createStore(reducer);

const nextButton = document.querySelector('#next');

nextButton.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' });
});

store.subscribe(() => {
  
  const { colors, index } =  store.getState();
  const value = document.getElementById('value');
  const container = document.getElementById('container');

  value.innerHTML = colors[index];
  container.style.backgroundColor = colors[index];
})













// function criarCor() {
//   const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
//   let cor = '#';
//   const aleatorio = () => Math.floor(Math.random() * oneChar.length);
//   for (let i = 0; i < 6; i += 1) {
//       cor += oneChar[aleatorio()];
//   }
//   return cor;
// };
