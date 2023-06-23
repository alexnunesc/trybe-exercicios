# Agora, o que são GET e status code?🤔

  Vamos ver! A maior parte das requisições, na Internet, são feitas seguindo um formato específico - um protocolo chamado HTTP.

## Anatomia de requisições: o protocolo HTTP.

  Vamos analisar o que compõe uma requisição HTTP. Para isso, analisaremos a requisição que é feita pelo navegador quando abrimos a página https://developer.mozilla.org.


  **Anota aí 🖊:** Protocolo é uma convenção que padroniza algo. Neste caso, o protocolo HTTP é uma convenção que padroniza a conexão, comunicação e transferência de dados, entre dois sistemas.

  > GET / HTTP/1.1
  > Host: developer.mozilla.org
  > Accept: text/html

  ## Vejamos quais são as informações presentes nessa requisição:

  > O método HTTP definido por um verbo em inglês.
    Nesse caso, utilizamos o GET, que normalmente é utilizado para “buscar” algo do servidor, e é também o método padrão executado por navegadores quando acessamos uma URL.

  > O caminho no servidor do recurso que estamos tentando acessar.
    Nesse caso, o caminho é /, pois estamos acessando a página inicial da aplicação;

  > A versão do protocolo (1.1 é a versão nesse exemplo);

  > O local (host, ou “hospedeiro”)
    onde está o recurso que se está tentando acessar, ou seja, a URL! Ou, se for mais direto, o endereço IP servidor.

# Os headers, ou cabeçalhos
  são informações adicionais a respeito de uma requisição ou de uma resposta. Eles podem ser enviados do cliente para o servidor, ou vice-versa. Na requisição do exemplo acima, temos o header Host, o qual informa o endereço do servidor e o header Accept, que informa o tipo de resposta a qual esperamos do servidor.

  **Ex**: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers


  Esses são os dados transmitidos em uma request do tipo GET. No entanto, o GET não é o único método HTTP existente. Na verdade, existem 39 métodos diferentes! Os mais comuns são: GET, PUT, POST, DELETE e PATCH, além do método OPTIONS, utilizado por clientes para entender como deve ser realizada a comunicação com o servidor. A principal diferença entre os métodos é o seu significado e veremos isso na prática logo mais.



# Quando um servidor recebe uma requisição, ele envia de volta uma resposta. Veja um exemplo:


  HTTP/1.1 200 OK
  Date: Sat, 09 Oct 2010 14:28:02 GMT
  Server: Apache
  Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
  ETag: "51142bc1-7449-479b075b2891b"
  Accept-Ranges: bytes
  Content-Length: 29769
  Content-Type: text/html

  <!DOCTYPE html... (aqui vêm os 29769 bytes da página solicitada)



  ## A composição da resposta é definida por:

  > A versão do protocolo (1.1 no nosso exemplo);

  > O código do status que diz se a requisição foi um sucesso ou não. Nesse caso, deu certo, pois recebemos um código 200, acompanhado de uma pequena mensagem descritiva (OK, nesse caso);

  > Os headers no mesmo esquema da requisição. No caso do exemplo acima, o Content-Type diz para o navegador o que ele precisa fazer. No caso do HTML, ele deve renderizar o documento na página;

  > Um body ou corpo (da requisição), que envia dados quando necessário, sendo opcional. Por exemplo, caso você submeta um formulário registrando um pedido em uma loja virtual, no corpo da resposta pode ser retornado o número do pedido ou algo do tipo. Veremos exemplos logo mais!


 ## #################
  > **o body e os headers da requisição representam a informação que um cliente está enviando para o servidor;**

  > **o body e os headers da resposta representam a informação que o servidor está devolvendo para o cliente**






