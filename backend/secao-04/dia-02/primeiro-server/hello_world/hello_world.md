# ‘Hello, world!’ na nossa API.

  // src/app.js

  // const express = require('express');

  // const app = express();

  > app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

  // module.exports = app;

  # **Comandos**.

  > GET.
    Dentro da constante app, temos vários recursos, um deles é a função get. Usamos essa função toda vez que queremos pedir algum dado.


### Observe que a função get recebe dois parâmetros:

  > 1° parâmetro '/':
  Aqui é rota que tanto falamos.
  Podem ser **/login, /produtos, /pessoas**, ou qualquer outra coisa! Neste caso, colocamos apenas /.
  **Chamamos a rota / de rota raiz**;


  > 2° parâmetro (req, res) => {}:
  
  Este espera uma função de callback. Esta função pode receber de 2 a 4 parâmetros, sendo eles:

  > req:
    Essa é a Request (ou requisição), é por meio dela que recebemos os dados (envio por query, params e body);
  > res:
    Essa é a Response (ou resposta), é por meio dela que respondemos o que nos é solicitado;
  > next:
    Não vamos trabalhar com ele nesta aula;
  > err:
    Não vamos trabalhar com ele nesta aula.


# Essa função é responsável por responder nossas requisições.
  **Então, observe o trecho** 
  > res.status(200).json({ message: 'Olá Mundo!' }) e reflita sobre o que cada coisa deve significar.

  #### <res> como comentado, **responde as requisições**. Estas requisições podem ser **respondidas de vários jeitos**, tais como:

  > Formato text/JSON,
    como o caso do res.json({ message: 'Olá Mundo!' });
  > Formato text/HTML,
    como o caso do res.send('<h1>Olá Mundo!</h1>');
  > Redirecionamentos,
    como o caso do res.redirect('https://www.betrybe.com/');
  > Páginas completas ou partes dela,
    como o caso do res.render('index.html');
  > Finalizando,
    como o caso do res.end();


# Status code.
  doc:
  > https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

  ### Os status code mais conhecidos são:

  > 200:
    Que quer dizer ‘ok’;
  > 500:
   Que quer dizer erro no servidor;
  > 404:
   Este muitas pessoas já viram, ele quer dizer que a página não foi encontrada;

  **De olho na dica 👀:**
    associe os status a constantes nomeadas, desse modo você facilita a leitura!
  >   const OK = 200
  >   const INTERNAL_SERVER_ERROR = 500
  >   const NOT_FOUND = 404



