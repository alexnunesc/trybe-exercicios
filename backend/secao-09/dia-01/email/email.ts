// A liderança da empresa que você trabalha te pediu para implementar um projeto de desenvolvimento que consiste em um simples gerenciador e-mails.

// Para isso, você precisa de:

// Uma modelagem de representação genérica de um email

// 1. Todo e-mail criado deve possuir os campos:

// Endereço de e-mail da pessoa remetente

// Endereço de e-mail da pessoa destinatária

// Assunto da mensagem, que não pode ter mais de 20 caracteres

// Mensagem

// 2. Todo e-mail criado deve ter sua representação textual, que combina todos os dados em uma string única

// 3. Uma representação genérica de uma lista de e-mails (mailList)

// 4. A lista de e-mails deve ser capaz de retornar e-mails filtrados por pessoa remetente, destinatária ou por assunto.


// 1. Crie uma classe chamada Email, com os atributos:

class Email {
  private _from: string;
  private _to: string;
  private _subject: string;
  private _message: string;

  constructor(from: string, to: string, subject: string, message: string) {
    this._from = from;
    this._to = to;
    this._subject = subject;
    this._message = message;
  }

  set subject(value: string) {
    if (value.length > 40) {
      throw new Error('Subject must be less than 20 characters');
    }
    this._subject = value;
  }

  get from(): string {
    return this._from;
  }

  get to(): string {
    return this._to;
  }

  // 2. Todo e-mail criado deve ter sua representação textual, que combina todos os dados em uma string única
  get content(): string {
    return `
      From: ${this._from} to: ${this._to} ${this._subject} ${this._message}`;
  }

  
}

export default Email;

