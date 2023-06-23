# Relacionamentos 1:N

No caso dos relacionamentos 1:N, não há grande diferença na maneira como criamos as associações.

> Caso cada employee possuísse vários address, bastaria declarar seu model da seguinte forma:


# // src/models/employee.model.js

//  module.exports = (sequelize, DataTypes) => {
//  const Employee = sequelize.define('Employee', {
//  ...
//  });

//  Employee.associate = (models) => {
    Employee.hasMany(models.Address,
//      { foreignKey: 'employeeId', as: 'addresses' });
//  };

//  return Employee;
//  };

**hasMany: tem muitos**


Mudamos apenas o método de declaração da associação para hasMany, indicando que cada employee pode possuir muitos addresses. Faça uma nova requisição para o endpoint localhost:3000/employees e observe o id 4 no resultado e veja a diferença que ocorre quando é usado hasOne e/ou hasMany.
