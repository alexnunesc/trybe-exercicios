# INSERT - adicionando dados em tabelas.


**Informação importante sobre os tipos de aspas**
  <Backticks ou crase (``)>:
    são usadas para identificar nome de tabelas e colunas. São necessárias apenas quando o identificador for uma palavra reservada do MySQL, ou quando o nome da tabela ou coluna contiver espaços em branco.

  <Aspas simples ('')>: 
    devem ser usadas em valores do tipo string. Aspas simples são aceitas na maioria dos Sistemas de Gerenciamento de Banco de Dados, sendo assim, é preferível usar aspas simples no lugar das aspas duplas.

## Inserindo dados individuais.

  > INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES ('valor_coluna1', 'valor_coluna2');

## Inserindo varíos dados.

  > INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES ('valor_1','valor_2'), ('valor_3','valor_4'), ('valor_5','valor_6');

  Ex.
  > INSERT INTO `sakila`.`staff` (first_name, last_name, address_id, email, store_id, active, username, password)
  ignro
  > VALUES ('Alex', 'NC',  2, 'tossacoin@gmail.com', 1, 1, 'geralt', 'theWhiteWolf');

# Ignorando linhas com probllemas.
  > INSERT IGNORE INTO pessoas (id, name) VALUES
 **(4,'Gloria'),** -- Sem o IGNORE, essa linha geraria um erro e o INSERT não continuaria.
  **(5,'Amanda');**

    -- Pesquisando agora, você verá que a informação duplicada não foi inserida.
    -- Porém os dados corretos foram inseridos com sucesso.
  > SELECT * FROM pessoas;


# Auto-increment.
  não precisamos adiciona o campo que já tem essa propiedade "auto_increment"
  > INSERT INTO sakila.actor (first_name, last_name) VALUES('Marcelo','Santos');

# INSERT SELECT (Inserindo dados de uma outra tabela).

  > INSERT INTO tabelaA (coluna1, coluna2)
  > SELECT tabelaB.coluna1, tabelaB.coluna2
  > FROM tabelaB
  > WHERE tabelaB.nome_da_coluna <> 'algumValor'
  > ORDER BY tabelaB.coluna_de_ordenacao;

### também podemos ccopia todos os dados de uma tabela para outra, porem as duas tabelas devem ter o mesmo número de colunas. 
  Ex. 
  > SELECT * FROM
 
> copiando dados de uma tabela para outras.

  INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name FROM sakila.staff;




