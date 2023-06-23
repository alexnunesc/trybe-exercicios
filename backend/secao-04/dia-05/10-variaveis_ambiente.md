# Variáveis de Ambiente.

Devemos separar os dados de configuração (no nosso caso do servidor MySQL) da nossa aplicação Node.js e express. Para alcançar esse objetivo vamos utilizar um recurso chamado variável de ambiente. 😍

> Uma *variável de ambiente é um recurso disponível nos* **sistemas operacionais** *que permite criar uma variável no formato* <NOME_DA_VARIÁVEL=VALOR>, *onde* <NOME_DA_VARIÁVEL> *é o nome da variável de ambiente*, e <VALOR> *se refere a um valor que será vinculado à variável*. Toda vez que solicitarmos ao sistema operacional o valor de uma variável de ambiente, forneceemos a ele uma **NOME_DA_VARIÁVEL** e ele retorna o **VALOR** associado a esta chave, se ela estiver definida.



# O Node.js possui a capacidade de ler variáveis de ambiente definidas em um sistema operacional. Vamos ver um exemplo simples! Adicione a seguinte linha:

  // server.js

  // const app = require('./app');
  // ...

  // app.listen(port, async () => {
    // console.log(`API TrybeCash está sendo executada na porta ${port}`);
    console.log(`Valor da variável de ambiente $USER: ${process.env.USER}`);
  // });

  > Note que nossa aplicação conseguiu ler o conteúdo de uma variável de ambiente do sistema operacional através do objeto process.env.NOME_DA_VARIÁVEL! 😍

  Como você já deve estar pensando nesse momento, a solução para nosso dilema será criar variáveis de ambiente para as configurações de acesso ao servidor de banco de dados e ler os valores através do objeto *process.env*.


# Primeiramente, vamos criar o arquivo para armazenar as variáveis e seus respectivos valores. *Na raiz do nosso projeto crie o arquivo .env* com o seguinte conteúdo:

  MYSQL_HOST=localhost
  MYSQL_PORT=33060
  MYSQL_USER=root
  MYSQL_PASSWORD=root
  MYSQL_DATABASE_NAME=trybecashdb
  MYSQL_WAIT_FOR_CONNECTIONS=true
  MYSQL_CONNECTION_LIMIT=10
  MYSQL_QUEUE_LIMIT=0



# A vantagem de utilizar um arquivo para armazenar as variáveis de ambiente é abstrair a criação das variáveis de ambiente diretamente no sistema operacional, pois a forma de criar e disponibilizar variáveis de ambientes, varia de um sistema operacional para outro!

  Agora **é necessário extrair o conteúdo do arquivo .env e adicioná-lo ao ambiente do sistema operacional**. Em sistema baseados em UNIX podemos fazer isto através do **comando env $(cat .env)**. Desta forma é possível adicionar temporariamente as variáveis contidas no arquivo .env às variáveis do sistema operacional.


# Agora vamos refatorar o **arquivo src/db/connection.js** para utilizar os valores definidos nas variáveis de ambiente:

  // src/db/connection.js
  // ...
  // const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_NAME,
    waitForConnections: process.env.MYSQL_WAIT_FOR_CONNECTIONS,
    connectionLimit: process.env.MYSQL_CONNECTION_LIMIT,
    queueLimit: process.env.MYSQL_QUEUE_LIMIT,
  // });

  // module.exports = connection;


## **Importante**
  > Ao *executarmos um comando localmente*, é só **colocarmos o comando *env $(cat .env)* antes do comando que irá usar as variáveis de ambiente**. Por exemplo, para iniciar a aplicação com npm start:

env $(cat .env) npm start




**Atenção:** toda vez que uma variável de ambiente é alterada, é necessário parar e reiniciar a aplicação, mesmo quando se utiliza o nodemon, pois estas variáveis de ambiente, por serem temporárias, são “carregadas” uma única vez no momento em que a aplicação é executada.




# Contudo, os dados necessários para a conexão do banco de dados estão sendo lidos do arquivo .env. 😎

> Mas nossa missão não terminou: se enviarmos o arquivo .env para nosso repositório GitHub, ainda teremos o mesmo problema com os dados de configuração ficando públicos.

Para solucionar esse problema, basta colocar o arquivo .env na lista de arquivos ignorados pelo git, o arquivo .gitignore. Assim, vamos criar o arquivo .gitignore (caso o mesmo ainda não esteja criado) e adicionar uma nova linha com o seguinte conteúdo:
#
  node_modules
  .env
#


# Uma boa prática é criar um arquivo .env de exemplo. Assim, quando outras pessoas realizarem um clone do seu repositório, elas terão um exemplo das variáveis de ambientes que devem estar no arquivo .env e podem preencher com os valores pertinentes ao seu ambiente de desenvolvimento.

> Por exemplo, vamos criar o arquivo .env-example com o seguinte conteúdo:

  MYSQL_HOST=<ENDEREÇO DO BANCO>
  MYSQL_PORT=<PORTA DE CONEXÃO DO BANCO>
  MYSQL_USER=<NOME DE USUÁRIO DO BANCO>
  MYSQL_PASSWORD=<SENHA DE ACESSO DO BANCO>
  MYSQL_DATABASE_NAME=<NOME DO BANCO DE DADOS>
  MYSQL_WAIT_FOR_CONNECTIONS=true
  MYSQL_CONNECTION_LIMIT=10
  MYSQL_QUEUE_LIMIT=0
















