> Pense na seguinte situação, imagine que temos um endpoint de cadastro de pessoas e existe uma regra dizendo que duas pessoas não podem ter o mesmo endereço de email. Essa regra é um exemplo de regra de negócio onde a camada Service deve validar antes de inserir uma nova pessoa no banco de dados se outra pessoa já cadastrada possui o mesmo endereço de email.

> Já a camada Controller precisa garantir que no JSON do corpo da requisição, por exemplo, possua um atributo email com um email válido antes de chamar o componente da camada Service, pois se o endereço de email não for fornecido durante a requisição não será possível continuar com o processo de cadastro e a requisição deveria ser respondida com status 400.


# Importante.

A camada **service** deve valida por exemplo que não existe outro email igual no banco.

A camada **controller** verificar se existe a chave email e seu valor é valido.



# Erros 

  > Erros originados pelo cliente:
    Os erros dessa categoria ocorrem quando o cliente envia uma requisição com dados incompletos, ausentes ou inválidos. Com isso a requisição não pode ser processada e é retornado para o cliente o erro e seu motivo.

 >Erros originados pela API REST:
    Os erros dessa categoria ocorrem quando os erros no lado da API REST como, por exemplo, o banco de dados está indisponível. Os erros do lado da API REST são respondidos com o status 500 e uma mensagem de erro genérica.


# entenda melhor vendo o video:

  https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d8fc0320-73f1-45d4-9f4f-2b6911b176b1/day/47e36934-739e-427e-b405-cda3908ff9b1/lesson/2a8ce43c-7765-4262-a2bc-ff9512130a2d



  