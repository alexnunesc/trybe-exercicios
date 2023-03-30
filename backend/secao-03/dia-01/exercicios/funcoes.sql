-- 01- Monte um query que exiba:
	-- A média de duração dos filmes e dê o nome da coluna de ‘Média de Duração’;
	-- A duração mínima dos filmes como ‘Duração Mínima’;
	-- A duração máxima dos filmes como ‘Duração Máxima’;
	-- A soma de todas as durações como ‘Tempo de Exibição Total’;
	-- E, finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como ‘Filmes Registrados’.
SELECT * FROM sakila.film;
SELECT AVG(length) AS 'Média de Duração' FROM sakila.film;
SELECT MIN(length) FROM sakila.film; -- 9.99 (Menor valor encontrado)
SELECT MAX(length) FROM sakila.film; -- 29.99 (Maior valor encontrado)
SELECT SUM(length) FROM sakila.film; -- 19984.00 (Soma de todos registros)
SELECT COUNT(length) FROM sakila.film; -- 1000 registros encontrados (Quantidade)






