const express = require('express');

const app = express();

// 2. Adicione um middleware criado pela comunidade que tem como função interpretar conteúdo JSON.
app.use(express.json());

const validaName = (req, _res, next) => {
  const requiredProperties = ['nome'];

  if (!(requiredProperties in req.body)) {
    return next({ message: "O campo name é obrigatório", status: 400 });
  }
  if (req.body[requiredProperties[0]].length < 4) {
    return next({ message: "O campo name deve ter pelo menos 4 caracteres", status: 400 });
  }
  return next();

  // else {
  //   return res.status(400).json({ message: "O campo name é obrigatório" });
  // }

};

const validaPrice = (req, _res, next) => {
  const requiredProperties = ['price'];

  if (!(requiredProperties in req.body)) {
    return next({ message: "O campo price é obrigatório", status: 400 });
  }
  if (!(req.body.price >= 0) ) {
    return next({ message: "O campo price deve ser um número maior ou igual a zero", status: 400 });
  }
  return next();

};

// 6. Crie um middleware de validação para a chave description que possui as chaves createdAt, rating e difficulty. Ela deve:

const validDescription = (req, _res, next) => {
  const requiredProperties = ['description', 'createdAt', 'rating', 'difficulty'];

  if (!(requiredProperties[0] in req.body)) {
    return next({ "message": "O campo description é obrigatório", status: 400 });
  }
  if (!(requiredProperties[1] in req.body)) {
    return next({ "message": "O campo createdAt é obrigatório", status: 400 });
  }
  if (!(requiredProperties[2] in req.body)) {
    return next({ "message": "O campo rating é obrigatório", status: 400 });
  }
  if (!(requiredProperties[3] in req.body)) {
    return next({ "message": "O campo difficulty é obrigatório", status: 400 });
  }

  return next();
};

// 7. Crie um middleware de validação para a chave createdAt. 
const validDate = (req, _res, next) => {
  const { createdAt } = req.body;
  const regexDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/g;

  if (!regexDate.test(createdAt)) {
    return next({ "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'", status: 400 })
  }
  return next();
};

// 8. Crie um middleware de validação para a chave rating. Ela deve:

const validRating = (req, _res, next) => {
  const { rating } = req.body;
  if (!(rating >= 1 && rating <= 5)) {
    next({ "message": "O campo rating deve ser um número inteiro entre 1 e 5", status: 400 });
  }
  return next();
};

const validDificulty = (req, _res, next) => {
  const { difficulty } = req.body;
  const classifications = ['Fácil', 'Médio', 'Difícil'];
  if (!classifications.includes(difficulty)) {
    return next({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'", status: 400 });
  }
  return next();
};


app.post('/activities', validaName, validaPrice, validDescription, validDate, validRating, validDificulty, (_req, res) => {
  // const activities = req.params;
  // if (activities) {
    return res.status(201).json({ message: 'ihuuu!' });
  // }
});

app.use((error, _req, res, _next) => {
  return res.status(error.status).json(error.message);
});

module.exports = app;
