import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const incrementButton = document.querySelector('button');

// 1. Criando o Reducer com Estado Inicial
const INITIAL_STATE = { count: 0 };

const INCREMENT_COUNTER = "INCREMENT_COUNTER";

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case INCREMENT_COUNTER:
      return { count: state.count + 1 };
  
    default:
      return state;
  }
};

// 2. Criando a Store já com Redux Devtools
const store = createStore(reducer, composeWithDevTools());

// 3. Criando a Action
// const actionInicial = "INCREMENT_COUNTER";

// 4. Disparando a Action

incrementButton.addEventListener('click', () => {
  store.dispatch({ type: INCREMENT_COUNTER });
});

// 5. Lendo do Estado global 
store.subscribe(() => {

  const globalState = store.getState();

  const countElement = document.querySelector('h2');

  countElement.innerHTML = globalState.count;

});

getTag = (count) => {
  const countElement = document.querySelector('h2');

  countElement.innerHTML = globalState.count;
}

const incremento = () => {
  store.dispatch({ type: actionInicial });
}
