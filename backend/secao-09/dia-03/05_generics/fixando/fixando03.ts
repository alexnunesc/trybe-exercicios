
// Utilize a estrutura a seguir nos exercícios dessa seção:

// Character define os atributos básicos de um personagem de um videogame de luta, com o nome do personagem (name) e de seu movimento especial (specialMove):
// DbCharacter estende os atributos da classe Character para incluir aqueles existentes no banco de dados.

// interface Character {
//   name: string;
//   specialMove: string;
// }

// interface DbCharacter extends Character {
//   id: number;
// }

// const db: DbCharacter[] = [];
// 1 - Crie uma interface chamada IModel que defina as operações básicas de um CRUD para a entidade Character.

// 2 - Crie uma classe LocalDbModel que implemente a interface IModel.

// 3 - Crie uma classe CharacterService que recebe como dependência em seu construtor uma instância do tipo LocalDbModel e a utilize em sua lógica de negócio.

// 4 - Refatore CharacterService para que possa receber uma instância de qualquer classe que implemente a interface IModel.

// 5 - Crie uma classe MockedDbModel que implemente IModel com uma versão mock.

// 6 - Verifique que a classe CharacterService pode receber uma instância tanto de LocalDbModel como de MockedDbModel.
// 

interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

//  1 - Crie uma interface chamada IModel que defina as operações básicas de um CRUD para a entidade Character.

interface IModel<T> {
  getAll(): T[];
  getById(id: number): T | undefined;
  save(item: T): void;
  delete(id: number): void;
}

// 3 - Crie uma classe CharacterService que recebe como dependência em seu construtor uma instância do tipo LocalDbModel e a utilize em sua lógica de negócio.

class LocalDbModel implements IModel<DbCharacter> {
  getAll(): DbCharacter[] {
    return db;
  }

  getById(id: number): DbCharacter | undefined {
    return db.find((item) => item.id === id);
  }

  save(item: DbCharacter): void {
    db.push(item);
  }

  delete(id: number): void {
    const index = db.findIndex((item) => item.id === id);
    if (index !== -1) {
      db.splice(index, 1);
    }
  }
}
