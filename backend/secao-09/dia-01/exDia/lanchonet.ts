// Exercício 3: Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que represente um pedido e uma que represente um item do pedido.

// A pessoa cliente deverá conter o nome;
// O item do pedido deve conter o nome do pedido (ex. “Batatas fritas”; “Açaí”) e o preço;
// O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: “cartão”, “dinheiro”) e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.
// Exercício 4: Agora vamos adicionar às nossas classes do exercício anterior os comportamentos. A classe que representa o pedido deverá ter dois métodos: um que calcula o total do pedido e outro que calcula o total aplicando o valor de desconto.

class Person {
  private _name: string;

  constructor(name: string) { this._name = name; }

  get name(): string { return this._name; }
}

class Items {
  private _name: string;
  private _price: number;
  price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }
}

class Order {
  private _client: Person;
  private _items: Items[];
  private _paymentMethod: string;
  private _discount: number;

  constructor(client: Person, items: Items[], paymentMethod: string, discount: number) {
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  get client(): Person { return this._client; }
  get items(): Items[] { return this._items; }
  get paymentMethod(): string { return this._paymentMethod; }
  get discount(): number { return this._discount; }
  
  public total(): number {
    let total: number = 0;
    for (let item of this._items) {
      total += item.price;
    }
    return total;
  }

  public totalWithDiscount(): number {
    return this.total() * (1 - this._discount);
  }
}
