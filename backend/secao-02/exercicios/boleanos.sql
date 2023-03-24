-- 01-Precisamos identificar os dados do cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org. As informações podem ser encontradas na tabela customer
SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

-- 02-Precisamos de um relatório dos nomes dos clientes, em ordem alfabética, que não estão mais ativos no nosso sistema e pertencem à loja com o id = 2, e não inclua o cliente KENNETH no resultado.As informações podem ser encontradas na tabela customercustomer
SELECT * FROM sakila.customer
WHERE first_name <> 'KENNETH' AND active = FALSE AND store_id = 2
ORDER BY first_name ASC;

-- 03-O setor financeiro quer saber título, descrição, ano de lançamento, classificação etária (rating) e valor do custo de substituição (replacement_cost), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film
SELECT title, description, release_year, rating, replacement_cost FROM sakila.film
WHERE rating <> 'NC-17' AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC, title LIMIT 100 ;

-- 04-Quantos clientes estão ativos e na loja 1? As informações podem ser encontradas na tabela customer
SELECT COUNT(*) AS quantidade_de_clientes_nao_ativos FROM sakila.customer
WHERE active = TRUE AND store_id = 1;

-- 05-Mostre todos os detalhes dos clientes que não estão ativos na loja 1. As informações podem ser encontradas na tabela customer
SELECT COUNT(*) AS quantidade_de_clientes_ativos FROM sakila.customer
WHERE active = FALSE AND store_id = 1;

-- 06-Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film
SELECT title FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title LIMIT 50 ;




