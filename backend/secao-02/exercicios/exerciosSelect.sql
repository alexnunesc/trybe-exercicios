-- 01-Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT;
SELECT 13 * 8;

-- 02-Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome “Data Atual”.
SELECT now() AS dataAtual;

-- 03-Escreva uma query que selecione todas as colunas da tabela city;
USE sakila;
SELECT * FROM city;

-- 04-Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer;
SELECT first_name, last_name FROM sakila.customer;

-- 05-Escreva uma query que exiba todas as colunas da tabela rental;
SELECT * FROM sakila.rental;

-- 06-Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film;
SELECT title, description, release_year FROM sakila.film;

-- 07-Utilize o SELECT para explorar todas as tabelas do banco de dados.
SELECT * FROM sakila.city;
