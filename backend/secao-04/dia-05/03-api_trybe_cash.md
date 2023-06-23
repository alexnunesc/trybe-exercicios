# API TrybeCash.


> Vamos criar uma API REST chamada TrybeCash, a qual permitirá registrar as receitas e despesas de uma pessoa. 💵 🤑 💵

No arquivo *docker-compose.yaml* foi definido o valor da variável MYSQL_DATABASE com o valor trybecashdb e esse será o nome do banco de dados criado no MySQL. Nesse banco, criaremos as três tabelas a seguir:

  1. Tabela people: que armazenará informações das pessoas que utilizarão a aplicação;

  2. Tabela transactions: que armazenará informações sobre as transações de despesa ou receita das pessoas cadastradas;

  3. Tabela logs: que armazenará os logs das operações realizadas nas tabelas people e transactions.

Diagrama na image.



# ⚠️ Atenção:
  lembre-se que na configuração do docker compose foi indicada a criação do banco de dados trybecashdb através da variável MYSQL_DATABASE. Por isso, não foi necessário executar a instrução SQL CREATE DATABASE trybecashdb;😉


# Para subir a imagem do MySQL
  já com as tabelas criadas, podemos utilizar um *dump*. Assim, faremos a *automatização* desse processo de criação do banco de dados através do seu arquivo docker-compose. Isso é importante em casos em que, por exemplo, vamos utilizar uma base de dados já existente.

  1. Primeiramente, salve o script acima em um arquivo chamado trybecash_script.sql na sua pasta raiz de sua aplicação (onde está o arquivo docker-compose).


  2. Agora precisamos alterar o nosso arquivo docker-compose.yaml e fazer, na opção volumes, o espelhamento do nosso script .sql na pasta docker-entrypoint-initdb.d. Essa alteração fará com que as tabelas já sejam criadas no momento em que subirmos o container. Copie e cole as linhas abaixo no seu arquivo docker-compose.

  volumes:
      - ./trybecash_script.sql:/docker-entrypoint-initdb.d/trybecash_script.sql


# Para mais detalhes sobre o funcionamento da pasta docker-entrypoint-initdb.d,
  acesse a documentação oficial do Docker Hub MySQL no tópico Initializing a fresh instance.

  https://hub.docker.com/_/mysql/


  Agora vamos subir o container.
   > docker-compose down && docker-compose up -d
   