# Eager Loading.

Abra o arquivo [timestamp]-employees.js dentro da pasta seeders, apague tudo que havíamos colocado antes e copie o código abaixo:


// src/seeders/[timestamp]-employees.js

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('employees',
      [
        { first_name: 'Marcos', last_name: 'Zuck', age: 49 },
        { first_name: 'Fred', last_name: 'Mercurio', age: 19 },
        { first_name: 'Ayrton', last_name: 'Keno', age: 51 },
        { first_name: 'Robin', last_name: 'Mathias', age: 63 },
        { first_name: 'Antonio', last_name: 'Augusto', age: 18 },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('employees', null, {});
  },
};

# Finalmente, utilize o comando abaixo para remover as tabelas antigas, depois recriá-las e, por último, executar os seeders:


> env $(cat .env) npx sequelize db:migrate:undo:all
> env $(cat .env) npx sequelize db:migrate
> env $(cat .env) npx sequelize db:seed:all

# Agora, vamos ver como utilizar o Eager loading na prática. Vamos voltar ao arquivo src/app.js e criar mais uma rota:

# // src/app.js

// const express = require('express');
// const employee = require('./controllers/employee.controller');

// const app = express();

// app.use(express.json());

app.get('/employees/:id', employee.getById);
// app.get('/employees', employee.getAll);

// module.exports = app;


# Com a nova rota já adicionada, vamos voltar ao arquivo src/controllers/employee.controller.js e adicionar o método getById:

# // src/controllers/employee.controller.js

// const EmployeeService = require('../services/employee.service');

// const getAll = async (_req, res) => {
//   ...
// };

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await EmployeeService.getById(id);

    if (!employee) {
      return res.status(404).json({ message: 'Pessoa colaboradora não encontrada' });
    }

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
}

// module.exports = {
//   getAll,
  getById
// };


# Por fim, criaremos o método getById, agora no arquivo src/services/employee.service.js


# // src/services/employee.service.js

// const { Address, Employee } = require('../models/');

// const getAll = async () => {
//   ...
// };

const getById = async (id) => {
  const employee = await Employee.findOne({
      where: { id },
      include: [{ model: Address, as: 'addresses' }],
    });
  return employee;
}

// module.exports = {
//   getAll,
  getById
// };

> Agora, faça uma requisição do tipo GET para o endpoint http://localhost:3001/employees/1 e veja como o resultado é retornado.

# Além das propriedades que já citamos, o campo include pode manipular os dados que serão retornados. Por exemplo, se não quisermos o acesso ao número do endereço, bastaria alterar o código, adicionando a propriedade attributes e dentro dela o que queremos fazer:

# // src/services/employee.service.js

// ...

// const getAll = async () => {
//   ...
// };

// const getById = async (id) => {
//   const employee = await Employee.findOne({
//       where: { id },
       include: [{
         model: Address, as: 'addresses', attributes: { exclude: ['number'] },
       }],
//   });
//   return employee;
// }

// ...


