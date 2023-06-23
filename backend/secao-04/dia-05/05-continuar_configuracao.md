> Agora que o conceito de pool de conexões foi explicado e o arquivo connection.js foi criado, está na hora de configurarmos o express no projeto e testarmos se ele consegue se comunicar com o MySQL. Para isso, vamos criar o arquivo src/app.js com o seguinte conteúdo:


# // src/app.js

const express = require('express');

const app = express();

app.use(express.json());

module.exports = app;



# No código acima estamos criando as definições do express.

  Vale ressaltar que a função app.listen() não está sendo executada no arquivo src/app.js. Contudo, estamos realizando um module.exports na constante app que inicializa o express e registra os middlewares que serão utilizados inicialmente.

  A razão disso é que quando formos escrever nossos testes de integração, a definição de inicialização, rotas e middlewares do express, devem estar separadas da inicialização dele. Isso nos permitirá criar um mock das nossas rotas facilitando o processo de testar nossa API.

  🤔 Você deve estar se perguntando: “onde realizaremos a chamada da função app.listen() necessária para inicializar o express?” Nesse ponto entra o nosso arquivo src/server.js, no qual adicionaremos o seguinte conteúdo:


  # // src/server.js
  const app = require('./app');
  const connection = require('./db/connection');

  const PORT = 3001;

  app.listen(PORT, async () => {
    console.log(`API TrybeCash está sendo executada na porta ${PORT}`);

    // O código abaixo é para testarmos a comunicação com o MySQL
    const [result] = await connection.execute('SELECT 1');
    if (result) {
      console.log('MySQL connection OK');
    }
  });


> Dentro da função app.listen() foi adicionado um trecho de código que executa a função connection.execute(), que recebe como parâmetro uma consulta SQL SELECT 1. Essa função realiza uma conexão com o MySQL, executa o SQL passado como parâmetro e recebe uma resposta que é armazenada na constante result

npm start

vamos refatorar nosso arquivo src/server.js para retirar o código que utilizamos para testar se a comunicação com o MySQL estava ocorrendo.

# // src/server.js
const app = require('./app');

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`API TrybeCash está sendo executada na porta ${PORT}`);
});

# E nesse ponto teremos a seguinte estrutura de arquivos e diretórios no projeto:
.
└── trybecash-api/
    ├── src/
    │   ├── db/
    │   │   └── connection.js
    │   ├── app.js
    │   └── server.js
    ├── tests/
    │   └── -
    ├── docker-compose.yaml
    ├── Dockerfile
    ├── package.json
    └── trybecash_script.sql






