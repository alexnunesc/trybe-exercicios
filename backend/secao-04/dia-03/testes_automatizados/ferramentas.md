# Ferramentas
  Existem várias ferramentas com o propósito de teste, como o **Jest** e o **assert**.

  > O **Jest**, que aprendemos no módulo de Fundamentos,
  
    foi originalmente projetado para o React, mas funciona em outros projetos Javascript. Outra característica do Jest é que ele é focado principalmente em testes de unidade e na simplicidade e não requer nenhuma configuração, ou seja, após sua instalação, ele está preparado para ser utilizado. Os testes são paralelos e executados em seus próprios processos para maximizar o desempenho. Possui suporte integrado para execução automática de testes a cada alteração no código. Mas não oferece suporte a testes assíncronos.


  ## Os testes do Mocha
   são executados em série, permitindo relatórios flexíveis e precisos, enquanto mapeia exceções não capturadas para os casos de teste corretos. E para complementar os testes do Mocha temos o chai, que é uma biblioteca de asserção, e o sinon, que implementa dubles de teste, como: spies, stubs e mocks.

# Instalando mocha

  Utilizaremos a flag -D. Apesar de essenciais durante o desenvolvimento, esses módulos (ferramentas) não serão utilizados para executar a nossa aplicação quando ela for publicada.

> 1. npm install mocha@8.4.0 chai@4.3.4 --save-dev --save-exact


# Estruturando testes com o Mocha
  > O mocha é um framework de testes para JS,
    isso significa que ele nos ajuda a arquitetar os nossos testes fornecendo a estrutura e interface para escrevermos eles.

  > Vamos começar pelos comportamentos:

  precisamos definir o que estamos testando em um caso específico. Para isso, o mocha nos fornece duas palavras reservadas: o **describe** e o **it**.

  > O describe
    como o próprio nome já diz, nos permite adicionar uma descrição para um teste específico ou um grupo de testes.

  > O it
    nos permite sinalizar exatamente o cenário que estamos testando naquele ponto.


# usando o describe podemos definir a seguinte representação para descrever o mesmo cenário:

describe('Quando a média for menor que 7', function () {
  //
});

Perceba que o describe aceita **dois parâmetros:(I)** o **primeiro é uma string**, onde podemos passar a descrição, (II) o **segundo é uma função para executar o cenário de teste**.

**Outro ponto de atenção é, que não é necessário importar o mocha em nosso arquivo.**

# Usando o it.

describe('Quando a média for menor que 7', function () {
  it('retorna "reprovação"', function () {
    //
  });
});


# Aferindo testes com o Chai
  O chai nos ajudará com as asserções, ou seja, ele nos fornece maneiras de dizermos o que queremos testar validando se o resultado condiz com o esperado.

**Anota aí 🖊:** 
  Para de fato testar nossa função, **precisamos chamá-la passando o input desejado** e então **validar se a resposta é aquela que esperamos.** Essa validação é o que chamamos de assertion, “asserção” ou, em alguns casos, “afirmação”.

### estrutura.

  `const { expect } = require('chai');`
  `const resposta = calculaSituacao(4);`

  `expect(resposta).equals('reprovação');`

> No código acima
  estamos chamando nossa função.
  Logo em seguida, afirmamos que seu retorno armazenado na constante resposta, deve ser igual (equals) a reprovação.

 # Observe que o chai
  foi importado no início do arquivo e o expect foi desconstruído a partir dele. Agora, perceba como **o chai nos fornece uma função pronta, a equals que vai comparar se o valor “esperado” na resposta é igual ao passado para ele, ou seja, igual a “reprovação”.**

  https://www.chaijs.com/api/bdd/


 #### Para tornar nosso teste ainda mais legível e elegante, o chai nos fornece outros getters encadeáveis que possuem um papel puramente estético.

  Por exemplo, o **to** e o **be**, que nos permitem escrever nossa assertion da seguinte maneira:

## 
  const { expect } = require('chai');

  const calculaSituacao = require('../examples/calculaSituacao');

  describe('Quando a média for menor que 7', function () {
    it('retorna "reprovação"', function () {
      const resposta = calculaSituacao(4);

      expect(resposta).to.be.equals('reprovação');
    });
  });
## 

Perceba que o to e o be não alteraram em nada a validação realizada, porém a leitura fica muito mais fluida e natural.

> https://www.chaijs.com/api/bdd/#method_language-chains









