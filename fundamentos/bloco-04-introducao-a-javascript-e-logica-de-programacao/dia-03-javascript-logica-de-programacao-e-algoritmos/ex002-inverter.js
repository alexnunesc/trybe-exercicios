let word = 'tryber';

let invertida = "";

for (let i = word.length -1; i >= 0; i -= 1) { //pegar a última posição usando length -1 
  invertida += word[i]; //vai adicionando da última para a primeira na string invertida usando +=
};

console.log(invertida);