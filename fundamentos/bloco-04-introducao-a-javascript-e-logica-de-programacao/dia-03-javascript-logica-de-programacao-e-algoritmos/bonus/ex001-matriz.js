/* let matriz = [
  ['1','2'],
  ['3','4'],
  ['5','6']
];

let res = '';
for(let l = 0; l <= 2; l++){
  for(let c = 0; c <= 1; c++){
    if (c < 1) {
      res += `${matriz[l][c]}${'\t\t'}`;
    } else {
      res += `${matriz[l][c]}${'\n'}`;
    }
  };
};

console.log(`Conteúdo da matriz ${'\n'}${res}`);
 */

/* let matriz = [
  ['1','2'],
  ['3','4'],
  ['5','6']
];

 */

/* 
let linhas = 3;
let colunas = 3;

let matriz = [];

for (let index = 0; index < linhas; index++) {
  matriz [index] = [];
  for (let j = 0; j < colunas; j++){
    matriz [index] [j] = '';
  };
};

let text = '*';
for (let l = 0; l < linhas; l++){
  for (let c = 0; c < colunas; c++) {
    matriz [l][c] = text;
  };
};


let res = '';

for(let l = 0; l < linhas; l++){
  for(let c = 0; c < colunas; c++){
    if (c < colunas - 1) {
      res += `${matriz[l][c]}${'\t'}`;
    } else {
      res += `${matriz[l][c]}${'\n'}`;
    };
  };
};

console.log(`Conteúdo da matriz ${'\n'}${res}`); */



let linhas = 3;
let colunas = 3;

let matriz = [];

for (let index = 0; index < linhas; index++) {
  matriz [index] = [];
  for (let j = 0; j < colunas; j++){
    matriz [index] [j] = '';
  };
};

let text = '*';
for (let l = 0; l < linhas; l++){
  for (let c = 0; c < colunas; c++) {
    if (c < 1) {
      matriz [l][c] = text;
    } else if (l >= 1 && c <= 1){
      matriz [l][c] = text;
    }else if (l >= 2 && c <= 2){
    matriz [l][c] = text;
    } else {
      matriz [l][c] = '';
    }
    
  };
};


let res = '';

for(let l = 0; l < linhas; l++){
  for(let c = 0; c < colunas; c++){
    if (c < colunas - 1) {
      res += `${matriz[l][c]}${'\t'}`;
    } else {
      res += `${matriz[l][c]}${'\n'}`;
    };
  };
};

console.log(`Conteúdo da matriz ${'\n'}${res}`);




/* Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
let text = '*';
for (let l = 0; l < linhas; l++){
  for (let c = 0; c < colunas; c++) {
    if (c < 1) {
      matriz [l][c] = text;
    } else if (l >= 1 && c <= 1){
      matriz [l][c] = text;
    }else if (l >= 2 && c <= 2){
    matriz [l][c] = text;
    } else {
      matriz [l][c] = '';
    }
    
  };
};
 */




/* Agora inverta o lado do triângulo
let text = '*';
for (let l = 0; l < linhas; l++){
  for (let c = 0; c < colunas; c++) {
    if (c > 1) {
      matriz [l][c] = text;
    } else if (l >= 1 && c >= 1){
      matriz [l][c] = text;
    }else if (l >= 2 && c <= 2){
    matriz [l][c] = text;
    } else {
      matriz [l][c] = '';
    }
    
  };
}; */