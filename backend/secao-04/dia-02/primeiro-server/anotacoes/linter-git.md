# Linter e Git.

  > npm i eslint@6.8.0 eslint-config-trybe-backend@1.0.1 --save-dev --save-exact


 Na raiz do projeto ficam arquivos de configuração como:

 > .gitignore, .eslintrc.json, package.json, docker-compose.yml e outros;

o código da aplicação fica em diretórios como: src, app, ou similar.

## Arquivos de configuração lint.

  > touch .eslintignore .eslintrc.json


## Dentro do arquivo .eslintignore, vamos ignorar apenas os arquivos que estão dentro do diretório node_modules.

  // .eslintignore

  > node_modules

## E dentro do arquivo .eslintrc.json, você vai escrever o seguinte trecho de código:

  // .eslintrc.json
  {
    "env": {
      "es2020": true
    },
    "extends": "trybe-backend",
    "rules": {
      "sonarjs/no-duplicate-string": ["error", 5]
    }
  }




