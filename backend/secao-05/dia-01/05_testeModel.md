# Etapa 1 - Preparar mock.
  Criaremos o arquivo tests/unit/models/mocks/passenger.model.mock.js que ficará responsável por definir um array que usaremos para ser a resposta mockada da função connection.execute.

  <...............codigo..............>

# Etapa 2 - Implementar o teste da função passengerModel.findAll
  Crie o arquivo tests/unit/models/passenger.model.test.js com o seguinte conteúdo.

  <...............codigo..............>

##

Inicialmente, foram importados os módulos chai e sinon, necessários para a escrita dos testes de unidade. Em seguida, foram importados os objetos connection e passengerModel (note que o arquivo já foi importado através do barrel que definimos anteriormente), além dos nossos dados de mock através da variável passengers.


Foi declarado um describe geral que irá agrupar todos os nossos casos de teste. No momento temos apenas um único caso de teste, ou seja, apenas um it que vai testar a listagem das pessoas passageiras presentes no banco de dados. E além disso, definimos o afterEach para executar sinon.restore() que reseta todos os dublês feitos por meio da função sinon.stub() que iremos colocar dentro de cada caso de teste.


Veja que dentro desse teste (it) existem comentários que sugerem como o teste deve ser composto. Essa estrutura vem de um padrão consagrado para a escrita de testes, o padrão Triple A e que pode ser usado para testes unitários em qualquer camada. Esse padrão define etapas que devem ser seguidas em cada teste:

  > Arrange (arranjo): considera a configuração de tudo que é necessário para a execução do teste, geralmente é aqui que são definidos os dublês para funções chamadas dentro da função que será testada no caso de uso.

  > Act (ação): define a execução do teste por meio da chamada de uma função sob teste;

  > Assert (asserção): estabelece a verificação do resultado do teste, resultando na falha ou sucesso do mesmo.


# O arranjo é feito na primeira linha dentro do it e serve para definir que estamos usando um dublê para a função connection.execute e que nesse cenário o seu retorno será um array com a lista de pessoas passageiras ([passengers]). Fizemos isso, pois como comentamos um pouco mais acima, essa é a forma que o módulo mysql2 retorna a resposta do banco ao fazer uma consulta do tipo SELECT.

📝A**note aí:** O dublê (no nosso caso sinon.stub().resolves()) de uma função deve sempre emular o retorno original de uma função.


O próximo passo é definir a ação, que nesse caso é chamar a função passengerModel.findAll() e guardar seu retorno na variável result.

Na última linha do it, fazemos a asserção para comparar se o valor da variável result é igual ao valor da variável passengers. Perceba que usamos o matcher to.be.deep.equal, pois nesse caso estamos comparando dois arrays (result e passengers).

.
├── src/
│   ├── models/
│   │   ├── connection.js
│   │   ├── index.js
│   │   └── passenger.model.js
│   ├── app.js
│   └── server.js
├── tests/
│   ├── integration
│   └── unit/
│       └── models/
│           ├── mocks/
│           │   └── passenger.model.mock.js
│           └── passenger.model.test.js
├── env-example
├── docker-compose.yml
├── package.json
├── script.sql
└── thunder-trybecar.json


# Implementando a função para Buscar por id
  Continuando a implementação do componente da camada Model, o nosso próximo passo é implementar uma função que receba um id como parâmetro e consiga realizar uma busca na tabela passengers por esse id.

  Adicione a função findById no arquivo src/models/passenger.model.js.

  // ...

  const findById = async (passengerId) => {
    const [[passenger]] = await connection.execute(
      'SELECT * FROM passengers WHERE id = ?',
      [passengerId],
    );
    return camelize(passenger);
  };


  // module.exports = {
  //   findAll,
      findById,
  // };


  Note que estamos desestruturando o retorno da função connection.execute em dois níveis (const [[passenger]]) sendo que o primeiro nível retorna o array com as linhas encontradas. Porém, como fazemos uma busca por id, o retorno dessa consulta sempre retornará uma das duas opções abaixo:

  Um array com apenas um elemento (caso exista algum registro com o id informado).
  Ou um array vazio. (caso não exista nenhum registro com o id informado);
  Como queremos mostrar apenas um objeto, pegaremos apenas esse primeiro elemento do array. Assim como na função findAll, aplicamos o camelize para transformar o objeto do padrão snake_case para camelCase

# Implementando o teste
  No arquivo tests/unit/models/passenger.model.test.js adicione um novo bloco it para fazer o teste da função passengerModel.findById:


  Esse teste é similar ao teste do findAll, com a diferença que agora o dublê retornará um array apenas com o primeiro item do array passengers que vem do nosso arquivo de mock, por isso que é passado o parâmetro [[passengers[0]]] para a função resolves.




























