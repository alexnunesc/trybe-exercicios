# Polimorfismo.

Nesta situação, o polimorfismo ocorre quando um método implementado em uma superclasse é reimplementado numa subclasse, comportando-se de forma diferente.


Para ilustrar, no exemplo de código a seguir temos a representação TypeScript da classe Animal, a qual contém o método makeSound que representa o comportamento de emitir um sim e atributo turns , o qual contabiliza a quantidade de vezes que o som foi emitido (quantas vezes o método makeSound foi executado):



class Animals {
  declare turns: number;
  public makeSound(sound: string) {
      console.log('Som emitido:' + sound);
  }
}

class Dogs extends Animals {
  numberTurn(turns: number) {
      return turns;
  }

  makeSound( sound: string): void {
    const times = this.numberTurn(5);
    console.log(`Som emitido: ${sound}, ${times} vezes`);
  }
}

class Birds extends Animals {
  declare specie: string;

  makeSound (sound: string) {
    this.specie = 'pássaro';
      console.log(`O som emitido pelo ${this.specie} é ${sound}`);
  }
}

const dogs = new Dogs();
dogs.makeSound("au au au");

const birds = new Birds();
birds.makeSound("fiu fiu fiu fiu fiu");



