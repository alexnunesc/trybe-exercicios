// Suponha que você está modelando os personagens do jogo de luta multijogadores Super Smash Bros. No jogo, há personagens de alcances variados e movimentos especiais variados. Vence a pessoa que acumulou mais pontos na partida.

// 1 - Crie uma classe abstrata Character que tenha os métodos abstratos talk(): void e specialMove(): void.

// 2 - Crie a classe concreta MeleeCharacter que estenda Character e sobrescreva os métodos abstratos dessa classe.

// 3 - Crie a classe concreta LongRangeCharacter que estenda Character e sobrescreva os métodos abstratos dessa classe.

// 4 - Agora instancie as classes filhas com os personagens Yoshi e Samus, com seus respectivos specialMoveName e chame os métodos talk e specialMove para apresentar o personagem e seus respectivos ataques especiais.

abstract class Character {
  // constructor(
  //   protected name: string,
  //   protected energy: number,
  //   protected life: number,
  //   protected strength: number,
  //   protected defense: number
  // ) {}

  public abstract talk(): void;

  public abstract specialMove(): void;

  // public getName(): string {
  //   return this.name;
  // }

  // public getEnergy(): number {
  //   return this.energy;
  // }

  // public getLife(): number {
  //   return this.life;
  // }

  // public getStrength(): number {
  //   return this.strength;
  // }

  // public getDefense(): number {
  //   return this.defense;
  // }
}

class MeleeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
    console.log(`Hi, I'm ${this._name}. I attack at close range.`);
  }

  specialMove(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
    console.log(`${this._name} used ${this._specialMoveName}!`);
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de longo alcance */
    console.log(`Hi, I'm ${this._name}. I attack at long range.`);
  }

  specialMove(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de longo alcance */
    console.log(`${this._name} used ${this._specialMoveName}!`);
  }
}

const yoshi = new MeleeCharacter('Yoshi', 'Super dragon');
const samus = new LongRangeCharacter('Samus', 'Zero Laser');

yoshi.talk();
yoshi.specialMove();
samus.talk();
samus.specialMove();
