# Migrations.

Quando comparamos com migrations em JavaScript puro, há as seguintes mudanças em TypeScript:

> Uso de export default, em vez de export.default, no começo da lógica;

> O parâmetro queryInterface é tipado explicitamente;

> Não é necessário usar o segundo parâmetro, Sequelize, pois será usada diretamente a importação do objeto DataTypes.

Como o sequelize-cli não oferece a criação dos arquivos de migrations e seeders em TypeScript, vamos criar manualmente os arquivos de migrations. Para determinar a ordem que elas serão executadas, em vez do timestamp como prefixo para o nome do arquivo de cada migration, nós vamos adotar o seguinte padrão: usar uma sequência numérica que começa por 01-, 02- e, assim, sucessivamente.


# // src/database/migrations/01-create-users.ts

import { Model, QueryInterface, DataTypes } from 'sequelize'; 

import { User } from '../../types/User';

export default { 
  up(queryInterface: QueryInterface) { 
    return queryInterface.createTable<Model<User>>('users', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      }
    }) 
  }, 
  
  down(queryInterface: QueryInterface) { 
    return queryInterface.dropTable('users') 
  } 
};

# Perceba o TypeScript em ação:

O parâmetro das funções up e down da migration, queryInterface, foi tipado com um tipo de mesmo nome que o Sequelize havia fornecido.
A função queryInterface.createTable() é genérica! Ela recebe um tipo que havíamos importado do TypeScript, o Model. Este, por sua vez, recebe o tipo que queremos associar com essa tabela, que, no caso, é o User. Por isso, para chamar a função, é usada a sintaxe queryInterface.createTable<Model<User>>().



# // src/database/migrations/02-create-transactions.ts

import { Model, QueryInterface, DataTypes } from 'sequelize'; 

import { Transaction } from '../../types/Transaction';

export default { 
  up(queryInterface: QueryInterface) { 
    return queryInterface.createTable<Model<Transaction>>('transactions', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(30),
      },
      price: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2),
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userId: {
        allowNull: false,
        field: 'user_id',
        type: DataTypes.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
      },
    }) 
  },

  down(queryInterface: QueryInterface) { 
    return queryInterface.dropTable('transactions') 
  } 
};


# Seeders
Para trabalhar com a autenticação, é necessário cadastrar pessoas usuárias para interagir com a aplicação. Com esse objetivo, crie um seeder para povoar essa tabela.

Edite o arquivo criado para que ele contenha o seguinte código:

# // src/database/seeders/01-users.ts

import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        email: 'user1@banco.com',
        password: 'chang3m3',
        name: 'User 1',
      },
      {
        email: 'user2@banco.com',
        password: 'chang3m3',
        name: 'User 2',
      },
    ], {});
  },
  
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  }
};



# Executando migrations e seeders
Para executar migrations e seeders, vamos utilizar um script já existente no arquivo package.json. Execute-o com os seguintes comandos:


> docker exec -it transactions_api bash # Entrar no container na aplicação
> npm run db:reset

Anota aí 📝**: O docker precisa estar rodando para que o comando acima seja executado com sucesso.













