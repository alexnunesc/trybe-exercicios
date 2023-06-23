# Bônus - Testes
Para testarmos os models criados com o Sequelize, seguiremos os mesmos conceitos vistos anteriormente: vamos isolar as operações de IO e utilizaremos bibliotecas específicas para nos ajudar com os stubs e asserções.

➡️ Antes de começar a realizar os testes, vamos instalar nossas dependências de desenvolvimento como nas aulas anteriores:

npm i mocha@10.0.0 chai@4.3.4 sinon@14.0.0 chai-http@4.3.0 -D -E
➡️ Agora vamos alterar a linha abaixo em nosso package.json para executar nossos testes com o comando npm test, como nas aulas anteriores:


// package.json

"scripts": {
  ...
  "test": "mocha tests/**/*$NAME*.test.js --exit"
},

Para testar um model com Sequelize, podemos utilizar bibliotecas específicas para nos ajudar nessa tarefa. Uma bastante utilizada é a Sequelize Test Helpers. Vamos ver um exemplo de como podemos utilizá-la:

Use o comando abaixo para instalar a biblioteca Sequelize Test Helpers:



npm i sequelize-test-helpers@1.4.3 -D -E
Crie o arquivo abaixo na raiz do projeto e depois rode npm test:

// tests/unit/models/user.test.js

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../../src/models/user.model');

describe('O model de User', () => {
  const User = UserModel(sequelize, dataTypes);
  const user = new User();

  describe('possui o nome "User"', () => {
    checkModelName(User)('User');
  });

  describe('possui as propriedades "fullName" e "email"', () => {
    ['fullName', 'email'].forEach(checkPropertyExists(user));
  });
});

É possível fazer essas asserções diretamente, porém esse módulo já possui diversas funções prontas para facilitar a escrita dos testes.