-- 01-Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de ‘Par ou Ímpar’, onde ela pode dizer ‘Par’ ou ‘Ímpar’.
SELECT IF(15 MOD 2 = 0, 'Par', 'Impar') AS 'Par ou Imppar';

-- 02-Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?
SELECT 220 DIV 12;

-- 03- Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?

SELECT IF(220 - (18 * 12) = 0, 'Não', CONCAT('SIM'," ", 220 - (18 * 12)));
SELECT IF(220 MOD 12 = 0, 'NÃO', CONCAT('SIM, ', 220 MOD 12));




