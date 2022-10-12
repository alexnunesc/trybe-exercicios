let n = 7;

let meio = (n + 1)/2;
let esquerda = meio;
let direita = meio;
let simb = '*';

for (let index = 1; index <= meio; index += 1) {
    let vazia = '';
    for (let j = 1; j <= n; j += 1) {
      if (index === meio || esquerda === j || direita === j) {
        vazia += simb;
      } else {
        vazia += ' ';
      }
    }
    esquerda -= 1 
    direita += 1
    console.log(vazia);
}


