# Middlewares de erro

> Middleware de erro sempre deve vir depois de rotas e outros middleware;

> Middleware de erro só recebe requisições se algum middleware lançar um erro ou chamar a função next() com algum parâmetro.

> Middleware de erro sempre deve receber quatro parâmetros.



# O Express utiliza a quantidade de parâmetros que uma função recebe para determinar se ela é um middleware de erro ou um middleware comum.

  Ou seja, mesmo que você não vá utilizar os parâmetros req, res ou next, seu middleware de erro precisa recebê-los. Você pode adicionar um underline no começo do nome do parâmetro que não será utilizado. Isso é uma boa prática e sinaliza para quem está lendo o código quais argumentos de fato estão sendo utilizados na implementação da função. Por exemplo: function (err, _req, res, _next) {}.


  ## encadear middlewares de erro

   no mesmo esquema dos comuns, simplesmente colocando-os na sequência em que devem ser executados.


# **Pré-configurações:**
 1 - Em um arquivo app.js, teremos as configurações básicas da nossa aplicação, utilizando o express.

  #
    // src/app.js
    const express = require('express');
    const app = express();

    const PORT = 3000;

    app.use(express.json());

    app.listen(PORT, () => console.log(`Rodando na porta: ${PORT}`));
  #

  2- Em um arquivo teams.json, teremos uma lista de objetos, contendo as seguintes informações:


  #
   // ./teams.json
  [
    {
      "nome": "Sociedade esportiva Palmeiras",
      "fundação": "26 de agosto de 1914"
    },
    {
      "nome": "Clube Atlético Mineiro",
      "fundação": "25 de março de 1908"
    }
  ]
 #


# Para isso, comece definindo uma rota /teams, utilizando o método GET.

Nessa rota, utilizaremos o módulo fs para acessar as informações do nosso arquivo teams.json, convertendo para JSON e mandando como resposta para o usuário.

É importante ressaltar que essa lógica deve estar dentro do escopo de um try catch, pois caso aconteça algum erro, o catch irá passá-lo como parâmetro para nosso nex

 // ./app.js
 // const express = require('express');
 const fs = require('fs').promises;
 // const app = express();
 // const PORT = 3000;
 // app.use(express.json());
 app.get('/teams', async (req, res, next) => {
    try {
         const data = await fs.readFile(path.resolve(__dirname, './teams.json'));
         const teams = JSON.parse(data);
         return res.status(200).json({ teams })
     } catch (error) {
        return next(error);
    }
 });

 app.use((error, _req, res, _next) => {
   return res.status(500).json({ error: error.message });
 });


 // app.listen(PORT, () => console.log(`Rodando na porta: ${PORT}`));


# quando passamos qualquer parâmetro para o next, o Express entende que é um erro e deixa de executar middlewares comuns, passando a execução para o próximo middleware de erro registrado para aquela rota, router ou aplicação.


