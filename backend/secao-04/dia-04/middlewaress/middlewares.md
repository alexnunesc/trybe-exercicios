# Middlewares.


Cada função terá uma responsabilidade única, se essa função capturar algum problema, uma resposta de erro será retornada para a pessoa usuária.

### Exemplos:

Formato de e-mail não apropriado;
CPF com formato inválido;
Pessoa usuária não tem permissão de acesso.


Agora, se estiver tudo certo, será indicado no final dessa função, seguir para a próxima função da rota (fazendo uma validação diferente). Com isso, serão feitas quantas funções forem necessárias, até que uma delas devolva uma resposta a pessoa usuária. Esse é um estilo de composição de funções chamado middlewares.


**no Express toda função passada para uma rota é um middleware.**

Para o Express, um middleware é uma função que realiza o tratamento de uma requisição HTTP e que pode responder essa request ou chamar o próximo middleware.


# Na prática
 middlewares *recebem **três** parâmetros*: **req**, **res** e **next**, exatamente como as funções callback que usamos até agora para registrar rotas.





# Refatorando um middleware.



# E o que o middleware validateTeam faz?
1️⃣ Faz uma validação básica que apenas confere se todas as propriedades esperadas estão presentes no req.body.

2️⃣ Se a validação aprovar, esse middleware endereça a requisição para o próximo middleware, que efetivamente cria o time.

3️⃣ Se a validação falhar, esse middleware retorna uma resposta com status 400 e nunca chama o próximo middleware. 400 é o código HTTP para Bad Request, indicando que existe algo errado na requisição. Para mais informações sobre códigos HTTP, confira a documentação no site da MDN (Mozilla Developer Network).






















