# Operações

1. Implementando a listagem de pessoas usuárias

> Caso precisemos buscar todas as pessoas usuárias, por exemplo, basta criarmos os diretórios e arquivos para nossos services e controllers e preenchê-los como no código abaixo:



# // src/services/user.service.js

const { User } = require('../models');

/* Esta função usa o método findAll do Sequelize para buscar todas as linhas da tabela Users
Equivale a fazer a query: SELECT * FROM Users */
const getAll = async () => {
  const users = await User.findAll();

  return users;
};

module.exports = {
  getAll,
};



# // src/controllers/user.controller.js

const UserService = require('../services/user.service');

const getAll = async (_req, res) => {
  try {
    const users = await UserService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
};



# Repare
 que estamos importando o modelo que criamos do arquivo index.js da pasta models, e não diretamente do arquivo user.models.js. Quando executamos o comando npx sequelize init, o arquivo index.js é gerado dentro da pasta models.

1. O código desse arquivo index.js é responsável por:

  > Realizar a conexão com o banco de dados, por meio do arquivo config.json ou config.js;

  > Coletar todos os modelos definidos dentro da pasta models e;

  > Caso necessário, associar um modelo a algum outro.


# Agora precisamos criar nossos arquivos app.js e server.js com os código logo abaixo dentro da pasta src. Teste e veja o comportamento de uma aplicação utilizando o Sequelize.

# // src/app.js

const express = require('express');

const User = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.get('/user', User.getAll);

module.exports = app;


## // src/server.js

const app = require('./app');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});


# Antes de executar a aplicação, precisamos adicionar o Express e o nodemon como dependências da nossa aplicação:

npm install -E express@4.17
npm install -D -E nodemon@2.0.15

# Agora, altere a chave no package.json a chave main para que aponte para o arquivo server.js: e adicione o script 
dev para rodar sua aplicação.

//  {
//  ...
  "main": "src/server.js",
//  ...
  "scripts": {
    "dev": "nodemon src/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
//  ...
//  }

# Agora você pode executar o comando

 > env $(cat .env) npm run dev
 
e testar fazer uma requisição para URL http://localhost:3001/user. Como acabamos de criar o banco de dados e a tabela Users nas lições anteriores, a resposta da requisição será um array com duas pessoas usuárias, essas pessoas são as que foram inseridas graças ao Seeder que foi criado e executado anteriormente.



# Implementando os demais endpoints do CRUD de pessoas usuárias










