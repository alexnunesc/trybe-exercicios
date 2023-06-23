# A camada Service.

O que uma boa camada de Services precisa fazer? 🤔

Vejamos as atribuições:

  > Abstrair regras de negócio complexas do seu modelo;

  **Exemplo**: definir recomendações de filmes de acordo com o perfil da pessoa usuária.

  > Centralizar validações de regras de negócios:

  **Exemplo**: Uma pessoa que ainda não efetuou o pagamento do mês não dever ter acesso a plataforma de filmes.

Agora, o que uma boa camada de Services não deve fazer? 🤔

  > Não deve ter nenhum tipo de informação sobre o acesso a camada de dados (Model).

  **Exemplo**: não ter nenhuma query SQL. 🙏
  > Não deve receber nada relacionado ao HTTP, seja o request ou o response.

  > A camada Controller, que será explorada mais adiante, deve mandar apenas o necessário para a camada de Services.

  O service faz as validações da aplicação exemplo:
  senhas, idade, email e etc.



