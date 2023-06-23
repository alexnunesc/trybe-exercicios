# Relacionamentos N:N

Nos relacionamentos N:N, existem algumas diferenças significativas ao se criar as associações. Esse tipo de relacionamento pode ser visto também como dois relacionamentos um para muitos (1:N) ligados por uma tabela intermediária, chamada de tabela de junção, a qual guarda as informações de como as tabelas se relacionam entre si.

O diagrama abaixo será usado como exemplo:




Esse banco possui 3 tabelas: *users*, *books* e *users_books*. A tabela *users_books* possui um relacionamento *N:N* com as demais tabelas. Desta maneira, podemos concluir que:


1. A tabela users guarda as informações de cada pessoa.

2. A tabela books guarda as informações de cada livro.

3. A tabela users_books irá agir como uma tabela de junção, guardando a relação de quais pessoas possuem quais livros. Nessa tabela, uma pessoa pode possuir vários livros, enquanto um livro pode pertencer a várias pessoas. Cadastramos o livro uma única vez na tabela books, assim como a pessoa na tabela users. Graças a essa tabela, um livro vai poder ser associado de forma livre a várias pessoas, assim como uma única pessoa poderá ser associada a vários livros.

4. A tabela users_books possui dois campos compondo uma chave primária composta (Para entender melhor o conceito, acesse o conteúdo “Transformando ideias em um modelo de banco de dados”, em Database Design - Como modelar um banco de dados), justamente para evitar a redundância dos dados, já que a tabela não pode receber um conjunto de valores repetido (a pessoa a ser associada com o mesmo livro mais de uma vez).

https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/a10ee6b2-77b9-493f-ab76-a8f9822c5608/day/c04b45a4-0412-45ee-b2a9-de3d923a4ded/lesson/7f07a687-f50b-42e9-bab4-1bde21ad9207





# Bora começar? Para que possamos fazer o setup da nova aplicação, vamos executar os comandos abaixo:



mkdir books-api-sequelize && cd books-api-sequelize

npm init -y

npm i -E express@4.17.1 nodemon@2.0.15 sequelize@6.3.4 mysql2@2.1.0

npm i -D -E sequelize-cli@6.2.0

touch .sequelizerc
echo -e "const path = require('path');

module.exports = {
    'config': path.resolve('src', 'config', 'config.js'),
    'models-path': path.resolve('src', 'models'),
    'seeders-path': path.resolve('src', 'seeders'),
    'migrations-path': path.resolve('src', 'migrations'),
};
" >> .sequelizerc

mkdir src

(cd src && npx sequelize-cli init)

mkdir src/controllers src/services
touch src/app.js
echo -e "const express = require('express');

const app = express();

app.use(express.json());

module.exports = app;
" >> src/app.js
touch src/server.js

echo -e "const app = require('./app');
const { PORT = 3001 } = process.env;

app.listen(PORT, () => console.log(\`Ouvindo na porta \${PORT}\`));
" >> src/server.js 

touch src/services/userBook.service.js src/controllers/userBook.controller.js


# Agora, realize as configurações necessárias no seu projeto:

  > Config: Converta seu arquivo config para um arquivo JavaScript e configure as credenciais de acesso para usarem variáveis de ambiente.

  > Database: Crie o banco de dados com os nomes abaixo para cada situação:
      Para desenvolvimento: books_database_development;
      Para testes: books_database_test;
      Para produção: books_database_production;

  > .env: Crie na raiz do projeto para configurar suas variáveis de ambiente.

  > models/index: Lembre-se de configurar corretamente esse arquivo para utilizar o config.js.

  > package.json: Adicione o script dev com o comando nodemon src/server.js.

Tudo pronto! Então bora aprende como fazer as associações N:N na prática? 😎


# // src/models/User.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
  'User',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    underscored: true,
  },
);

  return User;
};



# // src/models/Book.js
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
      releaseYear: DataTypes.INTEGER,
      totalPages: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      underscored: true,
    }
  );

  return Book;
};


# // src/models/UserBook.js

module.exports = (sequelize, _DataTypes) => {
  const UserBook = sequelize.define(
    'UserBook',
    {},
    {
      timestamps: false,
      underscored: true,
      tableName: 'users_books',
    },
  );

  return UserBook;
};



Primeiro de tudo, note que não temos nenhum atributo nesse model. Isso é possível porque quando estabelecemos os relacionamentos no banco de dados usando UserBook como tabela de associação, o Sequelize já entende que esse model precisa ter os IDs que formam a chave composta das duas tabelas sendo associadas.

Para entender melhor as decisões que tomamos para configurar as options do sequelize.define underscored: para acessar a tabela referente a este model, UserBook (em PascalCase) vai ser transformado em snake_case e terá seu final pluralizado, transformando em “user_books” seu valor de acesso;

tableName: decidimos definir o nome da tabela que esse model se refere, para mantermos o padrão de nomes do model no singular.


# // src/models/UserBook.js

// module.exports = (sequelize, _DataTypes) => {
//   const UserBook = sequelize.define(
//     'UserBook',
//     {},
//     {
//       timestamps: false,
//       underscored: true,
//       tableName: 'users_books',
//     },

  UserBook.associate = (models) => {
    models.Book.belongsToMany(models.User, {
      as: 'users',
      through: UserBook,
      foreignKey: 'bookId', // se refere ao id de Book na tabela de `users_books`
      otherKey: 'userId', // se refere a outra chave de `users_books`
    });
    models.User.belongsToMany(models.Book, {
      as: 'books',
      through: UserBook,
      foreignKey: 'userId', // se refere ao id de User na tabela de `users_books`
      otherKey: 'bookId',
    });
  };

// return UserBook;
// };




Depois, temos um novo tipo de relacionamento: o belongsToMany. Esse relacionamento cria um relacionamento do tipo N:N, utilizando o model especificado na opção through como tabela de associação. Temos também o alias daquela associação, na chave as e, por último, temos os parâmetros foreignKey e otherKey. Esses dois parâmetros dizem ao Sequelize qual campo utilizar na tabela de associação para identificar cada uma das entidades.

Lembre-se: foreignKey sempre se refere ao model em que chamamos belongsToMany, enquanto otherKey se refere ao model com o qual estamos criando a associação.

Para testar a aplicação, você deve fazer as devidas alterações nos controllers, criar as migrations e os seeders.














