# Arquitetura MSC.


# Model:
  Essa camada tem como responsabilidade acomodar todo código capaz de acessar dados sejam eles em um banco de dados ou no sistema de arquivos. Dessa forma as demais camadas não necessitam saber de qual banco de dados, por exemplo, os dados estão sendo armazenados ou recuperados, ou seja, se utilizarmos um MySQL, um PostgreSQL ou até mesmo um MongoDB, os códigos acomodados nas camadas Service e Controller não necessitam conhecer esses detalhes;

# Service:
  Essa camada tem como responsabilidade validar as regras de negócio de uma aplicação. Imagine uma API REST que realize o gerenciamento de um almoxarifado e que existe uma regra que diz que deve ser enviado um email para o setor de compras da empresa quando o estoque de um determinado produto estiver abaixo de uma quantidade mínima. Códigos que contêm regras desse tipo serão acomodados na camada Service;

# Controller:
  Essa camada tem como responsabilidade validar os valores recebidos de um cliente da aplicação. Esses valores podem ser, por exemplo, um JSON dentro do corpo da requisição HTTP, parâmetros de requisição, entre outros.