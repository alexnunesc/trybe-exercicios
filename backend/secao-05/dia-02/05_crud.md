Comece criando a pasta src/services e dentro dessa pasta, crie o arquivo passenger.service.js e o arquivo index.js, nós iremos continuar usando o padrão barrel que vimos no dia anterior.


.
└── src/
    ├── models/
    ├── services/
    │   └── index.js    
    │   └── passenger.service.js
    ├── tests/
    │   ├── integration
    │   └── unit/
    │       └── models
    ├── app.js
    └── server.js


const { passengerModel } = require('../models');

const findAll = async () => {
  const passengers = await passengerModel.findAll();
  return { type: null, message: passengers };
};

module.exports = {
  findAll,
};


Aqui importamos o objeto passengerModel do diretório models e implementamos a função findAll que, por sua vez, executa a função passengerModel.findAll.

Por fim, essa função retorna o objeto { type: null, message: passengers }. Esse é um padrão que adotaremos nos retornos das funções do serviço: quando o valor do atributo type for igual a null, isso significa que a operação foi bem sucedida e o atributo message possuirá o retorno esperado. Contudo, em caso de falha, a propriedade type será definida com um tipo de erro e a propriedade message com a respectiva mensagem de erro.




# Testando ele.

  Portanto comece criando a pasta services em test/unit e, na sequência, crie o arquivo passenger.service.test.js; crie também a pasta mocks e, dentro dessa pasta, o arquivo passenger.service.mock.js. Após essas operações a sua estrutura de diretório ficará assim:

.
└── src/
    ├── models/
    ├── services/
    │   └── index.js    
    │   └── passenger.service.js
    ├── tests/
    │   ├── integration
    │   └── unit/
    │       └── models/
    │       └── services/
    │           ├── mocks/
    │           │   └── passenger.service.mock.js
    │           └── passenger.service.test.js  
    ├── app.js
    └── server.js



> Agora escreveremos o teste da função findAll. Aqui é interessante partir da premissa que já escrevemos o teste da função findAll na camada Model e o que agora só precisamos testar o comportamento da função findAll do serviço. Dessa forma, vamos usar o sinon.stub para mockar a chamada da função da camada Model para retorna o array que definimos anteriormente (allPassengers).

📝**Anote aí**: Note que a medida que vamos subindo de camada, o dublê sempre é feito para a camada inferior. Na camada Model, criamos um dublê para o banco de dados, agora na camada Service criamos um dublê para a camada Model e quando chegarmos na camada Controller, criaremos um dublê para a camada Service.

#
const { expect } = require('chai');
const sinon = require('sinon');
const { passengerService } = require('../../../src/services');
const { passengerModel } = require('../../../src/models');

const { allPassengers } = require('./mocks/passenger.service.mock');

describe('Verificando service pessoa passageira', function () {
  describe('listagem de pessoas passageiras', function () {
    it('retorna a lista completa de pessoas passageiras', async function () {
      // arrange
      sinon.stub(passengerModel, 'findAll').resolves(allPassengers);
      
      // act
      const result = await passengerService.findAll();

      // assert
      expect(result.type).to.be.equal(null);
      expect(result.message).to.deep.equal(allPassengers);
    });
  });
  
   afterEach(function () {
     sinon.restore();
   });
 });
#

Perceba que realizamos primeiro o arranjo, mockando a função passengerModel.findAll. Na sequência invocamos a ação que foi chamar a função passengerService.findAll() e guardar o seu retorno na variável result, e então fazemos a asserção para verificar se este objeto retornado tem o atributo type sendo igual a null e que o atributo message possui valor igual ao array mockado.



# Implementando a busca por id.

A função findById possui a responsabilidade de solicitar a camada Model a busca de uma pessoa passageira pelo seu respectivo id, porém essa função terá outras responsabilidades, tais como, validar as regras de negócios. Quando se busca uma pessoa passageira pelo id, é importante validar duas regras:

> 🔷 O id deve ser um número inteiro e o valor deve ser no mínimo 1.

> 🔷 Deve existir uma pessoa passageira com o id informado.

Para implementar esse comportamento vamos seguir algumas etapas:

Criar um schema através do **JOI**
Como lidaremos com validações, iremos centralizá-las na camada Service em um único arquivo. Para isso, crie uma pasta chamada validations dentro de **src/services/**. Em seguida, crie um arquivo chamado s**chemas.js**.

.
└── src/
    ├── models/
    ├── services/
    │   ├── validations/
    │   │   ├── schemas.js    
    │   └── index.js
    │   └── passenger.service.js
    ├── tests/
    │   ├── integration
    │   └── unit/
    │       └── models/    
    │       └── services/
    │           ├── mocks/
    │           │   └── passenger.service.mock.js
    │           └── passenger.service.test.js
    ├── app.js
    └── server.js

# Neste arquivo, estabeleceremos o formato dos dados (schema) que esperamos receber em uma solicitação de nosso serviço. Após estabelecermos esses critérios, vamos criar as validações de acordo com eles em conjunto com as regras do negócio.

Utilizaremos o módulo Joi para nos auxiliar com as validações durante a escrita, onde o mesmo encontra-se instalado em nosso projeto. Caso deseje instalar o Joi em outros projetos, execute o seguinte comando:

>   npm install -E joi@17.6.0


Em seguida, vamos utilizá-lo para construir o molde da validação do id:

// src/services/validations/schemas.js

const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

module.exports = {
  idSchema,
};


# Aqui usamos o Joi para criar um schema de validação para realizar uma validação qualitativa de uma variável. Em outras palavras, vamos verificar se o valor da variável obedece aos seguintes critérios:

> deve ser um número (number());
> inteiro (integer());
> deve ser no mínimo 1 (min(1));
> não pode ser nulo (required()).

# Validando a partir do schema
  Agora que já definimos nossa validação através de um schema, precisamos estabelecer o padrão de resposta considerando a validação definida. Para isso, crie na pasta validations o arquivo validationsInputValues.js.

  .
└── src/
    ├── models/
    ├── services/
    │   ├── validations/
    │   │   ├── schemas.js    
    │   │   └── validationsInputValues.js
    │   └── passenger.service.js
    ├── tests/
    │   ├── integration
    │   └── unit/
    │       └── services/
    │           ├── mocks/
    │           │   └── passenger.service.mock.js
    │           └── passenger.service.test.js
    ├── app.js
    └── server.js

# É neste arquivo que iremos utilizar os moldes (schemas) criados no arquivo schemas.js e definir o retorno em caso de erro.

// src/services/validations/validationsInputValues.js

const { idSchema } = require('./schemas');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: 'INVALID_VALUE', message: '"id" must be a number' };
  
  return { type: null, message: '' };
};

module.exports = {
  validateId,
};


# Perceba aqui que temos dois fluxos:

  > Se o id não obedecer alguma das regras no schema vai ser retornado o objeto onde o valor de type é igual a INVALID_VALUE e o atributo message será "id" must be a number indicando o erro.

  > Caso não aconteça nenhum erro vamos retornar o objeto com type sendo null e a mensagem sendo uma string vazia para sinalizar que o id é válido.



# Implementar a função findById
  No arquivo src/services/passenger.service.js adicione a função findById e sua respectiva exportação.

  // const passengerModel = require('../models/passenger.model');
const schema = require('./validations/validationsInputValues');

// ...

const findById = async (passengerId) => {
  const error = schema.validateId(passengerId);
  if (error.type) return error;

  const passenger = await passengerModel.findById(passengerId);
  if (!passenger) return { type: 'PASSENGER_NOT_FOUND', message: 'Passenger not found' };

  return { type: null, message: passenger };
};

// module.exports = {
//   findAll,
     findById,
// };


# Essa função começa usando a função schema.validateId para verificar se o id é válido ou não. Caso seja inválido, a função retorna o objeto de erro retornado e encerra a sua execução. Caso contrário, o próximo passo é buscar a pessoa passageira pelo id, usando a camada Model. Porém, se for retornado um valor nulo da camada Model, a função cai no segundo bloco if e retorna o objeto:


{ type: 'PASSENGER_NOT_FOUND', message: 'Passenger not found' };

Se existir uma pessoa passageira com esse id. A função retornará o objeto padronizado, sinalizando que não aconteceu nenhum erro (type: null) e que o atributo message receberá o objeto da pessoa passageira encontrada (passenger)

# { bloco de código } #

Perceba que esse teste é mais robusto, pois contempla três possíveis fluxos:

  > 1. O id recebido é inválido. Nesse caso o serviço retorna um objeto com o atributo type com o valor INVALID_VALUE e o atributo message com valor "id" must be a number

  > 2. O id é válido mas a camada Model retorna um objeto nulo ao chamar a função (simulando a inexistência de uma linha na tabela passengers com esse id). Nesse caso o serviço retorna um objeto possuindo o atributo type com o valor PASSENGER_NOT_FOUND e o atributo message com valor Passenger not found.

  > 3. Existe um passageiro com o id enviado e o serviço retorna um objeto com o atributo type com o valor null e o atributo message com o objeto passageiro encontrado.


📝**Anote aí:** Cada it faz o teste de um desses fluxos, garantindo que testamos todas as possibilidades que essa função pode seguir. Podemos pensar os casos de teste da seguinte forma: Sempre que você tiver um if (ou alguma estrutura condicional) você vai precisar de pelo menos mais um it para testar o caminho quando a condição é verdadeira. Portanto, como temos dois ifs dentro da função findById, logo temos um it para atender cada um desses casos e um outro it para o caminho feliz (um id válido e que existe no banco é passado como parâmetro).


# 🤔 Você pode estar se perguntando: Por que no primeiro teste (it) não foi feito um arranjo para definir um dublê para passengerModel.findBydId()?

Resposta: No cenário onde a função findById recebe um id inválido, a função passengerModel.findById() não será chamada, o que torna desnecessário definir um dublê. Seguiremos com essa premissa sempre que tivermos validações que não exijam operações de leitura ou escrita no banco de dados.

