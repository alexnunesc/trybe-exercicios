let pizzas = ['queijo', 'frango', 'palmito', 'chocolate', 'calabresa'];//variavel composta.

pizzas.push('nova');//adicionar valor ao final

console.log(pizzas.length);//saber quantos valores tem no meu array.

console.log(pizzas.sort()); //organizando array, por orde alfabetica ou numerica.

//mostra posição por posição do array .

//maneira 01.
for(let index = 0; index < pizzas.length; index ++){
  console.log(pizzas[index]);
}
//maneira 02.
for(let i in pizzas){
  console.log(pizzas[i]);
}