
# Seeders.

*Recapitulando*: um seeder é usado para, basicamente, alimentar o banco de dados com informações necessárias para o funcionamento mínimo da aplicação.


1. As seeds seguem a mesma linha das migrations, portanto primeiramente vamos precisar executar a criação de uma nova seed pelo CLI:

> npx sequelize seed:generate --name users

Reparem que o arquivo foi criado dentro da pasta seeders com o mesmo formato do arquivo de uma migration.

// src/seeders/[timestamp]-users.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        fullName: 'Leonardo',
        email: 'leo@test.com',
        // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        fullName: 'JEduardo',
        email: 'edu@test.com',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};

###
> Na função acima, estamos utilizando o parâmetro recebido pela função queryInterface para conversar com o banco de dados. Dessa forma, conseguimos inserir os dados que queremos. Também estamos adicionando os dados, que estão na estrutura de uma array de objetos, na tabela users. O queryInterface tem a função bulkInsert, a qual estamos utilizando, que insere múltiplos dados na tabela.

 *Note que a seed segue o mesmo princípio de up e down, ou seja, devemos colocar também o que a seed deve fazer caso precise reverter a operação. Aqui, um código ruim pode quebrar o fluxo de uso/reversão dos seeds, então escreva com atenção!*

Para executar a seed, basta rodarmos o comando abaixo:

> env $(cat .env) npx sequelize db:seed:all

Para reverter o seed, use o seguinte comando:

> env $(cat .env) npx sequelize db:seed:undo:all



