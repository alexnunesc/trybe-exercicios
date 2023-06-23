# Avaliando cobertura de teste com nyc.
  Para instalar em outros projetos usando o npm você pode usar o seguinte comando:
  > npm install -D -E nyc@15.1.0



  Além disso, é necessário adicionar um script para facilitar a chamada do comando nyc que faz a cobertura de teste. Esse ajuste já está presente no projeto Trybecar, mas caso queira replicar em outros projetos adicione o seguinte script no package.json.

  "scripts": {
    "test:coverage": "nyc --all --include src/models --include src/services --include src/controllers mocha tests/unit/**/*.js --exit"
  },


# executar os seus testes verificando a cobertura de código.
> npm run test:coverage


A tabela traz as porcentagem de código do programa que foi executado ao rodar os testes. para cada coluna temos:

  > File: nome do arquivo do projeto.
  > Stmts: instruções do código.
  > Branch: estruturas de controle (por exemplo: ramificações de uma estrutura if/else).
  > Funcs: funções, métodos ou sub-rotinas.
  > Lines: linha do arquivo.


# As informações mais importantes que conseguimos tirar dessa tabela são:

> Na coluna % Stmts temos a informação da porcentagem de instruções, do respectivo arquivo, que foram cobertos pelo teste.

**De olho na dica** 👀: este valor é utilizado pelo avaliador para definir se um requisito do projeto foi aprovado ou não.

> Na coluna % Lines (porcentagem de linhas de código) da linha All files(todos os arquivos) temos a informação do total de número de linhas da nossa aplicação que nossos testes estão cobrindo, nesse caso 76,19%

>Na coluna Uncovered Line #s (número das linhas de códigos que não estão cobertas) da linha passenger.model.js temos a informação de exatamente quais são as linhas de código do arquivo passenger.model.js que ainda não estão cobertas, nesse caso o intervalo começando na linha 21 e indo até a linha 32 representado por 21-32
