# LIKE - criando pesquisas mais dinâmicas.

  1. **Buscar pelo algo que iniciar em.**
   EX.
    > SELECT * FROM sakila.film WHERE title LIKE '_C%';

  2. **Buscar algo pelo final do seu nome.**
   Ex.
    > SELECT * FROM sakila.film WHERE title LIKE '%don';

  3. **Bucar que inicia em % terminar em.**
   EX.
    > SELECT * FROM sakila.film WHERE title LIKE 'p%r';

  4. **Bucar por um número específico de caracteres**
    Ex.
    > SELECT * FROM sakila.film WHERE title LIKE '________';
  
  5.  **Encontra todas as palavras com no mínimo 3 caracteres e que iniciam com E**
    Ex.
      > SELECT * FROM sakila.film WHERE title LIKE 'E__%';