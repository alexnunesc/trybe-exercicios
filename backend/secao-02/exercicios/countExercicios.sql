-- 01-Quantas senhas temos cadastradas nessa tabela?
SELECT COUNT(password) FROM sakila.staff;

-- 02-Quantas pessoas temos no total trabalhando para nossa empresa?
SELECT COUNT(staff_id) FROM sakila.staff;