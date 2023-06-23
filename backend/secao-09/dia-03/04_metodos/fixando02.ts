// 1 - Continuando com o exercício anterior do jogo de luta Super Smash Bros, vamos aplicar uma refatoração com base no conteúdo acima. Crie um método estático que receba como parâmetro character: Character e, dentro dele, chame os métodos talk e specialMove para apresentar o personagem.

// 2 - Agora, ao invés de acionarmos os métodos talk e specialMove individualmente a partir das instâncias, acione-os por meio do método estático criado no exercício anterior.

abstract class Character {

  public abstract talk(): void;

  public abstract specialMove(): void;

  static characterPresentation(character: Character): void {
    character.talk();
    character.specialMove();
  }

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

Character.characterPresentation(yoshi);
Character.characterPresentation(samus);
