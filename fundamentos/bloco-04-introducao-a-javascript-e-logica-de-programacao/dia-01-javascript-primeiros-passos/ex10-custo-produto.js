const valorCusto = 100;
const valorVenda = 200;

let impostoSobreOCusto = valorVenda*20/100;

let lucro = valorVenda - impostoSobreOCusto - valorCusto;

if (valorCusto <= 0 || valorVenda <= 0) {
  res = 'error';
} else {
  res = lucro;
}
console.log(res);

