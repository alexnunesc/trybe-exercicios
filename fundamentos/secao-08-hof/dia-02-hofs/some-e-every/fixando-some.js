const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  let res = arr.some((arr) => arr === name ? true : false);
  return res;
};

console.log(hasName(names, 'Bruna'));