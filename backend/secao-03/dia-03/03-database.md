# Criar um banco de dados para conter suas tabelas:

3.1 Após analisar e criar um diagrama de como o seu banco de dados vai ser estruturado, você pode dar início a criação dele.



  ## 1. Agora que você já tem um diagrama que representa as tabelas que precisam ser criadas, já pode botar a mão no código. 💻

  ## 2. Ao lidar com a criação e gerenciamento de um banco de dados, você precisará conhecer os seguintes comandos:

  -- Cria um banco de dados com o nome especificado.
  > CREATE DATABASE nome_do_banco_de_dados;

  -- `CREATE DATABASE` ou `CREATE SCHEMA` fazem a mesma coisa.
  > CREATE SCHEMA nome_do_banco_de_dados;

  -- Verifica se o banco de dados ainda não existe.
  -- Essa verificação é comumente utilizada junto ao CREATE DATABASE para evitar
  -- a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro.
  > IF NOT EXISTS nome_do_banco_de_dados;

  -- Lista todos os bancos de dados existentes.
  > SHOW DATABASES;

  -- Define o banco de dados ativo para uso no momento.
  > USE nome_do_banco_de_dados;