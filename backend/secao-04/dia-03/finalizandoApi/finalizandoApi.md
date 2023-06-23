# Finalizando a API.

  Agora que já conhecemos as metodologias e ferramentas necessárias para o desenvolvimento da nossa API, iremos dar continuidade ao desenvolvimento, observando os demais contratos da nossa API.

  > Mas primeiro, vamos recapitular quais são eles:

  ## 👉 GET /chocolates/:id

  > Objetivo: Buscar um chocolate específico pelo ID.

  > Código HTTP: 200 - OK;

  > Body (exemplo):

    {
      "id": 4,
      "name": "Mounds",
      "brandId": 3
    }


  ## 👉 GET /chocolates/brand/:brandId

  > Objetivo: Buscar uma lista de chocolates pelo ID (brandId) da marca.

  > Código HTTP: 200 - OK;

  > Body (exemplo):

  [
    {
        "id": 1,
        "name": "Mint Intense",
        "brandId": 1
    },
    {
        "id": 2,
        "name": "White Coconut",
        "brandId": 1
    }
  ]


## Assim como antes, começaremos pela definição dos cenários de teste para cada um dos contratos:


## Seguindo ao ciclo do TDD, iremos executar nossos testes já presumindo a falha dos novos cenários. Para isso, execute o comando npm test.


## Primeiro, iremos construir as rotas para cada cenário de teste:

## Em seguida, iremos definir as funções que irão filtrar as respostas conforme esperado para cada uma das rotas:



