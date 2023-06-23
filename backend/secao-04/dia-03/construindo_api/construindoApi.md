# Construindo a API
 Passos.


01. Para começarmos o desenvolvimento das funcionalidades, precisaremos criar um arquivo para a API chamado app.js dentro da pasta src.

.
├── src/
│   └── app.js
├── tests/
│   └── integration/
│       └── chocolates.test.js
└── package.json

Em seguida, iremos instalar o Express para viabilizar a definição das rotas da aplicação.

> npm install express@4.17.1 --save-exact

## De olho na dica 👀:
> Outra boa prática, para construir a API, é fazer a separação

> (I) do conjunto da definição das rotas (No arquivo app.js, por exemplo, que será consumido pelo chaiHttp),

> (II) do servidor propriamente dito, que consome essas regras (Esse continuaria em server.js, para utilizarmos em contextos de não-teste):



# // src/app.js
const express = require('express');

const app = express();

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

module.exports = app;


# Em posse do novo arquivo, podemos importar as rotas no arquivo de teste e, em seguida, verificar novamente se o teste será executado com sucesso.

> const app = require('../../src/app');


# Primeiramente,
  iremos definir um arquivo para armazenar todas as informações sobre os chocolates da Cacau Trybe. Para isso, crie uma pasta com o nome files dentro da pasta src e, em seguida, crie o arquivo com o nome cacauTrybeFile.json com as seguintes informações:



# Para acessar a lista de chocolates
 também precisaremos das funções que irão ler o arquivo JSON e definir filtros de dados de acordo com os contratos da nossa API.

> Essas funções serão definidas em um arquivo chamado **cacauTrybe.js** dentro da pasta src.

.
├── src/
│   ├── files/
│   │   └── cacauTrybeFile.json
│   ├── app.js
│   └── cacauTrybe.js
├── tests/
│   └── integration/
│       └── chocolates.test.js
└── package.json


## 
Veja que a função getAllChocolates(), depende da leitura do arquivo CacauTrybeFile.json para retornar a lista de chocolates.
