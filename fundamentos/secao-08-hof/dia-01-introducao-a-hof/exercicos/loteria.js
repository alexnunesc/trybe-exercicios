const numberAletorio = () => Math.floor(Math.random() *  6);

const comparacaoDeAposta = (aposta, sorteio) => aposta === sorteio ? 'Parabéns você ganhou!!' : 'Tente novamente)';

console.log(comparacaoDeAposta(3, numberAletorio()));