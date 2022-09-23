const a = 2;

const b = 5;

let res = 0;

let operacao = "ftccg"; // << Adicione um operado aritmético (* / + -).

if (operacao === '+') {
  res = a + b;
} else if (operacao === '-') {
  res = a - b;
} else if (operacao === '*') {
  res = a * b;
} else if (operacao === '/') {
  res = a / b;
} else if (operacao === '%') {
  res = a % b;
} else {
  res = 'error operado invalido'
}

console.log(res)