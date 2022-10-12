let fruits = [3, 4, 10, 1, 12];

let somar = 0;

for (let i in fruits) {
  somar += fruits[i];
}

let msg = '';

if (somar >= 15) {
  msg = somar;
} else {
  msg = 'valor menor que 16';
}

console.log(msg);


