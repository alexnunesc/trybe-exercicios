// 1 - Crie uma classe chamada Tv, com os atributos:

// brand: marca da TV;
// size: tamanho em polegadas;
// resolution: resolução da tela;
// connections: conexões disponíveis(HDMI, Ethernet, etc.);
// connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.


// 2 - Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.

// 3 - Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.

// Utilizando o mesmo código dos exercícios de fixação anteriores:

// 5 - Altere a visibilidade dos atributos definidos na classe Tv para private.

// 6 - Crie um método getter e um setter para o atributo _connectedTo, da classe Tv.

// O setter deverá verificar se o valor definido está entre as conexões disponíveis (_connections) e:
// Em caso positivo, definir este valor para o atributo _connectedTo;
// Em caso negativo, imprimir no console a mensagem “Sorry, connection unavailable!”
// 7 - Defina um valor para o atributo _connectedTo por meio do método setter criado e imprima seu valor.




class TV {
  // 1 - Crie uma classe chamada Tv, com os atributos:
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }
  // 2 - Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.
  turnOn(): void {
    console.log(`
      Marca: ${this._brand}
      Tamanho: ${this._size}"
      Resolução: ${this._resolution}
      Conexões: ${this._connections.join(', ')}
    `);
  }

  // 6 - Crie um método getter e um setter para o atributo _connectedTo, da classe Tv.
  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  // O setter deverá verificar se o valor definido está entre as conexões disponíveis (_connections) e:
  
  set connectedTo(value: string) {
    if (!value || this._connections.includes(value)) {
      // Em caso positivo, definir este valor para o atributo _connectedTo;
      this._connectedTo = value;
    } else {
      // Em caso negativo, imprimir no console a mensagem “Sorry, connection unavailable!”
      console.log('Sorry, connection unavailable!');
    }
  }

}

// 3 - Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.

// const tv = new TV('LG', 50, '4k', ['HDMI', 'USB', 'Ethernet']);

// Exute o método turnOn
// tv.turnOn();

// 7 - Defina um valor para o atributo _connectedTo por meio do método setter criado e imprima seu valor.
const tvss = new TV('LG', 50, '4k', ['HDMI', 'USB', 'Ethernet']);

console.log(tvss.connectedTo = 'HDMI');
console.log('Connected to: ', tvss.connectedTo);
