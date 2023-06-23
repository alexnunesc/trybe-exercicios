# MySQL no Docker.

> Na raiz do projeto (diretório trybecash-api), vamos criar o arquivo docker-compose.yaml

version: '3'
services:
  database:
    image: mysql:8.0.29
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: trybecashdb
    ports:
      - "33060:3306"


> criar um arquivo chamado Dockerfile na raiz do projeto

FROM node:16

EXPOSE 3000

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]



> Após a criação do Dockerfile, devemos configurar um container para rodar nossa aplicação Node.js em nosso arquivo docker-compose.yaml




> Após a criação dos arquivos com o conteúdo apresentado. Comece inicializando o container em segundo plano com o uso do seguinte comando:

docker-compose up -d


> Nesse ponto, a estrutura de arquivos e diretórios do projeto deve estar assim:

.
└── trybecash-api/
    ├── src/
    │   └── server.js
    ├── tests/
    │   └── -
    ├── docker-compose.yaml
    ├── Dockerfile
    └── package.json










