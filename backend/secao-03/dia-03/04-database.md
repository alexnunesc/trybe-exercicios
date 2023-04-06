# Criar e relacionar tabelas tendo o diagrama do passo 2 como base:

4.1 Após criar seu banco de dados, você pode começar a criar e relacionar as tabelas de acordo com o diagrama.

  **O objetivo para essa seção é criar as seguintes tabelas:**
  https://content-assets.betrybe.com/prod/375f1fdf-bfba-4540-9321-a432910a545b-Relacionamento%20detalhado%20entre%20as%20tabelas%20%60Artista%60,%20%60Album%60,%20%60EstiloMusical%60%20e%20%60Cancao%60.png


  ## Quais são os principais tipos de dados no MySQL.

  1. Bool = boolleanos.
    Recebe 1 ou 0.
    Valor padrão: null.

  2. Caracteres.

    Tamanho fixo.
    <CHAR(5)> - Pode receber o número de caracteres definidos, se receber menos, ocupar o mesmo número de espaço definido.

    Tamanho variável.
    <VARCHAR(5)> -Pode receber o número de caracteres definidos, se receber menos, porém não ocupar o número de espaço definido.

  3. Números.
    Valores exatos inteiros.
    <TINYINT> = 0 a 255 UNSIGNED ou -128 a127 SIGNED.

    > UNSIGNED
      Permite armazena somente valores positivos.

    > SIGNED
      Permite armazenar valores negativos e positivos.

  ## Valores exatos com precisão decimal.
    
    DECIMAL: Ex. decimal(5,4) = 199.9999.

    FLOAT/REAL: Ex. decimal 10.9.

    DOUBLE: decimal 49.90.


  ## Tempos.

    DATE: padrão yyyy-mm-dd.
    TIME: padrão hh-mm-ss.
    YEAR: padrão 2023.

    DATETIME: yyyy-mm-dd hh-mm-ss.

    TIMESTAMP: igual ao de cima porém podemos usar fusos horários.



# O que é uma primary key e foreign key.

  **primary key** = indentificador unico.
    è uma coluna ou grupo de colunas usados para indentificar uma tabela.

  **foreign key** = é uma coluna ou grupo de colunas em uma tabela que identifica unicamente uma linha em outra tabela.


# Chave primária composta.

  Por mais que só possamos ter uma única chave primária por tabela, essa chave pode ser simples (apenas uma coluna) ou composta (conjunto de colunas).

  **Ex**
   >  DROP SCHEMA IF EXISTS brasil;
   > CREATE SCHEMA brasil;
   >  USE brasil;

   > CREATE TABLE cidades(
      cidade VARCHAR(100) NOT NULL,
      estado VARCHAR(10) NOT NULL,
      populacao INTEGER,
      CONSTRAINT PRIMARY KEY(cidade)
   > );

   Foi criada uma chave primária simples utilizando o campo cidade. Agora considere o exemplo abaixo que irá inserir os dados das cidades de Rio Claro/SP e Rio Claro/RJ na tabela criada:

  > INSERT INTO cidades(cidade, estado, populacao)
  > VALUES('Rio Claro','SP',185421), ('Rio Claro','RJ',17216);

  **No exemplo acima teremos um erro, pois há uma violação da chave primária, já que o nome “Rio Claro” será duplicado e isto não é permitido. A solução para o problema acima é criarmos uma chave primária composta.**


  Chave composta é aquela criada com duas ou mais colunas.

   > DROP SCHEMA IF EXISTS brasil;
   > CREATE SCHEMA brasil;
   > USE brasil;

   > CREATE TABLE cidades(
      cidade VARCHAR(100) NOT NULL,
      estado VARCHAR(10) NOT NULL,
      populacao INTEGER,
      CONSTRAINT PRIMARY KEY(cidade, estado)
   > );

   > INSERT INTO cidades(cidade, estado, populacao)
   > VALUES('Rio Claro','SP',185421), ('Rio Claro','RJ',17216);


# chave simples.
  -- Apagar a versão antiga da tabela
  > DROP TABLE cidades;

  -- Cria uma tabela
  > CREATE TABLE cidades(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(10) NOT NULL,
    populacao INTEGER
  > );

  -- Insere os dados na tabela
  > INSERT INTO cidades(cidade, estado, populacao)
  > VALUES('Rio Claro','SP',185421), ('Rio Claro','RJ',17216);



  De qualquer forma, a aplicação de chaves compostas pode ser vantajosa em outras situações, como na criação de tabelas N:N, ou tabelas de junção. Pois, os campos que contêm as chaves estrangeiras de outras tabelas, são utilizados para formar a chave primária composta, garantindo o bloqueio de registros com associações iguais. Veja no exemplo abaixo, a tabela de junção film_actor.

  https://content-assets.betrybe.com/prod/375f1fdf-bfba-4540-9321-a432910a545b-Tabela%20N:N.png

  Neste caso, o recomendado é utilizar os campos actor_id e film_id já existentes para formar uma chave composta, desta maneira conseguimos manter a identificação única e a integridade da tabela sem precisar criar um campo id único para usar como chave primária.


  -- Há muitas formas de grafia existentes, mas para manter uma padronização e seguirmos a boa prática adotaremos a notação em "snake_case"
  -- para construirmos nossos bancos de dados e tabelas.

  > DROP SCHEMA IF EXISTS trybe_flix;
  > CREATE SCHEMA trybe_flix;
  > USE trybe_flix;

  -- Primeiro criamos a tabela actor
  > CREATE TABLE actor(
      actor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
  > );

  -- E a tabela film
  > CREATE TABLE film(
      film_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
  > );

  -- E por fim, a tabela film_actor com a relação N:N

  > CREATE TABLE film_actor(
      actor_id INTEGER,
      film_id INTEGER,
      CONSTRAINT PRIMARY KEY(actor_id, film_id),
        FOREIGN KEY (actor_id) REFERENCES actor (actor_id),
        FOREIGN KEY (film_id) REFERENCES film (film_id)
  > );


# Como criar uma tabela no MySQL.























