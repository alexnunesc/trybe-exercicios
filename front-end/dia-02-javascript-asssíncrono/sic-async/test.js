const n1 = 9;
const n2 = 3;
let n3 = n1 + n2;
console.log(n3 + ' log 1');//execução normal

setTimeout(() => { // função asincrona
  n3 = n1 - n2;
  console.log(n3 + ' Async log, após teempo determinado');//execução aincrona, dentro da função 
}, 1000);// tempo para ela ser executada

console.log(n3 + ' log 2'); //execução normal

/* o setTimeout é uma função que recebe dois parâmetros: o primeiro é uma função que será executada no futuro e o segundo parâmetro é o tempo em milissegundos (1 segundo = 1000 milissegundos) em que essa função será executada. */