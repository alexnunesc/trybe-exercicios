# Sintaxe com interfaces e generics.
# Polimorfismo com interfaces.

O polimorfismo com interfaces se dá da mesma forma que o com herança.

Duas classes diferentes implementam a mesma interface, implementando também os métodos obrigatórios que a interface estipula.

Por exemplo, podemos enviar a uma função um parâmetro com o tipo da interface e passar em seu lugar um objeto de uma classe que implementa tal interface.

Há uma garantia de que tudo o que a interface estipula está implementado na classe e, consequentemente, no objeto.

Classes diferentes irão implementar determinados métodos de formas diferentes. No exemplo abaixo, o método showIdentification é implementado de forma diferente nas classes PessoaFísica e PessoaJurídica.



# Garantia de tipo com generics
Agora imagine que você queira agora criar uma classe Contrato, que vai possuir uma pessoa corretora, que pode ser tanto uma pessoa física quanto uma pessoa jurídica.

Ao passar simplesmente Pessoa como tipo da pessoa corretora, você perde a capacidade de acessar elementos específicos das classes PessoaFísica e PessoaJurídica.

class Contract {
  static _number = 0;
  constructor(public broker: Person){}
  static get number() { return this._number; }
}

const c1 = new Contract(pp0);
console.log(c1.broker.cpf); // Erro, pois não existe cpf em Person
Para garantir o tipo utilizado, podemos utilizar generics.

É bem simples:

Escolhemos uma letra para representar o elemento e a colocamos entre sinais de menor e maior que (<>) após o nome da classe
Utilizamos esta letra no lugar do tipo Pessoa
Copiar
class Contract<T> { // Agora a classe recebe o genérico T
  static _number = 0;
  constructor(public broker: T) { } // T no lugar de Person
  static get number() { return this._number; }
}

// Tipo inferido (não explícito)
const c1 = new Contract(pp0); // TypeScript "advinha" que pp0 é pessoa física
console.log(c1.broker.cpf); // Okay

// Tipagem explícita
const c2: Contract<LegalPerson> = new Contract(lp); // Deixo explícito que lp é pessoa jurídica
console.log(c2.broker.cnpj); // Okay

/*
Saída:
123456789
834729384723
*/







