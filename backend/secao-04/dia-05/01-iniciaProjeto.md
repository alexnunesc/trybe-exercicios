# Iniciando o novo projeto.

Comandos iniciais.

> mkdir trybecash-api
> cd trybecash-api
> npm init -y
> npm i nodemon@2.0.15 --save-dev --save-exact
> mkdir src
> mkdir tests


.
└── trybecash-api/
    ├── src/
    │   └── 
    ├── tests/
    │   └── -
    └── package.json


> criar o arquivo src/server.js

> configurar o nodemon
<!-- package.json --> 
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

<!-- estrutura -->
.
└── trybecash-api/
    ├── src/
    │   └── server.js
    ├── tests/
    │   └── -
    └── package.json


