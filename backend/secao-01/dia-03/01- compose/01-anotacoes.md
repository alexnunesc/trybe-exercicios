# Estrutura base do compose.yaml.

  aula-docker-compose/
  ├── backend
  │   └── Dockerfile
  ├── frontend
  │   └── Dockerfile
  └── docker-compose.yaml

# Tipos de importações.
  >> image: especifica uma imagem Docker pronta, seja local ou a ser baixada no Docker Hub;

  >> build: especifica a pasta contendo um arquivo Dockerfile a partir do qual o Compose vai executar o comando docker build automaticamente.

  EX.
    version: '3'
    services:
      frontend:
        build: frontend/    # Especificamos o contexto, ou seja, a pasta onde está o Dockerfile.
      backend:
        build: backend/     # Mesmo caso aqui.
      database:
        image: betrybe/docker-compose-example-database:v1    # Especificamos a Imagem Docker diretamente.

   **Nosso compose vai chamar o Dockerfile e executar o <build> do front e back e depois vai roda o <run> 3 vezes uma para cada serviço**

# Mapeamento de Portas.
  Antes usavamos
  >> docker run -p 3000:3000

  Agora vamos fazer assim:

    version: '3'
    services:
      frontend:
        build: frontend/
        ports:
          - 3000:3000
      backend:
        build: backend/
        ports:
          - 3001:3001
      database:
        image: betrybe/docker-compose-example-database:v1

# Restarta container.

  O Compose possui quatro políticas de reinicialização, sendo elas:

  >> **no**:
    define que o container não reiniciará automaticamente (Padrão);

  >> **on-failure**:
    define que o container será reiniciado caso ocorra alguma falha apontada pelo exit code, diferente de zero;

  >> **always**:
    especifica que sempre que o serviço parar, seja por um falha ou porque ele simplesmente finalizou sua execução, ele deverá ser reiniciado;

  >> **unless-stopped**:
    define que o container sempre será reiniciado, a menos que utilizemos o comando docker stop <container> manualmente.

  Ex.
    version: '3'
    services:
      frontend:
        build: frontend/
        restart: on-failure
        ports:
          - 3000:3000
      backend:
        build: backend/
        restart: on-failure
        ports:
          - 3001:3001
      database:
        image: betrybe/docker-compose-example-database:v1
        restart: on-failure


# Usando Variáveis de Ambiente.

  Uma variável de ambiente é um recurso disponível nos sistemas operacionais que permite criar uma variável no formato:

  **NOME_DA_VARIÁVEL=VALOR.**
    Onde <NOME_DA_VARIÁVEL> é o nome da variável de ambiente, e <VALOR> se refere a um valor que será vinculado à variável.
    ...
    Toda vez que solicitarmos ao sistema operacional o valor de uma variável de ambiente, fornecemos a ele uma <NOME_DA_VARIÁVEL> e ele retorna o <VALOR> associado a esta chave, se ela estiver definida.

  **Usamos o <environment> para criar essas variáveis**

    Ex.
      version: '3'
      services:
        backend:
          build: backend/
          restart: on-failure
          ports:
            - 3001:3001
          environment:
            - DB_HOST=database


# Dependência entre Serviços.

  Uma configuração importante para garantir a ordem de inicialização e encerramento dos nossos serviços é a chave <depends_on>. Com esta chave, conseguimos criar dependências entre os serviços!

  EX. 

  version: "3"
  services:
    frontend:
      build: frontend/
      restart: on-failure
      ports:
        - 3000:3000
      depends_on:
        - backend
    backend:
      build: backend/
      restart: on-failure
      ports:
        - 3001:3001
      environment:
        - DB_HOST=database
      depends_on:
        - database
    database:
      image: betrybe/docker-compose-example-database:v1
      restart: on-failure


## Ate aqui:

  Três serviços, um deles usando uma imagem Docker pronta e dois com arquivo Dockerfile;

  Mapeamos as portas de conexão;

  Configuramos a política de reinicialização;

  Criamos uma variável de ambiente;

  Definimos a ordem de subida dos serviços.

  Agora é o momento de finalmente fazer o Compose trabalhar e seguir a nossa receita de serviços!

# Subindo todos os serviços
  Chamamos o ato de executar todos os serviços do Compose de subir. Para subir todos os serviços, utilizamos o comando ***docker-compose up -d*** no terminal.

  Ver os logs.
   >> docker-compose logs <nome-do-serviço>








