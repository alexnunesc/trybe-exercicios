# Data e tempo - lidando com resultados temporais.

No MySQL, o tipo DATE faz parte dos tipos de dados temporais, os quais vamos ver com mais detalhes no decorrer do curso. O MySQL, por padrão, usa o formato YYYY-MM-DD (ano/mês/dia) ao armazenar os valores de uma data. Você é obrigado, pelo banco de dados, a salvar nesse formato, e não é possível alterá-lo. Temos também o tipo DATETIME, que inclui informações de tempo.Vamos ver dois tipos comuns a seguir:



  > <DATE> - 
  Possui apenas data, no formato **YYYY-MM-DD** na faixa de 1001-01-01 até 9999-12-31

  > <DATETIME> -
  Possui data e tempo, no formato **YYYY-MM-DD HH:MM:SS** com a faixa de 1000-01-01 00:00:00 até 9999-12-31 23:59:59.

# Maneiras de encontrar dados por data.

  Ex 01 data específica.
   > SELECT * FROM sakila.payment WHERE DATE(payment_date) = '2005-07-31';

  Ex 02 para valores aproximados:
   > SELECT * FROM sakila.payment WHERE payment_date LIKE '2005-07-31%';

  Ex 03 usando BETWEEN:
   >SELECT * FROM sakila.payment WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';