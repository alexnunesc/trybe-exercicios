const n1 = 22;
const n2 = 5;
const n3 = 9;

let res = 0;

if (typeof(res) != 'number') { //verificando condição, se é um número.
  res = 'error'
} else {
  if (n1 > n2 && n1 > n3) {
    res = 'n1 é maior'
  } else if (n2 > n1 && n2 > n3) {
    res = 'n2 é maior'
  } else if (n3 > n1 && n3 > n2) {
    res = 'n3 é maior'
  }
}

console.log(res)