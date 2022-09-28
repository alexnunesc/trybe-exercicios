const object = { a: 1, b: 2, c: 3 };

for (const key in object) {
  console.log(key + ' = ' + object[key] );
}





function greetingsMessage(name) {
  console.log("Seja bem vindo, " + name);
}

greetingsMessage('alex')





let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(index , cars[index]);
}



let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};
car.ano = 2022;
for (let index in car) {
  console.log(index, car[index]);
}

//for in
let food = ['hamburguer', 'bife', 'acarajé'];
for (let position in food) {
  console.log(position);
};
//resultado: 0, 1, 2;

//for of
let food1 = ['hamburguer', 'bife', 'acarajé'];
for (let value of food1) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;