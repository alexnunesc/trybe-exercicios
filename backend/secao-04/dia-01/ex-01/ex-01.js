// Exercício 1

// 🚀 Crie um código para calcular o índice de massa corporal(IMC) de uma pess.
const { imc } = require('./functs');
const readline = require('readline-sync');

const test = async () => {
  const peso = readline.questionFloat('Qual seu peso? ');
  const altura = readline.questionFloat('Qual sua altura? ');
  
  const res = await imc(peso, altura);
  console.log(res);
}
console.log(test());