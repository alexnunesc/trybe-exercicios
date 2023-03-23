# SQL (Structured Query Language).
  alguns comandos.
  >> SELECT, UPDATE, DELETE, INSERT e WHERE

# Executando um container com MySQL.
  >> docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=senha-mysql -d -p 3306:3306 mysql:5.7

# O que estamos fazendo aqui?
 >> –name:
  Nomeia o container, assim facilitando a identificação do mesmo;

  >> -e:
   Utilizada para informar nossas variáveis de ambiente. (Aqui vamos manter o usuário padrão root que é recomendado pela documentação, e então, passaremos a variável MYSQL_ROOT_PASSWORD=senha-mysql para poder usar dentro do container);

  >> -d:
    Faz com que o container rode em segundo plano;

  >> -p:
    Indica qual porta no nosso sistema operacional o docker estará em funcionamento. A porta 3306 do lado esquerdo é a porta do nosso sistema, que receberá o container e a porta 3306 lado direito é a porta do container. Lembrando que 3306 é a porta padrão do MySQL;

  >> run:
    responsável por criar e iniciar o container;