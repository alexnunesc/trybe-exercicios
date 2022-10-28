const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (nome) => {
  // Adicione seu código aqui:
  let res = nome.find(elem => elem.length === 5);
  return res;
};

console.log(findNameWithFiveLetters(names));