# Para isso, crie uma pasta chamada cacau-trybe
   e, dentro dela, inicialize um novo pacote Node.js utilizando o npm. Em seguida, instale as ferramentas mocha e chai que iremos usar em nosso projeto.

  ## comandos. 

  mkdir cacau-trybe
  cd cacau-trybe
  npm init -y
  npm install mocha@8.4.0 chai@4.3.4 --save-dev --save-exact


# Feito isso, vamos organizar nosso projeto
 criando as **pastas** *src* e *tests* e, dentro da última, outra subpasta chamada integration.


# Começaremos os testes com foco na validação do primeiro contrato
  (lista de chocolates cadastrados). Para isso, vamos construir um teste que valida a requisição GET para a rota /chocolates.


.
├── src
├── tests/
│   └── integration/
│       └── chocolates.test.js
└── package.json


> Essa configuração irá facilitar a execução dos testes, uma vez que será possível executar todos os testes usando apenas npm run test ou simplesmente npm test.


# package.json
    "scripts": {
    "test": "mocha tests/**/*.test.js --exit"
  },

usamos uma flag (parâmetro) --exit ao final do script. Esse parâmetro vai impedir que os testes fiquem executando indefinidamente quando houver erros em funções assíncronas.



# Agora
  considerando a definição do **contrato (aquilo que é esperado no consumo da API)**, podemos transformá-lo em teste convertendo-o para um cenário com asserções/afirmações. Assim como fizemos anteriormente com o **mocha e o chai**.


# // tests/integration/chocolates.test.js
const chai = require('chai');

const { expect } = chai;

describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
        response = await minhaRequisicao();
        expect(response.status).to.be.equal(200);
    });
});



**Aqui**, 
  temos uma boa definição de asserções para começarmos, mas que deve falhar, pois além de não existirem funcionalidades da nossa API, minhaRequisicao() é um placeholder (está só de enfeite) sem funcionalidade. Com isso, precisamos de algum recurso que nos ajude na validação à medida que formos construindo a API.

**⚠️ Aviso:**
  Para nos ajudar com esse desafio, utilizaremos o **plugin Chai HTTP!** Com ele poderemos simular uma request a nossa API sem inicializá-la manualmente.

 ## comandos.
 > npm install chai-http@4.3.0 --save-dev --save-exact

E então, no nosso teste, iremos adicionar o seguinte trecho, com o plugin na instância do chai:

# // tests/integration/chocolates.test.js
// const chai = require('chai');
> const chaiHttp = require('chai-http');

> chai.use(chaiHttp);

// const { expect } = chai;

// ...


# Após adicionar o plugin ao chai, poderemos consumir o server em express por meio dele, sem que haja a necessidade de subirmos a API manualmente.

Em outras palavras, o chai-http vai criar seu próprio listen(), escolher uma porta automaticamente, fazer a requisição ao endpoint e, por último, retornar o resultado dessa requisição.



######
const output = [
  { id: 1, name: 'Mint Intense', brandId: 1 },
  { id: 2, name: 'White Coconut', brandId: 1 },
  { id: 3, name: 'Mon Chéri', brandId: 2 },
  { id: 4, name: 'Mounds', brandId: 3 },
];
expect(response.body.chocolates).to.deep.equal(output);

> Você pode estar se perguntando: “Por que utilizamos o comando to.deep.equal ao invés do to.be.equals?” 🤔

Resposta: Nesse caso, precisamos utilizar o deep para garantir que todas as informações dentro do objeto retornado são as mesmas do objeto esperado. Do outro modo, essa validação não seria possível, pois não seria realizada a comparação em profundidade.
