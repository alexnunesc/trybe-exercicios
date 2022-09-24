let matriz = [
  ['1','2'],
  ['3','4'],
  ['5','6']
];

let res = '';
for(let l = 0; l <= 2; l++){
  for(let c = 0; c <= 1; c++){
   res += matriz[l][c] + '\n';
  }
};
console.log(res);
