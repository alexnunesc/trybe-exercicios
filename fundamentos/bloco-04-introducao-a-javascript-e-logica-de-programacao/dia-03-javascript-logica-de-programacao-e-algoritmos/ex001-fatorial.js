let numeroFatorado = 5;
let fatorial = 1;

for (let index = numeroFatorado; index > 1; index -= 1) {
  fatorial *= index;
  
}
/* for (let i = n; i >= n.length -1; i-= 1) {
  f *= i;
} */

console.log(fatorial);