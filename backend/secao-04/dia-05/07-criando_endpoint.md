# Criando o endpoint de cadastro de pessoa.

Com o intuito de deixar nosso projeto organizado, vamos criar um subdiretório chamado routes dentro de src para armazenar os arquivos com as rotas do nosso projeto.
> mkdir -p src/routes
na raiz do projeto.


> No subdiretório src/routes vamos criar o arquivo src/routes/peopleRoutes.js com o seguinte conteúdo:
# // src/routes/peopleRoutes.js
const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  const person = req.body;
  res.status(201).json(person);
});

module.exports = router;


# No trecho de código acima, estamos criando o endpoint POST /. No corpo da requisição é esperado um arquivo JSON (o mesmo que definimos no teste de integração) e simplesmente retornamos o mesmo JSON como resposta, cujo código de estado é igual a 201.

Vamos adicionar o seguinte trecho de código para que o express publique nossa rota:

# // src/app.js
// const express = require('express');
const peopleRoutes = require('./routes/peopleRoutes');

// const app = express();

// app.use(express.json());

app.use('/people', peopleRoutes);

// module.exports = app;


# No trecho de código acima:
> Adicionamos uma variável peopleRoutes com o router exportado no arquivo src/routes/peopleRoutes.js;

> Adicionamos esse middleware definindo que toda requisição em que o path comece com /people seja encaminhada para ele.



# Nesse momento, teremos a seguinte estrutura de arquivos e diretórios no projeto:
.
└── trybecash-api/
    ├── src/
    │   ├── db/
    │   │   └── connection.js
    │   ├── routes/
    │   │   └── peopleRoutes.js
    │   ├── app.js
    │   └── server.js
    ├── tests/
    │   └── integration/
    │       └── people.test.js
    ├── docker-compose.yaml
    ├── Dockerfile
    ├── package.json
    └── trybecash_script.sql


# Realizando a comunicação com o MySQL

Vamos criar arquivo src/db/peopleDB.js, que tem como responsabilidade agrupar todas as operações SQL relacionadas a tabela people. Inicialmente vamos escrever o código necessário para inserir uma pessoa no banco de dados, mas ao longo do dia adicionaremos código referente a outras operações.

O arquivo deve conter o seguinte conteúdo:

# // src/db/peopleDB.js
const conn = require('./connection');

const insert = (person) => conn.execute(
    `INSERT INTO people 
      (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`,
    [person.firstName, person.lastName, person.email, person.phone],
  );

module.exports = {
  insert,
};







