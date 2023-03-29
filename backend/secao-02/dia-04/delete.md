# Excluindo dados de uma tabela.

  > DELETE FROM banco_de_dados.tabela
  > WHERE coluna = 'valor';
  -- O WHERE é opcional. Porém, sem ele, todas as linhas da tabela seriam excluídas.

  Ex.

  > DELETE FROM sakila.film_text
  > WHERE title = 'ACADEMY DINOSAUR';



# Meu DELETE não foi permitido…

  Caso haja relações entre as tabelas (primary key e foreign keys) e existam restrições aplicadas a elas, ao executar o DELETE ocorrerá uma ação de acordo com a restrição que tiver sido imposta na criação da foreign key. Essas restrições podem ser as seguintes:

  -- Rejeita o comando DELETE.
  > ON DELETE NO ACTION;

  -- Rejeita o comando DELETE.
  > ON DELETE RESTRICT;

  -- Permite a exclusão dos registros da tabela pai, e seta para NULL os registros da tabela filho.
  > ON DELETE SET NULL;

  -- Exclui a informação da tabela pai e registros relacionados.
  > ON DELETE CASCADE;


  > DELETE FROM sakila.actor
  > WHERE first_name = 'GRACE';

  O banco de dados não vai permitir que você delete o ator chamado “GRACE”. Isso acontece porque a coluna actor_id da tabela film_actor é uma chave estrangeira (foreign key) que aponta para a coluna actor_id na tabela actor, e essa chave estrangeira possui a restrição ON DELETE RESTRICT. Se essa restrição não existisse, o ator seria deletado, deixando nosso banco de dados em um estado inconsistente, pois haveria linhas na tabela film_actor com um actor_id que não mais existiria!

  Para conseguir excluir este ator em actors, precisamos primeiro excluir todas as referências a ele na tabela sakila.film_actor:


  > DELETE FROM sakila.film_actor
  > WHERE actor_id = 7; -- actor_id = 7 é o Id de GRACE









