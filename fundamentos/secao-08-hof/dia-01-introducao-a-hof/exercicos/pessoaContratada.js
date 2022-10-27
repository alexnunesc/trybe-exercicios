const user1 = (dados) => {
  const obj = {
    nome: dados,
    email: `${dados.split(' ').join('_')}@trybe.com`,
  }
  return obj;
};

const newEmployees = (d1, d2, d3) => {
  const employees = {
    id1: d1, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: d2, // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: d3, // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};


console.log(newEmployees(user1('alex hvyh'), user1('Luiza trajando'), user1('So vai')));