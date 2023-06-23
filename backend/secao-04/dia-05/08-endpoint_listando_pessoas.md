# Criando o endpoint de listagem de pessoas

Basicamente, trabalharemos apenas nos arquivos src/db/peopleDB.js, src/routes/peopleRoutes.js e tests/integration/people.test.js, graças à organização de arquivos e diretórios utilizada!


Assim como foi implementada a inserção de uma pessoa no banco de dados, agora vamos implementar dois novos endpoints:

um que lista todas as pessoas cadastradas no banco de dados 

e um segundo que lista uma pessoa do banco de dados a partir do seu id.



# Aqui, criamos a constante peopleList com um array de pessoas. Em seguida, adicionamos dois casos de testes:

> Um stub para a função connection.execute(), que retornará um array que contém outro array de pessoas armazenadas em peopleList e um caso de teste responsável por listar todas as pessoas do banco de dados a partir do endpoint GET /people, no qual é esperado retornar uma lista de pessoas no formato JSON;

> Outro stub para a função connection.execute(), que retornará um array que contém outro array com a primeira pessoa de peopleList e outro caso de teste para listar uma pessoa a partir do seu id através do endpoint GET /people/:id, onde :id é um parâmetro de rota que indica o id da pessoa no banco de dados.

**⚠️ Atenção:** o fato de estarmos colocando um array dentro de um array ou um objeto dentro de um array nos testes de integração, é para garantir que o retorno do stub tenha o mesmo formato do retorno das funções do mysql2. 😉




# Aqui **Explicação no arquivo 8.1**




# Vamos adicionar a definição das funções findAll e findById no arquivo src/db/peopleDB.js com o código necessário para realizar as consultas no banco de dados:

// const conn = require('./connection');
// ...

const findAll = () => conn.execute('SELECT * FROM people');

const findById = (id) => conn.execute('SELECT * FROM people WHERE id = ?', [id]);

// module.exports = {
//   insert,
  findAll,
  findById,
// };


# Foram adicionadas as constantes findAll e findById onde:

  > A função findAll realiza uma consulta no banco de dados, que retorna todas as pessoas cadastradas;

  > A função findById realiza uma consulta no banco de dados, que retorna uma pessoa tendo como critério o valor do seu id.

  Ambas as funções executam Prepared Statements no banco de dados (de forma similar ao insert que escrevemos antes). Nesse ponto, você pode executar os testes com o comando npm test



