# Refatorando - Parte 1

Vamos começar o desacoplamento do código pela regra de negócio Solicitar viagem que ficará junto com as funções do CRUD no arquivo src/services/passenger.service.js. Para isso, vamos definir a função que será responsável por solicitar uma viagem (travel):


........

Veja que adicionamos as funções saveWaypoints e passengerExists no nosso service. Essas funções também fazem parte da nossa regra de negócio e, portanto, devem estar situadas nesta camada. Além disso, exportamos apenas a função requestTravel, que destas três novas funções, será a única acessível da camada Service. Essa estratégia garante, por exemplo, que waypoints não sejam salvos sem que uma travel seja requisitada, obedecendo assim a regra de negócio.

📝**Anote aí**: sempre que isolamos nossas regras de negócio na camada Service, precisamos estabelecer contratos com camadas que irão acessar esses serviços. As demais camadas não devem ter visibilidade de como a camada Service realiza suas rotinas, mas devem saber exatamente qual saída devem esperar em caso de sucesso ou falha na execução de um serviço.


# Escrevendo os testes para função requestTravel

Vamos implementar alguns testes para a função requestTravel.

No arquivo tests/unit/passenger.service.test.js, vamos adicionar um novo bloco describe contemplando os seguintes cenários de teste para função requestTravel:


  describe('solicitação de viagem', function () {
    it('sem pontos de parada é realizada com sucesso', async function () {
    });

    it('com pontos de parada é realizada com sucesso', async function () {
    });

    it('com mesmo local de origem e destino é rejeitada', async function () {
    });
  });

# No código acima, estamos definindo três cenários de teste que contemplam possíveis situações durante a requisição de uma travel:

  > Requisição de viagem sem pontos de paradas; (Cenário feliz 😊)

  > Requisição de viagem com pontos de paradas; (Cenário feliz 😊)

  > Requisição de viagem com destino e origem idênticos. (Cenário de erro ❌)

# Antes de escrever o teste de cada cenário, vamos definir um dublê de um objeto para a solicitação de uma viagem. Para que o teste da função requestTravel aconteça da forma correta, vamos representar um objeto com os dados de uma viagem no arquivo passenger.service.mock.js.


const WAITING_DRIVER = 1;

const travelResponse = ({
  id: 1,
  passengerId: 1,
  driverId: null,
  travelStatusId: WAITING_DRIVER,
  startingAddress: 'Rua X',
  endingAddress: 'Rua Y',
  requestDate: '2022-08-24T03:04:04.374Z'
});













