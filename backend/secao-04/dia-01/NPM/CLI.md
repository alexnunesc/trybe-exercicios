# Utilizando o CLI npm.

  O CLI do npm é uma ferramenta oficial que nos auxilia no gerenciamento de pacotes, sejam eles dependências da nossa aplicação ou nossos próprios pacotes. É por meio dele que criamos um projeto, instalamos e removemos pacotes, publicamos e gerenciamos versões dos nossos próprios pacotes.

#### npm init

  O comando <npm init> nos permite criar de forma rápida e simplificada um novo pacote Node.js na pasta onde é executado.

  Ao ser executado, o comando pede: nome, versão, nome das pessoas autoras e afins.

  para usar a forma padrão
  **npm init -y**

Para criar um novo pacote Node.js, o npm init simplesmente cria um arquivo chamado package.json com as respostas das perguntas realizadas e mais alguns campos de metadados.

Para o Node.js, qualquer pasta contendo um arquivo package.json válido é um pacote.

Dentro do package.json é onde podemos realizar algumas configurações importantes para o nosso pacote como nome, versão, dependências e scripts.


# npm run.

  O comando <run> faz com que o npm execute um script configurado no package.json.
  
  Scripts são “atalhos” que podemos definir para executar determinadas tarefas relacionadas ao pacote atual.

  > Para criar um script, precisamos alterar o package.json e adicionar uma nova chave ao objeto scripts.
  
  O valor dessa chave deve ser o comando que desejamos que seja executado quando chamarmos aquele script.



# exemplo.

Por exemplo, para ter um script chamado lint que execute a ferramenta de linter que usamos aqui na Trybe, o ESLint, nossa chave scripts fica assim:

  {
    "scripts": {
      "lint": "eslint ."
    }
  }

Agora, com um script criado, podemos utilizar o comando **npm run <nome do script>** para executá-lo. No nosso caso, o nome do script é lint, então o comando completo fica assim:

Ex.

> npm run lint

# npm start.

  O comando npm start age como um “atalho” para o comando <npm run start>, uma vez que sua função é executar o script start definido no **package.json**.

  Como convenção, todo pacote que pode ser executado pelo terminal (como CLIs, APIs e afins) deve ter um script start com o comando necessário para executar a aplicação principal daquele pacote.


  **Por exemplo:** se tivermos um pacote que calcula o IMC (Índice de Massa Corporal) de uma pessoa cujo código está no arquivo imc.js, é comum criarmos o seguinte script:

  {
    // ...
    "scripts": {
      "start": "node imc.js"
    }
    // ...
  }

# npm install.

  Ele é o responsável por baixar e instalar pacotes Node.js do NPM para o nosso pacote. 

  > npm install <nome do pacote>:
    baixa o pacote do registro do NPM e o adiciona ao objeto dependencies do package.json;

  > npm install -D <nome do pacote>:
    baixa o pacote do registro do NPM, porém o adiciona ao objeto devDependencies do package.json, indicando que o pacote em questão não é necessário para executar a aplicação. Ele é necessário para desenvolvimento, ou seja, para alterar o código daquela aplicação. Isso é muito útil ao colocar a aplicação no ar, pois pacotes marcados como devDependencies podem ser ignorados, já que vamos apenas executar a aplicação, e não modificá-la. A versão longa equivalente dessa flag é --save-dev.

  > npm install -E <nome do pacote>:
  
    baixa uma versão exata de um pacote do registro do NPM e o adiciona ao objeto dependencies ou ao objeto devDependencies caso a flag -D também esteja presente.
    
    A diferença é que quando instalamos as dependências da nossa aplicação, novas versões que corrigem bugs ou introduzem novos recursos desses pacotes podem ser instaladas.
    
    Usando a flag -E garantimos que a mesma versão do pacote sempre será instalada, independentemente se novas versões estão disponíveis ou não.
    
    No package.json a presença do símbolo ˆ antes do número da versão significa que aquela dependência aceita que novas versões sejam instaladas, e a ausência de qualquer símbolo antes do número da versão significa que exatamente aquela versão deve ser instalada.
    
    A versão longa equivalente dessa flag é --save-exact.
  

> <npm install>:
  baixa e instala todos os pacotes listados nos objetos de dependencies e devDependencies do package.json. Sempre deve ser executado ao clonar o repositório de um pacote para garantir que todas as dependências desse pacote estão instaladas.




