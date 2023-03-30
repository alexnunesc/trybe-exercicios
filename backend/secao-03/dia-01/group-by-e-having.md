# Exibindo e filtrando dados de forma agrupada com GROUP BY e HAVING.


As querys podem ser agrupados por uma ou mais colunas usando o GROUP BY, o que faz com que todos os registros que têm o mesmo valor para tais colunas sejam exibidos juntos. O GROUP BY também pode ser usado em conjunto com as funções de agregação.

  **O GROUP BY pode ser construído da seguinte forma:**

  > SELECT coluna(s) FROM tabela 
  > GROUP BY coluna(s);


Agrupar os registros pelo valor de uma coluna, exibindo apenas um registro de cada valor.

Ex.
  > SELECT first_name FROM sakila.actor
  > GROUP BY first_name;


O GROUP BY removerá duplicações, retornando apenas um valor da coluna usada no agrupamento.


Porém, é mais comum utilizar o GROUP BY em conjunto com o AVG, MIN, MAX, SUM ou COUNT. Por exemplo, caso queiramos saber quantos registros existem na tabela de cada nome registrado, podemos usar o COUNT(). Assim, teremos uma informação mais fácil de ser compreendida.

Ex.

  > SELECT first_name, COUNT(*) FROM sakila.actor
  > GROUP BY first_name;



#### Utilizar o GROUP BY para agrupar os registros pelos valores de mais de uma coluna.


  > SELECT rating, rental_rate, COUNT(1) as total FROM sakila.film
  > GROUP BY rating, rental_rate 
  > ORDER BY rating, rental_rate;

No exemplo acima, estamos usando a tabela film do banco sakila. A coluna rating nos mostra a classificação por idade do filme. A coluna rental_rating informa o valor do aluguel do filme separado/agrupado pela classificação. Além disso, inserimos uma função ORDER BY para facilitar a visualização dos resultados.

https://content-assets.betrybe.com/prod/949fcc25-cc9c-4593-a753-e11e81640f11-Tabela%20sakila%20actor%20groupby1.png


# Juntando tudo.

  -- Média de duração de filmes agrupados por classificação indicativa
  > SELECT rating, AVG(length)
  > FROM sakila.film
  > GROUP BY rating;

  -- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
  > SELECT rating, MIN(replacement_cost)
  > FROM sakila.film
  > GROUP BY rating;

  -- Valor máximo de substituição dos filmes agrupados por classificação indicativa
  > SELECT rating, MAX(replacement_cost)
  > FROM sakila.film
  > GROUP BY rating;

  -- Custo total de substituição de filmes agrupados por classificação indicativa
  > SELECT rating, SUM(replacement_cost)
  > FROM sakila.film
  > GROUP by rating;




