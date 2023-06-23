# Configurando o Sequelize


# 1️⃣ Instalação do Sequelize

➡️ Para começar a usar o Sequelize, é preciso iniciar uma aplicação Node.js e instalar essa biblioteca ORM utilizando os seguintes comandos:


mkdir app-with-sequelize && cd app-with-sequelize

> npm init -y

> npm install -E sequelize@6.3.4


➡️ Crie o arquivo .env na raiz do projeto e preencha as variáveis com as suas credenciais para acessar o MySQL:

> MYSQL_USER=root
> MYSQL_PASSWORD=senha_mysql
> MYSQL_DATABASE=orm_example
> MYSQL_HOST=localhost

Note que a variável MYSQL_PASSWORD está com o valor senha_mysql, mas provavelmente a senha de acesso ao seu MySQL é outra. Troque o valor dessa variável para que seja o mesmo que você utiliza para acessar o MySQL com o usuário root.



➡️ O próximo passo para utilizar o Sequelize é instalar um CLI, que é responsável por gerar e executar as operações. Além de instalar o CLI, também precisamos instalar o mysql2, uma dependência necessária para usarmos o MySQL com o Sequelize. Na pasta raiz da aplicação, rode os comandos:

> npm install -D -E sequelize-cli@6.2.0

> npm install -E mysql2@2.1.0

> mkdir src


# 2️⃣ Inicialização do Sequelize

➡️ Depois que instalamos o CLI, precisamos iniciar um projeto com o Sequelize. Para isso, vamos executar o seguinte comando dentro da pasta src:


> cd src

> npx sequelize-cli init

Esse comando vai criar as seguintes pastas:

> config: contém um arquivo de configuração, com orientações para o CLI se conectar com o nosso banco de dados;

> models: contém todos os modelos da nossa aplicação;

> migrations: contém todos os arquivos de migração da nossa aplicação;

> seeders: contém todos os arquivos de “seeds” (sementes que são usadas para popular o banco).


# ➡️ O arquivo .sequelizerc

O arquivo .sequelizerc é um arquivo de configuração do Sequelize. Esse arquivo é responsável por configurar o caminho das pastas migrations, models, seeders e config que o Sequelize irá procurar ao executar um comando.

Por padrão, ao rodar um comando Sequelize os arquivos dentro das pastas de migrations, models, seeders e config seriam procurados somente na camada em que estivéssemos executando o comando. No nosso caso, como estamos utilizando a pasta src para abrigar os arquivos do Sequelize, caso executássemos um comando diretamente na raiz da aplicação, iríamos nos deparar com um erro.

Podemos entrar na pasta src e executar estes comandos, como fizemos anteriormente, pois assim teremos êxito. Mas caso fosse uma aplicação maior, com mais camadas, aumentaríamos a complexidade de subir e configurar a aplicação.

É neste momento que entra em cena o arquivo .sequelizerc. Dessa forma, podemos construir um código com uma arquitetura mais organizada. ⭐


# ➡️ Agora crie um arquivo com o nome .sequelizerc com o seguinte conteúdo:

// app-with-sequelize/.sequelizerc

const path = require('path');

module.exports = {
  'config': path.resolve('src', 'config', 'config.js'),
  'models-path': path.resolve('src', 'models'),
  'seeders-path': path.resolve('src', 'seeders'),
  'migrations-path': path.resolve('src', 'migrations'),
};

**⚠️ O arquivo .sequelizerc é um arquivo de configuração do Sequelize e deve ser criado na pasta raiz.**


# Vamos entender melhor as informações deste arquivo:

1. path:
  > é um módulo interno do Node que nos fornece alguns utilitários para trabalharmos com caminhos de arquivos e diretórios;

2. config:
  > é um caminho para o arquivo de configuração;

3. models-path:
  > é um caminho para o diretório de models;

4. seeders-path:
  > é um caminho para o diretório de seeders;

5. migrations-path:
  > é um caminho para o diretório de migrations.

# 3️⃣ Conexão com o banco de dados

> ➡️ Agora precisamos configurar o arquivo config.json gerado pelo init do CLI. Ao alterar esse arquivo, estamos configurando o acesso da aplicação ao nosso banco de dados.

> **➡️ Note que o arquivo config.json, localizado no diretório ./src/config, contém informações sensíveis, como credenciais de acesso ao banco de dados, expostas no nosso código. Uma boa prática é substituir os valores por variáveis de ambiente, não expondo assim, informações sensíveis relacionados à configuração geral da aplicação. Então, vamos fazer isso do jeito certo!**

> ➡️ Mudaremos o nome do nosso arquivo config.json para config.js

> ➡️ Retiraremos todo o conteúdo de config.js e substituiremos pelo código abaixo:

// src/config/config.js

const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};

# ➡️ Vamos entender melhor as informações que estamos passando:

> username: usuário de acesso ao banco de dados;

> password: senha de acesso ao banco de dados;

> database: nome do banco de dados no qual queremos conectar;

> host: servidor no qual estamos conectando - por ser local, utilizamos o endereço IP 127.0.0.1, ou seu alias localhost;

> dialect: informa qual a biblioteca que o sequelize utiliza para se conectar ao banco de dados estamos utilizando. Nesse caso, mysql.

# ➡️ Modifique o arquivo src/models/index.js para apontar para o arquivo config.js:

Para fazer isso, busque neste arquivo, a seguinte linha de código:

> const config = require(__dirname + '/../config/config.json')[env]; // configuração antiga

Altere esta linha para ficar assim:


/* Praticamente é só mudar a extensão de .json para .js! */
const config = require(__dirname + '/../config/config.js')[env]; // configuração nova


# ➡️ Antes de rodar os comandos Sequelize, precisamos garantir que temos uma instância do MySQL rodando.

Caso você já tenha um container com uma imagem do MySQL, pode utilizá-lo ou usar o comando abaixo no terminal para criar e rodar um:

⚠️ Garanta que a senha do banco esteja de acordo com a presente no .env. 😉

> docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=senha_mysql -d -p 3306:3306 mysql:8.0.29


# 4️⃣ Criação do banco de dados usando o CLI do Sequelize

➡️Agora que iniciamos uma aplicação do Sequelize e a nossa instância do MySQL está rodando, podemos criar o banco de dados orm_example (que nomeamos no .env) na raiz do projeto:

> env $(cat .env) npx sequelize db:create


**NOTA**: o comando env $(cat .env) irá realizar a leitura das variáveis do arquivo .env e repassá-las para o próximo comando, disponibilizando assim os valores das variáveis de ambiente para o seu código através do process.env.NOME_DA_VARIAVEL.

**De olho na dica 👀:** O .sequelizerc procura os arquivos de configuração do Sequelize no diretório src. Por isso, é importante que você esteja na raiz do projeto quando for rodar os comandos do Sequelize.

No seu terminal, o Sequelize vai avisar que o database foi criado. Você pode verificar isso no próprio MySQL utilizando os comandos abaixo:


# ➡️ Execute o container criado anteriormente com o comando:

> docker exec -it container-mysql bash

➡️ Entre no terminal do mysql com o comando:

> mysql -u root -p

➡️ Digite a sua senha de acesso ao mysql e em seguida rode o comando abaixo:

> show databases;



















https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/0da9bd44-abf6-43d6-96b9-9614274e6c36/lesson/ed46dd6e-bbb3-432d-92a4-b272e42437a9

