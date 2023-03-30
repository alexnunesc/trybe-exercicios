# Filtrando Resultados do GROUP BY com HAVING.

 > SELECT first_name, COUNT(*)
 >  FROM sakila.actor
 > GROUP BY first_name
 > HAVING COUNT(*) > 2;

  -- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
  -- melhorando a leitura do resultado
 > SELECT first_name, COUNT(*) AS nomes_cadastrados
 > FROM sakila.actor
 > GROUP BY first_name
 > HAVING nomes_cadastrados > 2;

  -- Observação: o alias não funciona com strings para o HAVING,
  -- então use o underline ("_") para separar palavras
  -- Ou seja, o exemplo abaixo não vai funcionar
 > SELECT first_name, COUNT(*) AS 'nomes cadastrados'
 > FROM sakila.actor
 > GROUP BY first_name
 > HAVING 'nomes cadastrados' > 2;


Podemos ver também que o HAVING pode ser utilizado em agrupamentos que envolvam mais de uma coluna. Como o exemplo que fizemos acima na tabela film.

Aqui estamos buscando todos os filmes de acordo com a classificação por idade, coluna rating, e que possuam o mesmo preço de aluguel, coluna rental_rate. E ainda exista um total de filmes nesse agrupamento, que seja menor que 70.

> SELECT rating, rental_rate, COUNT(1) as total FROM sakila.film
> GROUP BY rental_rate, rating
> HAVING total < 70
> ORDER BY rating, rental_rate;


**É importante entender que, quando usamos o HAVING, estamos filtrando somente os resultados gerados após o GROUP BY ter sido executado.**