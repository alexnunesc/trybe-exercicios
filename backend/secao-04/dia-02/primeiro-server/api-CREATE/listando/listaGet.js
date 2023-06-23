// src/app.js
const express = require('express');

/* 
  Listando times por meio do método GET
  Em nossa API, os dados serão armazenados em um array de objetos. Para isso, ainda dentro do arquivo app.js, crie um array contendo as informações abaixo:
 */
const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];


const app = express();

app.get('./', (req, res) => res.status(200).json({message: 'Olá, Mundo!'}));

/*
  Agora, você vai criar um endpoint do tipo GET com a rota /teams, como mostra o trecho de código abaixo:
*/
app.get('/teams', (req, res) => res.status(200).json({ teams }));

module.exports = app;