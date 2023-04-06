# O INNER JOIN permite retornar todos os resultados em que a condição da cláusula ON for satisfeita.

A sintaxe de um INNER JOIN é a seguinte:

  > SELECT t1.coluna, t2.coluna
  > FROM tabela1 AS t1
  > INNER JOIN tabela2 AS t2
  > ON t1.coluna_em_comum = t2.coluna_em_comum;



# AS alias.

  #### Por que usamos o alias (AS)?
  O alias AS é usado para apelidar qualquer parte da sua query. Isso ajuda o sistema de banco de dados a identificar a qual coluna estamos nos referindo, evitando erros de ambiguidade de nome de colunas, além de tornar suas queries mais concisas e legíveis.

  Por exemplo, observe as queries a seguir:

  Código sem alias

  > SELECT sakila.actor.first_name, actor_id, sakila.film_actor.actor_id
  > FROM sakila.actor
  > INNER JOIN sakila.film_actor
  > ON sakila.actor.actor_id = sakila.film_actor.actor_id;

  O código acima, além de ser muito extenso, não permite que o banco de dados descubra de qual tabela deve trazer o actor_id, uma vez que ambas as tabelas, actor e filme_actor, possuem uma coluna actor_id. O seguinte erro será gerado ao tentar executar essa query:

 **Código com alias**

  Podemos tornar a query mais legível com um alias, além de evitar o erro de ambiguidade de coluna:

  > SELECT a.first_name, a.actor_id, f.actor_id
  > FROM sakila.actor AS a
  > INNER JOIN sakila.film_actor AS f
  > ON a.actor_id = f.actor_id;


  **OBS.: A palavra-chave AS pode ser omitida. Nesse caso, o alias é passado diretamente, após o nome da tabela:**

  > SELECT a.first_name, a.actor_id, f.actor_id
  > FROM sakila.actor a
  > INNER JOIN sakila.film_actor f
  > ON a.actor_id = f.actor_id;












