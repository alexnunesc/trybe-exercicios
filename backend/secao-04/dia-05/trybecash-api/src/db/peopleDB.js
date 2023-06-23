// src/db/peopleDB.js

const conn = require('./connection');

// Criar Banco.
const insert = (person) => conn.execute(
    `INSERT INTO people 
      (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`,
    [person.firstName, person.lastName, person.email, person.phone],
);

// buscar todas as pessoas.
const findAll = () => conn.execute('SELECT * FROM people');

// buscar pessoa por ID.
const findById = (id) => conn.execute('SELECT * FROM people WHERE id = ?', [id]);


// Update.
const update = (person, id) => conn.execute(
  `UPDATE people 
    SET first_name = ?, last_name = ?, email = ?, phone = ? WHERE id = ?`,
  [person.firstName, person.lastName, person.email, person.phone, id],
);

// Delete.
const remove = (id) => conn.execute('DELETE FROM people WHERE id = ?', [id]);


module.exports = {
  insert,
  findAll,
  findById,
  update,
  remove,
};
