const porcentagem = 111;

let res;

if (porcentagem >= 90 && porcentagem <= 100) {
  res = 'A';
} else if (porcentagem >= 80) {
  res = 'B';
} else if (porcentagem >= 70) {
  res = 'C';
} else if (porcentagem >= 60) {
  res = 'D';
} else if (porcentagem >= 50) {
  res = 'E';
} else if (porcentagem >= 0 && porcentagem > 50) {
  res = 'F';
} else {
  res = 'error';
}
console.log(res);