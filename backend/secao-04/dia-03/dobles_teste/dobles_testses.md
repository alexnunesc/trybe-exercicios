# Dublês de teste.

  > arquivo CacauTrybeFile.json
   vamos ver na prática como podemos criar um dublê para a função de leitura do fs.


  > Neste nosso caso, o motivo racional é que o gerenciamento dos arquivos ultrapassa o escopo de nossa aplicação.

  Para nos ajudar na criação e utilização dos dublês, utilizaremos a ferramenta **Sinon**, a qual fornece funções para diversos tipos dos **Test Doubles**.


  > No momento, focaremos em um tipo de Test Double, o stub.

  **Stubs** são objetos que podemos utilizar para simular interações com dependências externas ao que estamos testando de fato.


# Primeiro, vamos fazer a instalação do Sinon:

  > npm install sinon@11.1.1 --save-dev --save-exact

  Agora, vamos ver na prática como podemos criar um stub para a função readFile() do fs:


// tests/integration/chocolates.test.js

//const chai = require('chai');
//const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');

//const app = require('../../src/app');

//const { expect } = chai;

//chai.use(chaiHttp);

 > const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

//describe('Testando a API Cacau Trybe', function () {
 >     sinon.stub(fs.promises, 'readFile')
 >        .resolves(mockFile);
//describe('Usando o método GET em /chocolates', function () {
  //it('Retorna a lista completa de chocolates!', async function () {

//...

# Perceba que precisamos importar o módulo fs e, então, usamos o sinon para criar um stub que será utilizado na função readFile(). Essa retornará o mockFile contendo todo os dados que estavam no arquivo CacauTrybeFile.json, conforme especificamos na chamada para resolves.

Veja também que usamos o JSON.stringify() para transformar os dados em JSON, no mesmo formato em que a função readFile retornaria o arquivo JSON.

> A imagem abaixo demonstra o fluxo do nosso código quando utilizamos o stub do método fs.promises.readFile():



# Você pode estar se perguntando: “Mas o que aconteceria se existisse outro arquivo com valores diferentes?” 🤔

**Resposta**: Se a leitura do novo arquivo fosse realizada dentro do mesmo escopo em que o stub foi definido, o valor retornado para o novo arquivo seria o mesmo do primeiro arquivo, resultando, provavelmente, em uma falha do teste. Sendo assim, o ideal é sempre criarmos Tests Doubles para o escopo de cada cenário de teste.

**De olho na dica👀**: O mocha nos fornece duas funções chamadas *beforeEach* e *afterEach*. Como o nome diz, são funções que serão executadas “antes” e “depois” de cada teste:



### Perceba que antes do cenário de teste, nós alteramos o comportamento do método do fs criando um stub e, depois da execução do teste, utilizamos a função restore() que o sinon atribui aos stubs para retornarmos o comportamento padrão daquela função.

Anota aí 🖊: A função restore() desempenha um papel muito importante quando utilizamos stubs, pois é ela que vai garantir que o stub de um teste não seja replicado para os testes seguintes.







