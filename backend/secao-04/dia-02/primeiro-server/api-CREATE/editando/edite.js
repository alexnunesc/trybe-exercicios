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

/* 
  A princípio, vamos entender que o app.use() serve para “instalar” algumas coisas que queremos em nossas APIs. Mais adiante, nesta mesma seção, você vai ver todo o poder desta função, mas por ora, saiba que ela serve para configurar mais coisas em nossa API, ok?

  Dentro do app.use(), passamos uma outra função é ela que habilita a possibilidade de recebermos dados pelo corpo (body) de nossa requisição. Após inserir essa linha em seu código, volte no Thunder Client e refaça a requisição tentando inserir o time do Flamengo no array (não esqueça de trocar o método para POST novamente para isso, hein? 😉).
 */
app.use(express.json());

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

// editando times.
app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    res.status(404).json({ message: 'Team not found' });
  }

  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ updateTeam });
});


module.exports = app;
