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

## COUNT - contando resultados.

  Ex 01.
  >> SELECT COUNT(district) FROM sakila.address WHERE district = 'Alberta';
   Ex 02.
  >> SELECT COUNT(staff_id) FROM sakila.staff;

## LIMIT - especificando a quantidade de resultados.

  Ex 01.
  >> SELECT * FROM sakila.rental LIMIT 10;

## LIMIT OFFSET - Pulando linhas desnecessárias.
  Query + LIMIT quantidade_de_linhas OFFSET quantidade_de_linhas.

  Ex 01.
  >> SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;

  ## ORDER BY - ordenando resultados.

  Ex 01.
  >> SELECT * FROM sakila.address
  >> ORDER BY address ASC;

  Ex 2.
  >> SELECT * FROM sakila.address
  >> ORDER BY address, district ASC;

  Ex 03.
  >> SELECT * FROM sakila.address
  >> ORDER BY district ASC, address DESC;