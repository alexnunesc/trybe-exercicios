# Exemplo de criação.

  >> docker run -d --name site-trybe -p 4545:80 -v "<CAMINHO DO DIRETÓRIO ONDE ESTÁ SEU HTML>:/usr/local/apache2/htdocs" httpd:2.4.54

  >> docker run -d --name site-trybe -p 4545:80 -v /home/nunes/trybe/trybe-exercicios/backend/secao-01/dia-03/exercicios/01-exercicio:/usr/local/apache2/htdocs httpd:2.4.54


# Saber infos do conatiner.

  >> docker inspect <COLOQUE AQUI SEU CONTAINER ID>

