# O que é auto relacionamento (self join) e quando utilizá-lo.

Utilizando o schema hr como exemplo, se quisermos buscar o nome das pessoas colaboradoras e das respectivas gerências (manager), podemos montar a seguinte query usando INNER JOIN:

  > SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
  > FROM
      employees AS Employee
  > INNER JOIN
      employees AS Manager ON Employee.manager_id = Manager.employee_id;