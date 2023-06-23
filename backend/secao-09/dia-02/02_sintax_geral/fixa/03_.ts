// No construtor da Subclass, o atributo isSuper deve ser setado como false. Você vai precisar utilizar o super.

// Dentro da função que recebe um objeto da Superclass como parâmetro, cheque o valor do atributo isSuper e imprima no console “Super!” se for true e “Sub!” se for false;

class Superclass {
  constructor(public isSuper: boolean = true) {}

  public sayHello() {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc = (obj: Superclass) => {
  obj.sayHello();
  // Dentro da função que recebe um objeto da _Superclass_ como parâmetro, cheque o valor do atributo _isSuper_ e imprima no console "Super!" se for `true` e "Sub!" se for `false`;
  console.log(obj.isSuper ? 'Super!' : 'Sub!');
}

const obj1 = new Superclass();
const obj2 = new Subclass();

myFunc(obj1);
myFunc(obj2);
