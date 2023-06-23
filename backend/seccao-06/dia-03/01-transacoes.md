# Transações

Trazendo para um cenário real, o exemplo mais comum para explicar uma transação seria uma transferência de dinheiro entre duas contas correntes. Vamos imaginar que a pessoa A vai transferir R$ 100,00 à pessoa B.

  1. Note que, para realizar a transferência, você precisa de duas operações:

  > uma operação para retirar R$ 100,00 da conta da pessoa A e

  > uma operação para adicionar R$ 100,00 na conta da pessoa B.

Esse processo completo é uma operação atômica. Ou ambas acontecem, ou nada acontece.


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
A imagem anterior representa uma primeira transação, onde todas as operações, executam perfeitamente e no final toda a transação é consolidada com commit assegurando que tudo foi executado. Na segunda transação, uma das operações falha, então um processo de rollback é executado desfazendo todas as alterações anteriores e garantindo o estado original do banco de dados antes da execução da transação. Uma transação de banco de dados relacional, por definição, deve ser atômica, consistente, isolada e durável, mais conhecida pela sigla ACID:

  > Atomicidade: todas as operações definidas na transação devem ser concluídas com sucesso. Se algo falhar, a transação inteira falha;

  > Consistência: todas as regras do banco de dados devem ser respeitadas, ou seja, estrutura de tabelas, chaves estrangeiras, campos restritos, etc.;

  > Isolamento: uma transação não pode interferir em outra transação. Cada transação deve se comportar de forma totalmente isolada das demais transações do banco de dados;

  > Durabilidade: uma vez que a transação foi finalizada, os dados ali modificados devem ser armazenados de forma permanente, ou seja, só será possível alterá-los caso uma nova transação seja executada posteriormente.

Resumindo, sempre que possível, tente utilizar transações, pois irá diminuir as chances de inconsistência. O Sequelize não usa, por padrão, transações. Portanto, precisa-se configurá-lo para utilizar as transações.


# Caso de uso

Imagine a seguinte situação: temos um endpoint em que, em um mesmo formulário, precisamos preencher a tabela de pessoas empregadas e a tabela de endereço. Mas precisamos garantir a atomicidade, ou seja, precisamos cadastrar a pessoa e o endereço de uma vez e, caso alguma coisa falhe, precisamos reverter essa operação.



# // src/services/employee.service.js

// const { Address, Employee } = require('../models');
// ...

// const getById = async (id) => {
// ...
// }
const insert = async ({ firstName, lastName, age, city, street, number }) => {
  const employee = await Employee.create({ firstName, lastName, age });

  await Address.create({ city, street, number, employeeId: employee.id });
  return employee;
};

// module.exports = {
// ...
  insert
// };


# // src/controllers/employee.controller.js

const EmployeeService = require('../services/employee.service');
const AddressService = require('../services/address.service');

// ...
const insert = async (req, res) => {
  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const employee = await EmployeeService.insert(
      { firstName, lastName, age, city, street, number },
    );

    return res.status(201).json({ id: employee.id, message: 'Cadastrado com sucesso' });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
};

// module.exports = {
// ...
  insert
// };


# Unmanaged transactions

Transações aumentam a confiabilidade da sua aplicação, já que respeitam o princípio da atomicidade, evitando popular o banco de dados de forma inconsistente. Sempre que for fazer algum tipo de operação que envolva duas ou mais tabelas, é bastante recomendado usar uma transação para envelopar as operações de escrita. Isso serve para operações *UPDATE* e *DELETE* também.

> Para esse tipo de transaction como o próprio nome diz, a transação não é gerenciada, é preciso indicar manualmente a circunstância em que uma transação deve ser finalizada ou revertida, ou seja, executar o commit ou rollback. Exemplo de código:


# // src/services/employee.service.js

// const { Address, Employee } = require('../models');
const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
// Ajustamos para usar a configuração correta para nosso ambiente
const sequelize = new Sequelize(config[env]);

// ...

// const insert = async ({ firstName, lastName, age, city, street, number }) => {
  const t = await sequelize.transaction();
  try {
    // Depois executamos as operações
    const employee = await Employee.create(
      { firstName, lastName, age },
      { transaction: t },
    );

    await Address.create(
      { city, street, number, employeeId: employee.id },
      { transaction: t },
    );

    // Se chegou até essa linha, quer dizer que nenhum erro ocorreu.
    // Com isso, podemos finalizar a transação usando a função `commit`.
    await t.commit();
    return employee;
  } catch (e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    await t.rollback();
    console.log(e);
    throw e; // Jogamos o erro para a controller tratar
  }
// };

// ...


# Managed transactions

Um ponto importante a se destacar é que uma vez que se opte por transações não gerenciadas, todo esse controle fica na mão da pessoa desenvolvedora. Em projetos mais complexos a tarefa de ter o controle de todas as transações pode ser árdua. Nesses casos, prefira sempre que o próprio Sequelize fique responsável por realizar o gerenciamento das transações.

Nesse caso, o próprio Sequelize gerencia as transações e determina em tempo de execução, quando deve finalizar ou reverter uma transação:

Exemplo de código:


# // src/services/employee.service.js

// ...

// const insert = async ({ firstName, lastName, age, city, street, number }) => {
    const result = await sequelize.transaction(async (t) => {
      const employee = await Employee.create({
        firstName, lastName, age,
      }, { transaction: t });

      await Address.create({
        city, street, number, employeeId: employee.id
      }, { transaction: t });
      return employee;
    });

    return result;
    // Se chegou até aqui é porque as operações foram concluídas com sucesso,
    // não sendo necessário finalizar a transação manualmente.
    // `result` terá o resultado da transação, no caso um empregado e o endereço cadastrado
// };

// ...





