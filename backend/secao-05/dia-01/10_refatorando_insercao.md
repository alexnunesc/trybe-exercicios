# Refatorando a inserção de viagens.

O foco agora é remover qualquer presença de código SQL do nosso arquivo src/app.js. Porém, realizaremos isso por etapas. Nosso primeiro objetivo é mover o trecho em destaque para a camada Model.



Primeiramente, criaremos o arquivo tests/unit/models/mocks/travel.model.mock.js com os dados de mock que serão utilizados em nossos testes:


const newTravel =  {
  driverId: 1,
  passengerId: 2,
  travelStatusId: 2,
  startingAddress: 'Rua Alfa',
  endingAddress: 'Rua Omega',
  requestDate: '20202',
};

module.exports = {
  newTravel,
};

Nesse arquivo estamos criando e exportando o objeto newTravel, que simula um objeto para ser inserido no banco de dados.

###

Com os nossos dados de mock criados, agora geraremos o arquivo: tests/unit/models/travel.model.test.js, com o seguinte conteúdo:

#
const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { travelModel } = require('../../../src/models');

const { newTravel } = require('./mocks/travel.model.mock');

describe('Testes de unidade do model de viagens', function () {
  it('Realizando uma operação INSERT com o model travel', async function () {
    // arrange
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

    // act
    const result = await travelModel.insert(newTravel);

    // assert
    expect(result).to.equal(42);
  });

  afterEach(function () {
    sinon.restore();
  });
});
#

Aqui, estamos criando um teste de unidade que irá avaliar o comportamento da função travelModel.insert. Perceba que o teste dessa função é bastante similar a função insert em tests/unit/models/passenger.model.test.js.


Se executarmos o teste agora veremos ele falhando, pois ainda não implementamos o componente Model da tabela travels. Criaremos o arquivo src/models/travel.model.js e então a estrutura de diretórios ficará assim:

.
├── src/
│   ├── models/
│   │   ├── connection.js
│   │   ├── index.js
│   │   └── passenger.model.js
│   │   └── travel.model.js
│   ├── app.js
│   └── server.js
├── tests/
│   ├── integration
│   └── unit/
│       └── models/
│           ├── mocks/
│           │   └── passenger.model.mock.js
│           │   └── travel.model.mock.js
│           └── passenger.model.test.js
│           └── travel.model.test.js
├── env-example
├── docker-compose.yml
├── package.json
├── script.sql
└── thunder-trybecar.json



O teste falha pq 
não existir a função insert no arquivo src/models/travel.model.js. Vamos incluir a função insert no arquivo src/models/travel.model.js para que o erro da falta da função seja resolvido.

const insert = (travel) => travel;

module.exports = {
  insert,
};


No código acima estamos retornando o objeto travel que está sendo recebido como parâmetro da função. A próxima etapa é adicionar esse novo model ao arquivo barrel da pasta models.


// src/models/index.js
// const passengerModel = require('./passenger.model');
const travelModel = require('./travel.model');

// module.exports = {
//   passengerModel,
  travelModel,
// };




# Refatorando a rota GET /drivers/open/travels.

  Para consolidar nossos estudos sobre a camada Model, vamos refatorar o endpoint GET /drivers/open/travels. Agora todo o código de acesso ao banco de dados na camada ficará na camada de Model. O trecho de código a ser refatorado em src/app.js é o seguinte:

// ...

app.get('/drivers/open/travels', async (_req, res) => {
  const [result] = await connection.execute(
    'SELECT * FROM travels WHERE travel_status_id = ?',
    [WAITING_DRIVER],
  );
  res.status(200).json(camelize(result));
});

// ...


Note que temos uma consulta SQL na tabela travels, responsável por buscar todas as viagens onde o valor da coluna travel_status_id seja igual à constante WAITING_DRIVER. Vamos mover essa consulta para a camada Model. 😎

Adicionaremos mais um caso de testes no arquivo tests/unit/models/travel.model.test.js com o seguinte conteúdo:


 it('Recuperando as travels a partir do seu travel_status_id', async function () {
    // arrange
    sinon.stub(connection, 'execute').resolves([travelsFromDB]);
    // act
    const result = await travelModel.findByTravelStatusId(1);
    // assert
    expect(result).to.be.deep.equal(travels);
  });



# Nesse ponto, adicionaremos o seguinte código no arquivo src/models/travel.model.js:

// ...

const findByTravelStatusId = async (travelStatusId) => {
  const [result] = await connection.execute(
    'SELECT * FROM travels WHERE travel_status_id = ?',
    [travelStatusId],
  );
  return camelize(result);
};

// module.exports = {
//   insert,
//   findById,
  findByTravelStatusId,
// };








