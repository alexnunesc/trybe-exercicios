let array = ['java', 'javascript', 'python', 'html', 'css'];


let maior = array[0]; //usar posição do arra como referencia 
let menor = array[0];

for(let i = 0; i < array.length; i += 1) {
  
  if(maior.length < array[i].length) { //usar o length para compara caracteres
    maior = array[i];
  }
  if(menor.length > array[i].length) {
    menor = array[i];
  }
};
console.log(maior , menor);