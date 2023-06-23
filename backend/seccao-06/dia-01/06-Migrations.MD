# Migrations

*Uma migration é uma forma de versionar o schema do banco de dados.* Ou seja, cada migration conterá um pedaço de código que representa o histórico das alterações feitas no nosso banco de dados.

> Usando migrations, o mapeador objeto-relacional sabe exatamente quais alterações executar no banco de dados, tanto para criar algo novo quanto para restaurar o banco para uma versão mais antiga. Além disso, uma migration tem dois códigos conhecidos como Up e Down. Ou seja: toda migration, além de saber o que fazer para executar as mudanças no banco de dados (Up), também deve saber como reverter essas mudanças (Down). Isso significa que as migrations têm o poder de avançar ou reverter o seu banco de dados para qualquer um dos estados que ele já teve.


# ➡️ Agora vamos gerar um novo arquivo, com apenas o “esqueleto” de uma migration, usando o seguinte comando no terminal:

> npx sequelize migration:generate --name create-user


➡️ Agora vamos mexer apenas dentro das funções up e down. Repare que ambas as funções recebem dois parâmetros: um é o queryInterface, e o outro é o Sequelize. Ambos os parâmetros são objetos que armazenam dados e operações.

1. O queryInterface
> é usado pela biblioteca para modificar o banco de dados, seguindo o “dialeto” do banco que estamos utilizando.

2. O objeto Sequelize
> armazena os tipos de dados disponíveis no contexto do banco, por exemplo varchar, string, integer, date etc.

➡️ O objetivo da nossa migration é criar a tabela users com os seguintes campos e condições:

1. id: Identificador do item.

> É uma chave primária;
> Valor não pode ser nulo;
> Possui incremento automático;
> É do tipo Integer.

2. fullName: Nome completo da pessoa usuária da aplicação.
> É do tipo String.

3. email: E-mail da pessoa usuária da aplicação.
> É do tipo String.

4. createdAt: Data da criação do item.
> Valor não pode ser nulo;
> É do tipo Date.

5. updatedAt: Data da atualização do item.
> Valor não pode ser nulo;
> É do tipo Date.


# Podemos criar a tabela Users através da função createTable do queryInterface. A função createTable recebe dois parâmetros:

> O primeiro recebe uma string com o nome da tabela;

> O segundo recebe um objeto com os campos, e suas condições, da tabela.

Lembra da convenção que mencionamos anteriormente, na qual o nome do model é no singular e o nome da tabela é no plural? É por esta razão que na função createTable o nome especificado será "Users". 😉


# ➡️ Para começar, chamamos a função createTable passando o nome da tabela dentro do bloco de execução (up):

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};


# ➡️ Percebeu que cada campo possui um objeto representando as propriedades daquele campo em específico? Veja o que são cada uma dessas propriedades:

allowNull: Define se o campo pode ou não receber um valor null;
autoIncrement: Define se o campo vai ter incremento automático;
primaryKey: Define se o campo é uma chave primária;
type: Define o tipo do campo, por exemplo STRING, INTEGER, DATE, etc.
➡️ Agora vamos implementar o bloco de reversão (down) com um código que vai apenas apagar a tabela caso seja necessário desfazer a operação de execução (up). Assim escreveremos uma migration perfeitamente reversível!


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }


# Com a migration criada, basta executarmos o seguinte comando pelo CLI:


> env $(cat .env) npx sequelize db:migrate

Caso queira reverter uma migration use o seguinte comando:

> env $(cat .env) npx sequelize db:migrate:undo


# Criando uma nova migration para alterar uma tabela já existente


*✔️ A resposta certa é:* criar uma nova migration que permita alterar a tabela. Para isso, o objeto **queryInterface** possui funções específicas, que permitem criar uma nova coluna, remover uma coluna ou mesmo mudar o tipo de uma coluna que já existe. Nesse caso, o queryInterface abstrai o que a função ALTER TABLE faz no SQL. Deseja saber mais sobre ALTER TABLE e está com sua gestão de tempo em dia? Consulte o conteúdo adicional sobre o assunto.

https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/49fbc95c-1115-4c96-aded-1cba096dc9ed/lesson/815abac9-1bdf-46f5-a0ec-7813141e560b



### ➡️ Para criar uma outra migration para adicionar a coluna phoneNum na sua tabela Users, você deve criar um novo arquivo com o seguinte comando:

> npx sequelize migration:generate --name add-column-phone-table-users


➡️ Com isso, um novo arquivo [timestamp]-add-column-phone-table-users.js será criado.

> ➡️ Agora podemos inserir a função queryInterface.addColumn() no escopo Up para adicionar uma nova coluna à nossa tabela Users, e adicionar a função queryInterface.removeColumn() no escopo Down para remover a nova coluna da tabela. Veja como fazer isso a partir do código abaixo:


// src/migrations/[timestamp]-add-column-phone-table-users.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('Users', 'phoneNum', {
     type: Sequelize.STRING,
   });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'phoneNum');
  }
};

##
➡️ Em seguida rodamos o comando abaixo para executar a nossa nova migration:

> env $(cat .env) npx sequelize db:migrate

##
➡️ Também devemos alterar o model user.model.js para incluir a nova coluna phoneNum da seguinte forma:

// src/models/user.model.js

// const User = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     fullName: DataTypes.STRING,
//     email: DataTypes.STRING,
       // aqui inserimos o datatype da coluna criada
#       phoneNum: DataTypes.STRING,
//   });
// 
//   return User;
// };

// module.exports = User;





# Comando

npx sequelize model:generate --name books.model --attributes title:string,author:string,pageQuantity:integer

env $(cat .env) npx sequelize db:create


