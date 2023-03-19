# Executando um novo container.

docker container run -it <flags>? <imagem>:<tag> <argumentos>?
docker container run <flags>? <imagem>:<tag> <argumentos>?
Ex.
**docker container run --name my-container alpine:3.14 echo "Hello World"**
>> Hello World!

comando <echo> para escrever uma msg.

Para executar em segundo plano.
  <flag> -d

sleep faz ele dormir por 5 minutos.
  >> docker container run -it --rm -d alpine:3.14 sleep 300
  >> --rm remover o container.
  >> stop -t 0. para encerrar a execução.


### Acessando o terminal do container
O Docker nos permite executar um comando dentro de um container que já está em execução, isso é muito útil, para encontra problemas durante a execução dos nossos projetos.

Nós vamos utilizá-lo para executar o programa <sh>, para acesso do terminal dentro do container em execução!


# Testando o acesso ao terminal.

docker exec -it <nome-do-container> <comando-a-ser-executado>
 <!-- >> docker container run --rm -d --name meu-container alpine:3.14 sleep 300 -->

Entrar no terminal.
 >> docker exec -it meu-container sh 
 >> docker attach meu-container
 dentro do comando.
 Ex.
 >> ps aux
 sair do comando.
 >> exit
 para o container.
 >> docker stop -t 0 meu-container

# Resumo.

### 1 - Criamos um novo container a partir da imagem alpine, com a tag 3.14:

No modo detached (-d);
Atribuindo o nome de meu-container (--name);
Solicitando sua remoção após finalização (--rm);
Substituindo o comando padrão para um comando customizado (sleep 300).

### 2 - Verificamos a lista de containers usando docker ps, apenas para validar o sucesso do comando anterior:

Executamos o comando docker exec -it meu-container sh;

Passando a flag -t e solicitando a criação de uma sessão de terminal;
Passando a flag -i, necessária para que a sessão seja interativa;
O comando a ser executado será sh, que é um programa de terminal linux.

### 3 - Já dentro do container, executamos um comando ps aux:

Este comando lista todos os processos em execução no momento;
Veja que legal: Dentro do container, os únicos processos em execução são:
sleep 300, que especificamos na inicialização do container;
sh, que especificamos na hora de abrir a sessão interativa;
ps aux, que acabamos de executar para obter esta lista;
É só isso! Dentro do container, não existe mais nenhum outro processo em execução! Aqui temos a confirmação do isolamento dos containers do resto dos processos da nossa máquina!

### 4 - Usamos o comando exit para sair do terminal do container;

### 5 - Forçamos a parada de execução do container usando o comando docker stop;

### 6 - Validamos que não há nenhum container restante na máquina usando docker ps -a.
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
-----------------------------------------------------------------
-----------------------------------------------------------------

# Ver os logs de um container em execução.

  docker logs <flags> <nome-do-container>

  Ex. comando de data.
  >> docker container run -d --name meu-container alpine:3.14 date

  ver logs.
  >> docker logs meu-container

# Monitorando os processos dentro de um container

  Ex. comando sleep.
  >> docker container run -d --rm --name meu-container alpine:3.14 sleep 300

  ver processos.
  >> docker top

  encerrar.
  >> docker stop -t 0 meu-container

# Limpando containers que não estão sendo utilizados

  **O comando docker container prune remove todos os containers inativos do seu computador.**

  limpando containes.
  >> docker container prune


  **como sair sem fecha o container**
   >> ctrl + p ctrl + q


# Crinando imagem.
  >> docker build -t site-hugo .
# Criando e execunatdo o container.
  >> docker run -p 1234:80 -d --name meu-container site-hugo

  remover container 
  >> docker rm -f meu-container


# Múltiplos estágio, iamgens intermediárias.

### Aquivo Dockerfile.
>Ex. de dockerfile<

**Ex**
<!-- linha usada para definir os estagios, cada FROM criar uma imagen intermediária, a ultima será a final. -->
FROM alpine:3.14 AS primeiro-estagio
WORKDIR /site

<!-- configuração da ferramenta e rotas pedidas -->
COPY config.toml config.toml
COPY index.html /site/layouts/index.html
COPY _index.md /site/content/_index.md


RUN apk add hugo
RUN hugo --minify --gc

# Segundo Estágio
<!-- Estagio final -->
>> FROM nginx:1.21.3-alpine AS segundo-estagio
<!-- Usamos a --from=primeiro-estagio para copy tudo do estagios anteriores. -->
>> COPY --from=primeiro-estagio /site/public/ /usr/share/nginx/html

<!-- Linha usada para excutar os comandos -->
>> ENTRYPOINT ["nginx", "-g", "daemon off;"]



# RUN vs. ENTRYPOINT vs. CMD

>> RUN <comando> <argumento1> <argumento2> <argumentoN>:

  Indica que o comando dado deve ser executado durante a construção da imagem Docker!
  Ou seja, é muito comum utilizar o RUN para fazer instalações de dependências.

>> ENTRYPOINT <comando> <argumento1> <argumento2> <argumentoN>:

  Indica qual é o comando (e seus argumentos) que deve ser executado ao iniciar esta imagem Docker como um container;
  Considere o ENTRYPOINT como obrigação de comando a ser executado;
  Ele sempre será utilizado como ponto de entrada da imagem.

>> CMD <comando> <argumento1> <argumento2> <argumentoN>:

  Indica qual é o comando (e seus argumentos) que pode ser executado ao iniciar esta imagem Docker como um container;
  Conside o CMD como sugestão de comando a ser executado;
  Ele pode ser substituído ao executar o comando docker run imagem <comando> <argumento1>