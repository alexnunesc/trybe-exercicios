
//calcule a soma de todos os números de 1 a 100. O resultado será:

/* const n = 100;
let res = 1;

for (let index = 1; index < n; index += 1) {
  res += index;
  
}
console.log(res); */




//9.Pensando numa estrutura de repetição, aponte quantas vezes você pode subtrair 5 de 100
const n = 100;
let res = 1;

for (let index = n; index >= 0; index -= 5) {
  res += 1;
  
}
console.log(res);