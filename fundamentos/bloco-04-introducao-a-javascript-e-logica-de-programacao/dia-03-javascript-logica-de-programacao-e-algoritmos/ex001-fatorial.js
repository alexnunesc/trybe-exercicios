let numeroFatorado = 4;
let fatorial = 1;

for (let index = numeroFatorado; index > 1; index -= 1) { //enquanto index que receber o numero fatorado, for maior  que 1
  fatorial *= index; //fatorial receber ele mesmo * index.
  
}
/* for (let i = n; i >= n.length -1; i-= 1) {
  f *= i;
} */

console.log(fatorial);