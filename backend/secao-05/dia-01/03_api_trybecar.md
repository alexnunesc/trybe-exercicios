# O projeto trybecar possui a seguinte estrutura de arquivos e diretórios:
.
├── src/
│   ├── app.js
│   ├── connection.js
│   └── server.js
├── tests/
│   ├── integration/
│   │   └── -
│   └── -unit/
│       └── -
├── .env-example
├── docker-compose.yml
├── script.sql
├── thunder-trybecar.json
└── package.json


# POST /passengers/:passengerId/request/travel:
  Endpoint no qual uma pessoa passageira deseja iniciar uma nova corrida. É passado como parâmetro de rota o :passengerId que é o id da pessoa passageira e um JSON no corpo da requisição similar ao seguinte:

{
  "startingAddress": "Rua AAAA",
  "endingAddress": "Rua BBBB",
  "waypoints": [
    {
      "address": "Ponto 01",
      "stopOrder": 1
    },
    {
      "address": "Ponto 02",
      "stopOrder": 2
    },
    {
      "address": "Ponto 03",
      "stopOrder": 3
    }
  ]
}


# GET /drivers/open/travels:
  Endpoint no qual uma pessoa motorista irá visualizar todas as viagens em aberto, ou seja, que foram criadas por pessoas passageiras mas que não possuem nenhuma pessoa motorista vinculada. O endpoint retorna um JSON similar ao seguinte:


[
  {
    "id": 1,
    "passengerId": 3,
    "driverId": null,
    "travelStatusId": 1,
    "startingAddress": "Rua AAAA",
    "endingAddress": "Rua BBBB",
    "requestDate": "2022-08-22T23:34:40.000Z"
  },
  {
    "id": 2,
    "passengerId": 3,
    "driverId": null,
    "travelStatusId": 1,
    "startingAddress": "Rua XYZ",
    "endingAddress": "Rua IJK",
    "requestDate": "2022-08-22T23:35:04.000Z"
  }
]



**PUT** /drivers/:driverId/travels/:travelId/assign: Endpoint no qual uma pessoa motorista irá se vincular a uma viagem em aberta. É passado como parâmetros de rota o :driverId que é o id da pessoa motorista e o :travelsId que é o id de uma viagem que esteja em aberto.

**PUT** /drivers/:driverId/travels/:travelId/start: Endpoint no qual uma pessoa motorista irá iniciar uma viagem. É passado como parâmetros de rota o :driverId que é o id da pessoa motorista e o :travelsId que é o id de uma viagem que esteja vinculada ao motorista.

**PUT** /drivers/:driverId/travels/:travelId/end: Endpoint no qual uma pessoa motorista irá finalizar uma viagem em andamento. É passado como parâmetros de rota o :driverId que é o id da pessoa motorista e o :travelsId que é o id de uma viagem que esteja em andamento e vinculada a um motorista.