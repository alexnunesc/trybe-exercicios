# Camada Model.

  A camada Model tem como responsabilidade acomodar as entidades da nossa aplicação.

  > motorista.
  > passageiro.
  > viagem.

# Para aprendermos sobre a arquitetura em camadas, trabalharemos com a premissa de que o projeto TrybeCar possui funcionalidades desenvolvidas por um time que não conhecia a arquitetura e teremos duas missões:

  > Implementar novas funcionalidades para ter um CRUD de pessoas passageiras.

  > Refatorar as funcionalidades legadas, ou seja, as funcionalidades desenvolvidas pelo antigo time.


##
.
├── src/
│   ├── models/
│   │   ├── connection.js
│   │   └── passenger.model.js
│   ├── app.js
│   └── server.js
├── tests/
│   ├── integration/
│   │   └── -
│   └── -unit/
│       └── -
├── env-example
├── docker-compose.yml
├── package.json
├── script.sql
└── thunder-trybecar.json


Como alteramos o local do arquivo connection.js de src para src/models é preciso refletir esse ajuste no arquivo src/app.js para que nossa aplicação não falhe para os endpoints que já estão implementados.

// src/app.js
const connection = require('./models/connection');


Para podermos retornar os itens que existem na tabela passengers implementaremos a função findAll em src/models/passenger.model.js.

##
const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM passengers',
  );
  return camelize(result); 
};

module.exports = {
  findAll,
};
##

# como importar?
  > const passengerModel = require('./models/passenger.model.js');
  ou
  > const { findAll } = require('./models/passenger.model.js');


# É relativamente comum alguns Services ou outros componentes da arquitetura utilizarem mais de um model por vez, e para não precisarmos criar várias linhas para importar cada model, vamos usar uma estrutura conhecida como barrel. A ideia do barrel é criar um arquivo index.js na raiz de uma pasta e qualquer recurso de arquivos dessa mesma pasta vai ser importado através da raiz da pasta.

Para isso, crie o arquivo index.js na pasta src/models com o seguinte conteúdo.


// src/models/index.js

/* Este vai ser o único lugar do nosso código onde importamos o objeto Model direto do seu arquivo*/
const passengerModel = require('./passenger.model');

module.exports = {
  passengerModel,
};


# Daqui em diante onde precisarmos importar um model vamos utilizar o seguinte padrão.

> const { passengerModel } = require('./models');

O caminho pode mudar de acordo com o arquivo que chama o model, mas ele sempre vai importar sem especificar um arquivo, apenas a pasta models, como exportamos um objeto no barrel que vai possuir dentro dele vários objetos, nesse caso vamos importar desestruturando os Models necessários.



# Escrevendo o teste unitário da função findAll.


A ideia para realizar o teste da função findAll é verificar se a função connection.execute, ao ser executada, nos retorna um array com as linhas da tabela passengers. Porém, não é interessante no cenário de testes que o código se comunique com o banco de dados, por algumas razões:

## Performance:
  > Se durante os testes o código realizar a chamada para o banco de dados isso vai deixar o teste mais lento.

## Imprevisibilidade:
  > O banco de dados é um ambiente dinâmico, por isso não temos como ter certeza do que será retornado do banco quando uma consulta for executada. O que pode acontecer é que em um determinado momento, ao rodar os testes, a tabela pode ter um número específico de linhas, e ao executar os testes novamente em outro momento, a mesma tabela pode ter um número diferente de linhas da primeira execução, pois houve interações de pessoas usuárias com o banco entre cada execução. Como no teste precisamos fazer asserções, não é possível usar a resposta real do banco como um parâmetro.


  Portanto, para escrever os testes usaremos o recurso de criar um dublê para o retorno da função connection.execute através do módulo sinon. Assim, para escrever o teste da função findAll seguiremos duas etapas.





















