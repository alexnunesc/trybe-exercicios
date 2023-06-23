# Relacionamentos 1:1


// src/migrations/[timestamp]-create-addresses.js

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // Configuram o que deve acontecer ao atualizar ou excluir um usuário
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'employee_id',
        // Informa que o campo é uma Foreign Key (Chave estrangeira)
        references: {
          // Informa a tabela da referência da associação
          model: 'employees',
          // Informa a coluna da referência que é a chave correspondente
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('addresses');
  },
};

# Repare que, agora, temos algumas informações novas sendo passadas para o Sequelize no momento de adicionar a coluna employeeId. Esses dados informam ao Sequelize que aquele campo deve ser uma _foreign key_. Vamos passar por cada um deles:

1. references.model:
  > indica qual tabela nossa foreign key está referenciando.
2. references.key:
  > indica qual coluna da tabela estrangeira deve ser utilizada para nossa foreign key.
3. onUpdate e onDelete:
  > configura o que deve acontecer ao atualizar ou excluir um usuário. Nesse caso, todos os endereços daquele usuário serão alterados ou excluídos.

Essa migration cria uma foreign key na tabela addresses, que relaciona o campo employee_id dessa tabela ao campo id da tabela employees.


# Com as migrations criadas, vamos para os models criar essas associações!

Dentro da pasta models, crie o arquivo employee.model.js, que conterá a seguinte estrutura:


# // src/models/employee.model.js

module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'employees',
    underscored: true,
  });

  Employee.associate = (models) => {
    Employee.hasOne(models.Address,
      { foreignKey: 'employeeId', as: 'addresses' });
  };

  return Employee;
};


# A função Employee.associate = (models) => {} que criamos é onde declararemos as associações daquele model. No nosso caso, estamos dizendo que a tabela Employees possui um Address, referenciado pela foreign key employee_id, o model Employee deve chamá-la de addresses (note a letra minúscula), como definido na propriedade as.

Essa função é chamada pelo arquivo src/models/index.js, criado pelo comando npx sequelize-cli init que você executou ao começar o exemplo.

Os métodos de criação de associações que o Sequelize disponibiliza são:

  > hasOne
  > belongsTo
  > hasMany
  > belongsToMany

No caso de relacionamentos 1:1, utilizamos os métodos hasOne e belongsTo. A tradução literal desses métodos facilita o seu entendimento.

1. hasOne = tem um
2. belongsTo = pertencente a



# Validando relacionamentos 1:1

  Agora, vamos validar o relacionamento. Para isso, precisaremos criar seeders para inserirmos dados nas tabelas e um servidor para responder as requisições.

  Para criar os dois seeders, utilize os comandos abaixo:

  > npx sequelize seed:generate --name employees
  > npx sequelize seed:generate --name addresses

Abra o arquivo employees dentro da pasta seeders e copie o código a seguir:


// src/seeders/[timestamp]-employees.js

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('employees',
      [
        {
          first_name: 'Marcos',
          last_name: 'Zuck',
          age: 49,
        },
        {
          first_name: 'Fred',
          last_name: 'Mercúrio',
          age: 19,
        },
        {
          first_name: 'Ayrton',
          last_name: 'Keno',
          age: 51,
        },
        {
          first_name: 'Robin',
          last_name: 'Mathias',
          age: 63,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('employees', null, {});
  },
};

# Depois, utilize o comando abaixo para executar os seeders:

  > env $(cat .env) npx sequelize db:seed:all


# Para finalmente podermos rodar nossa aplicação precisamos de mais alguns arquivos. Por isso, dentro de src criaremos os diretórios Services e Controllers e os preencheremos da seguinte forma:


# // src/services/employee.service.js

const { Address, Employee } = require('../models/');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

module.exports = { getAll };




depois de configura .

> env $(cat .env) npm run dev

https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/94e113d7-6a86-4536-a1d3-08f55f557811/lesson/cf69bd1a-0095-44f0-be02-7cd9ddad0ac2



