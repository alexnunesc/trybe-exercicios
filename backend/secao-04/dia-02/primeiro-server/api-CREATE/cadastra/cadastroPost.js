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

/*
  Cadastrando times por meio do método POST
  Para cadastrar um novo time é muito simples, porém agora queremos receber os dados no corpo da requisição. Para fazer isso, crie um endpoint do tipo POST com a rota /teams, como mostra o trecho de código abaixo:
*/
app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});
/*
  Os dados serão enviados pelo corpo da requisição e temos acesso a eles por meio do req.body. Criamos uma nova constante chamada newTeam e aplicamos a desestruturação no req.body. Após isso, armazenamos o dado em nosso array de times e respondemos a requisição, agora com o status 201.

  Esse status 201 que dizer created, ele ajuda na semântica da resposta.
*/

module.exports = app;
