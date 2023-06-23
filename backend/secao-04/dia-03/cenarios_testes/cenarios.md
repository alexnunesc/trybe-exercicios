# Definindo os cenários de teste.

A API Cacau Trybe será composta por três endpoints, representados pelos seguintes contratos:

## 👉 GET /chocolates

> Objetivo: Retornar uma lista com todos os chocolates cadastrados.

> Código HTTP: 200 - OK;

> Body (exemplo):


  [
    { "id": 1, "name": "Mint Intense", "brandId": 1 },
    { "id": 2, "name": "White Coconut", "brandId": 1 },
    { "id": 3, "name": "Mon Chéri", "brandId": 2 },
    { "id": 4, "name": "Mounds", "brandId": 3 }
  ]

# 👉 GET /chocolates/:id

> Objetivo: Buscar um chocolate específico pelo ID.

> Código HTTP: 200 - OK;

> Body (exemplo):

  [
    {
      "id": 4,
      "name": "Mounds",
      "brandId": 3
    }
  ]


# 👉 GET /chocolates/brand/:brandId

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

