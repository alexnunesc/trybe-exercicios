# Configurando o MySQL no Express.

> Primeiramente, vamos instalar as dependências necessárias para configurarmos um projeto Express capaz de conectar ao MySQL. No diretório raiz do projeto, execute o seguinte comando:

npm i express@4.17.1 mysql2@2.3.3 --save-exact


# A novidade aqui está no módulo (ou drive) mysql2,
  responsável por permitir que uma aplicação Node.js consiga comunicar-se com o MySQL. Comumente chamamos esse tipo de biblioteca (que permite nossa aplicação conversar com banco de dados) de client, o qual possui todo o código necessário para enviarmos comandos SQL para o nosso banco de dados, no caso o MySQL, e recebermos as respostas dos comandos enviados.

> Precisaremos criar em nossa aplicação o arquivo src/db/connection.js, que será responsável por realizar a conexão com o servidor MySQL utilizando a biblioteca mysql2:


// src/db/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  port: 33060,
  user: 'root',
  password: 'root',
  database: 'trybecashdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;


> a biblioteca mysql2 com o recurso de promises. Isso permitirá utilizar o MySQL de forma assíncrona com async/await. Em seguida, criamos uma constante connection que recebe um pool de conexões criado com a função createPool.


Essas conexões serão reutilizadas durante a execução da aplicação conforme a necessidade. Em outras palavras, quando uma operação no banco de dados for necessária nossa aplicação irá:

> Requisitar uma conexão no pool de conexões;

> Utilizar essa conexão para enviar uma operação SQL ao servidor MySQL;

> Devolver a conexão para o pool de conexões ao final da operação com o MySQL;

> Tornar a conexão disponível para ser utilizada em requisições futuras.

Diagrama na imagem.



Agora que o conceito de pool de conexões foi explicado e o arquivo connection.js foi criado, está na hora de configurarmos o express no projeto e testarmos se ele consegue se comunicar com o MySQL. Para isso, vamos criar o arquivo src/app.js com o seguinte conteúdo:



