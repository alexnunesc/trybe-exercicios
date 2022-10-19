/* let fatorial = 1;
for (let i = 4; i > 1; i -= 1) {
  fatorial = fatorial * i;
}
console.log(fatorial) */

const fatorial = (numero) => numero > 1 ? numero * fatorial(numero -1) : 1;

console.log(fatorial(4));