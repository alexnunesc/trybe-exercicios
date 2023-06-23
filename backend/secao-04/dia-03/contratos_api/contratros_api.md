# Contratos de APIs.
  Sempre que consumimos ou fornecemos um serviço, como por exemplo uma **API REST**, precisamos ter os comportamentos predefinidos. Esses comportamentos são definidos de acordo com as regras de entrada e saída de dados da API.



## Por exemplo:
  ao chamar um **endpoint GET /users/:userId**, passamos um ID de pessoa usuária e esperamos receber os dados referentes àquele pessoa com um código **http 200 - OK**. Caso a pessoa usuária não seja encontrada, esperamos receber um status **http 404 - Not Found**, por exemplo.



# Anota aí 🖊:
  Em uma API, o conceito definido por essas regras é chamado de contrato. O contrato define aquilo que foi previamente acordado

# Exemplos
  Para ficar ainda mais nítido, vamos utilizar novamente o **endpoint GET /users/:userId**. Podemos dizer que o contrato dele é: quando a pessoa usuária existe, retornar a seguinte resposta:

  > Código HTTP: 200 - OK;
  > Body:

  ```
  {
    "id": "123",
    "name": "Dwight",
    "fullName": "Dwight Schrute",
    "email": "dwightschrute@dundermifflin.com"
  }
  ```





