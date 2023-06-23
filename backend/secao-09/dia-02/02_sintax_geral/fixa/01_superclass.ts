// Para fixar:
// Que tal exercitar a sintaxe um pouco, com um breve exercício bem simples? Juro que parece muita coisa, mas não é!

// Crie uma classe chamada Superclass.

// A Superclass deve possuir um atributo público isSuper

// isSuper deve ser setado como true na inicialização.

// A Superclass deve possuir um método público chamado sayHello, que deve imprimir “Olá mundo!”.

// Crie uma classe chamada Subclass que herda da Superclass.

// Crie uma função myFunc fora do escopo da Subclass que recebe um objeto da Superclass.

// Dentro dessa função, chame o método sayHello do objeto passado como parâmetro.
// Crie um objeto da Superclass e outro da Subclass.

// Chame a função myFunc 2 vezes, passando os objetos criados.

class Superclass {
  constructor(public isSuper: boolean = true) {}

  public sayHello() {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {}

const myFunc = (obj: Superclass) => {
  obj.sayHello();
}

const obj1 = new Superclass();
const obj2 = new Subclass();

myFunc(obj1);
myFunc(obj2);











