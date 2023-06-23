// Sintaxe geral

class Person {
  name: string;
  age: number;
  weight?: number; // O '?' indica que o atributo é opcional

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    // console.log(`Hello ${name}!`);
  }

  comer() {
    console.log(`${this.name} está comendo!`);
  }
}

const p1 = new Person('Luiz', 30);

// aqui estamos passando somente dois parâmetros, atente-se ao valor do atributo p2.weight

const p2 = new Person('João', 25);

console.log(p1.name, p1.age);
console.log(p2.name, p2.age, p2.weight);

p1.comer();
p2.comer();
