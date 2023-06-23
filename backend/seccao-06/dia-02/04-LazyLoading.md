# Lazy Loading.


> Agora vamos ver como funciona a outra forma de carregar dados de associações: o lazy loading. Esse método consiste, basicamente, em não especificar uma propriedade includes no momento de realizar a query no banco. Dessa forma, cria-se *a possibilidade de termos dois usos para o mesmo endpoint*.

> Para utilizarmos duas ações diferentes em um endpoint, usaremos a query string includeAddresses, na qual, caso o parâmetro dela seja true, os endereços daquele funcionário também serão retornados.

Antes, vamos voltar a função *getById* de employee como estava anteriormente:

# // src/services/employee.service.js

// ...

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
  });
  return employee;
}

// ...

# Agora, vamos criar uma função getAllByEmployeeId para address que tem como responsabilidade buscar todos os endereços de acordo com o employee_id:

Precisaremos criar o arquivo address.service.js, que terá o seguinte código:

# // src/services/address.service.js

const { Address } = require('../models/');

const getAllByEmployeeId = async (employeeId) => {
  const addresses = await Address.findAll({ where: { employeeId } });

  return addresses;
};

module.exports = {
  getAllByEmployeeId,
}


# Por fim, importamos o service que acabamos de criar para que possamos usá-lo no Controller:


// src/controllers/employee.controller.js

const AddressService = require('../services/address.service');

//  ...

const getById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const employee = await EmployeeService.getById(id);

//     if (!employee) {
//       return res.status(404).json({ message: 'Pessoa colaboradora não encontrada' });
//     }

    if (req.query.includeAddresses === 'true') {
      const addresses = await AddressService.getAllByEmployeeId(id);
      return res.status(200).json({ employee, addresses });
    }

//     return res.status(200).json(employee);
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({ message: 'Ocorreu um erro' });
//   };
// }

// ...


# Reinicie a aplicação e realize uma requisição do tipo GET para o endpoint http://localhost:3001/employees/1?includeAddresses=true. Depois, altere para ?includeAddresses=false ou retire o ?includeAddresses=true e veja seu retorno.

Como presenciamos, o lazy loading é muito útil em situações em que não sabemos se vamos, de fato, precisar buscar todas as informações de uma só vez. Aqui, se tivéssemos utilizado o eager loading, teríamos buscado os dados das pessoas colaboradoras mesmo quando includeAddresses não era informado, e precisaríamos excluir a chave addresses do resultado do banco. Com o lazy loading, podemos carregar apenas os dados do funcionário e dos endereços apenas quando necessário, economizando recursos do banco.











