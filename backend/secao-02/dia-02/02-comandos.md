## SELECT.
  Montado uma query.
  Ex.
  >> <SELECT> 'Alex' AS nome, 'NC' AS sobrenome, 'Goiania' AS cidade, '25' AS idade;

  Buscar todas as coisas de uma tabela.
  >> <SELECT> * FROM nomeBanco.nomeTabela

## CONCAT - juntando duas ou mais colunas.

  Ex.
  >> <SELECT CONCAT>(first_name, " ", last_name) AS "Nome Completo" FROM sakila.actor;

## DISTINCT - evitando dados repetidos.

  >> <SELECT DISTINCT> Idade FROM Escola.Estudantes;