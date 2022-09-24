let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let res= 0;

let s = 0;

let maior = 0;

let menor = numbers[0];
let impar = 0;

for (let i in numbers) {
  s += numbers[i];
  console.log(`Valor n° ${i} vale ${numbers[i]}`);

  if (maior < numbers[i]) {
    maior = numbers[i];
  }

  if (menor > numbers[i]) {
    menor = numbers[i];
  }
  if (numbers[i] % 2 != 0) {
    impar ++;
  }
  
};

console.log('          ');

if(s > 20) {
  m = 'maior que 20';
} else {
  m = 'menor ou igual a 20';
};

console.log('          ');


console.log(`maior valor ${maior},   menor valor ${menor},   a somar os valores é ${m},   a somar dos valores ${numbers} = ${s},    a quantidade de impares é ${impar}`);


v2 = 0;
let array = [];
for (let index = 0; index <= 25; index ++) {
  array.push(index);
  v2 = array[index]/2;
  console.log(v2);
};
console.log(array)
