# Identificando as regras de negócio.
As regras Solicitar viagem e Buscar viagens em aberto compreendem um cenário em que a pessoa passageira solicita uma viagem à API e aguarda por uma pessoa motorista que irá buscar por viagens em aberto. Você já deve estar imaginando várias situações que também poderiam ocorrer nesse mesmo cenário, mas por enquanto vamos focar apenas nesses dois para facilitar o entendimento da camada de Services.

👉 Ao solicitar uma viagem, a pessoa passageira deve enviar as seguintes informações:

  > 1. ID da pessoa passageira;
  > 2. Endereço de partida (startingAddress);
  > 3. Endereço de destino (endingAddress);
  > 4. Endereços de paradas (waypoints) [opcional]
  > 5. Ordem de parada (stopOrder)
  > 6. Endereço de parada (address)

👉 Ao buscar uma viagem em aberto, a pessoa motorista deve buscar travels com status:

> *WAITING_DRIVER*

Em posse dessas informações, vamos explorar um pouco mais da camada de Services ! 😁