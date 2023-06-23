# E como uma requisição envia dados para o servidor?

  Existem 3 formas de nós enviarmos dados para um servidor, duas pela própria URL e uma pelo corpo da requisição.


# Envio por *consulta*, ou **req.query**.

  Quando pesquisamos algo no Google, usamos esse método!

  > Construção:
   **/rota?variavel1=valor&variavel1=valor&variavelN=valor**

  **Explicação**:
  > /rota
    é o caminho, por exemplo, /produtos, /pessoas, /pesquisa, …;
  > ?
    é o indicador que vamos passar dados em para a rota;

  > &
    é o separador que se usa quando queremos enviar muitos dados;

  > variavelN
    é uma chave identificadora, por exemplo, nome, frequenciaMinima, q, …;

  > valor
    é o valor da variável, por exemplo, nome=Tobias, frequenciaMinima=144, q=express, …;


  > Exemplo: https://www.google.com.br/search?q=Express.
  Quando nós pesquisamos algo, a URL recebe a **rota /search** e o **parâmetro q** com o **valor pesquisado** (aqui no caso foi a palavra Express).

  **q** é abreviação de *query*.


# Envio por *parâmetro* ou **req.params**

  Esse exemplo é mais visível em e-commerces ou sites que têm produtos cadastrados.

  > Construção: **/rota/:variavelN**

  > **Explicação:**

  > /rota
    é o caminho, por exemplo, /produto, /pessoa,, …;
  > /:
    é o indicador que vamos passar um dado para a rota;

  > variavelN
    é uma chave identificadora, por exemplo, id, …; (aqui geralmente passamos ids mas não se restringe a isso)


  Um exemplo prático
  > Kabum por exemplo: https://www.kabum.com.br/produto/117767/.
  Quando nós entramos para ver mais detalhes de um produto, a URL recebe a **rota /produto** e o **parâmetro 117767** que é o **id** deste produto.


# Envio por *corpo* ou **req.body**


  Este exemplo nós não vemos na barra de endereços, mas usamos muito!

  Sabe quando preenchemos um formulário de pagamento após uma compra online ou entramos no course com nosso e-mail e senha? Aí está o envio de informações pelo corpo da requisição.

  O envio de informações vai pelo corpo e não mais pela URL, onde podemos ver explicitamente… Isso se dá por duas questões:

  > A primeira é por segurança, que é a mais importante! Imagine sua senha ou código de segurança do seu cartão de crédito escritos na URL do seu computador e quem está perto de você podendo ler. 😱

  > O segundo motivo é pelo tamanho do que enviamos. Imagina que inviável enviar todo um cadastro de um formulário gigante pela URL! 😁

  Também chamamos esse envio de envio tipo **POST**




