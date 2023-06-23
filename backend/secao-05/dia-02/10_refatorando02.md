# Refatorando a busca por viagens em aberto.

Sendo assim, vamos mover o acesso à camada de Model, juntamente com a regra de negócio, para o arquivo driver.service.js dentro da pasta src/services.

#
  const { travelModel } = require('../models');

  const WAITING_DRIVER = 1;

  const getWaitingDriverTravels = async () => {
    const travels = await travelModel.findByTravelStatusId(WAITING_DRIVER);
    return { type: null, message: travels }; 
  };

  module.exports = {
    getWaitingDriverTravels,
  };
#

No exemplo acima, a nossa regra de negócio considera o status das travels para retornar à pessoa motorista todas as travels que estão em aberto, ou seja, aguardando por uma pessoa motorista aceitar a sua solicitação.

# Vamos alterar o barrel para adicionar o novo componente da camada Services.

#
  // src/services/index.js

  // ...
  const driverService = require('./driver.service');

  // module.exports = {
  // ...
    driverService,
  // };
#

# Sua estrutura de diretórios deve estar assim agora:

.
└── src/
    ├── models/
    ├── services/
    │   ├── validations/
    │   │   ├── schemas.js
    │   │   └── validationsInputValues
    │   ├── driver.service.js
    │   ├── index.js
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


# Atualizando o arquivo app.js.

> Agora que já conseguimos replicar as regras de negócio presentes nas rotas de solicitar viagem e buscar viagens em aberto, vamos voltar ao arquivo src/app.js e modificar as nossas rotas para utilizar as funções da camada Service. Além disso, veremos como a importação dos serviços passengerService e driverService ficou muito mais simples após a exportação desses serviços acontecer usando o mecanismo de barrel no arquivo src/services/index.js.



