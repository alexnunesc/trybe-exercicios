# Escrevendo nosso primeiro teste.

Agora chegou a hora de colocarmos a mão na massa e escrevermos as funcionalidades da nossa API! Este é um bom momento para exercitarmos a prática do TDD ou Desenvolvimento Guiado por Testes.


> Vamos instalar as dependências necessárias para escrevermos nossos testes de integração. Então, execute o seguinte comando para realizar a instalação das dependências *mocha, chai, sinon e chai-http* como dependências de desenvolvimento:

npm i mocha@10.0.0 chai@4.3.6 sinon@14.0.0 chai-http@4.3.0 -D


# Que tal começarmos criando uma pessoa no banco de dados? Então antes de escrever o teste e, consequentemente, nosso código, vamos entender o fluxo de cadastro de pessoas que iremos implementar.

  O fluxo se dará da seguinte maneira:

  > 1 - Primeiramente receberemos uma requisição para o endpoint POST /people. Essa requisição terá no seu corpo um JSON com os dados a serem cadastrados no banco de dados similar ao seguinte:

  {
    "firstName": "Luke",
    "lastName": "Skywalker",
    "email": "luke.skywalker@trybe.com",
    "phone": "851 678 4453"
  }

  > 2 - Em seguida, o express passará o JSON recebido na requisição para um componente de software (o qual iremos desenvolver 😉) que irá enviar uma declaração SQL INSERT para o MySQL;

  > 3 - Após o envio do comando SQL inserção da pessoa no MySQL, receberemos uma resposta do MySQL sobre a operação;

  > 4 - Enviamos a resposta para a requisição com o código de estado 201 se a operação ocorreu com sucesso, ou o código de estado 500 caso algum erro ocorrer durante o processo de cadastro da pessoa no MySQL.


  Diagrama na imagem.

  > 👀 De olho na dica: lembre-se que é muito mais fácil escrevermos código quando o problema a ser resolvido está nítido.

#
Nesse ponto vamos criar o subdiretório tests/integration, que conterá os nossos testes de integração. 
> mkdir -p tests/integration

# Assim, teremos a seguinte estrutura de arquivos e diretórios no projeto:
.
└── trybecash-api/
    ├── src/
    │   ├── db/
    │   │   └── connection.js
    │   ├── app.js
    │   └── server.js
    ├── tests/
    │   └── integration/
    │       └── _
    ├── docker-compose.yaml
    ├── Dockerfile
    ├── package.json
    └── trybecash_script.sql

 > Uma boa prática é escrever esses testes em diretórios separados e, por esta razão, estamos criando o subdiretório tests/integration. Caso estivéssemos trabalhando também com testes de unidade, eles seriam escritos no subdiretório tests/unit.


Vamos criar o arquivo tests/integration/people.test.js com o seguinte conteúdo:

## 

Para podermos executar o nosso teste (e vermos ele falhar 😛), temos que alterar a chave test dos scripts do package.json:

"scripts": {
  ...
  "test": "mocha tests/**/*$NAME*.test.js --exit"
},


