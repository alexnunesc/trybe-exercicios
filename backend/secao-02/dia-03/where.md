# WHERE - especificando resultados.

Ex de buscar:

  >> SELECT * FROM sakila.actor WHERE last_name = 'DAVIS'
  <!-- seleciona ator COM last_name IGUAL 'davis' -->

  >> SELECT * FROM sakila.film WHERE title NOT LIKE 'academy%';
  <!-- selecionafilmes que não começãm com 'academy' -->

  SELECT * FROM sakila.payment
  WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2;