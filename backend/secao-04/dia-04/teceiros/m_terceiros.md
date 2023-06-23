# Usando middlewares de terceiros.

## Interpretando conteúdo JSON com express.json
  Um middleware bastante utilizado é o express.json, ele é um middleware que lê o conteúdo da requisição HTTP, interpreta os conteúdos como JSON e cria no objeto req uma propriedade body com o valor encontrado no conteúdo.

  A função express.json() utilizada na linha app.use(express.json()) cria um middleware que processa corpos de requisições escritos em JSON. Se executarmos nossa API e fizermos uma requisição do tipo POST, conseguiremos ter acesso aos valores enviados no body da requisição. Porém, se tirarmos o uso deste middleware, você perceberá que as requisições do tipo POST não conseguem processar os dados enviados no body da requisição. 


# Servindo arquivos estáticos com **express.static**
  Um outro middleware que já vem com o Express é o express.static. Ele pega o req.path e usa para procurar um arquivo. Se encontrado, ele já responde com esse arquivo. Se não, ele assume que alguém vai responder essa requisição e simplesmente passa para o próximo.


# Retornando 404 com um middleware global customizado



#

  // src/app.js

  app.put('/teams/:id', validateTeam, ... );
  app.delete('/teams/:id', ... );

  // se ninguém respondeu, vai cair neste middleware
  app.use((req, res) => res.sendStatus(404));

  module.exports = app;

#


# Middlewares de segurança

Trybe
Desenvolvimento Web
Módulo: Back-end
Introdução ao desenvolvimento Web com Node.js
Dia 04: Node.js: Express e Middlewares
Usando middlewares de terceiros
Anterior
Usando middlewares de terceiros
Próximo
Usando middlewares de terceiros
Existem middlewares escritos por terceiros que nos fornecem ferramentas úteis para o desenvolvimento de nossas aplicações. Vamos conhecer mais de perto alguns middlewares e como eles nos ajudam a resolver situações específicas na aplicação! 🚀

🎬 Caso você prefira consumir este conteúdo em vídeo, ele está disponível no final do tópico.

Interpretando conteúdo JSON com express.json
Um middleware bastante utilizado é o express.json, ele é um middleware que lê o conteúdo da requisição HTTP, interpreta os conteúdos como JSON e cria no objeto req uma propriedade body com o valor encontrado no conteúdo.

A função express.json() utilizada na linha app.use(express.json()) cria um middleware que processa corpos de requisições escritos em JSON. Se executarmos nossa API e fizermos uma requisição do tipo POST, conseguiremos ter acesso aos valores enviados no body da requisição. Porém, se tirarmos o uso deste middleware, você perceberá que as requisições do tipo POST não conseguem processar os dados enviados no body da requisição.

Faça o teste: copie o script abaixo, cole-o em um arquivo chamado src/experimento-json.js e execute-o com o comando node src/experimento-json.js. Em seguida, realize a request POST localhost:3000/hello, passando o JSON { "nome": "<seu nome aqui">" }.

Copiar
// src/experimento-json.js

const express = require('express');
const app = express();

app.post('/fail', (req, res) => {
  res.status(200).json({ greeting: `Hello, ${req.body.nome}!` });
});

app.use(express.json());

app.post('/hello', (req, res) => {
  // req.body agora está disponível
  res.status(200).json({ greeting: `Hello, ${req.body.nome}!` });
});

app.listen(3000, () => { console.log('Ouvindo na porta 3000'); });
💡 Experimente agora realizar a request POST localhost:3000/fail, passando o JSON { "nome": "<seu nome aqui">" }. Perceba que, sem o express.json, req.body fica undefined e você verá um erro.

Servindo arquivos estáticos com express.static
Um outro middleware que já vem com o Express é o express.static. Ele pega o req.path e usa para procurar um arquivo. Se encontrado, ele já responde com esse arquivo. Se não, ele assume que alguém vai responder essa requisição e simplesmente passa para o próximo.

Configurar esse middleware é simples:

Copiar
// src/app.js

//...
const app = express();
// configura para procurar o path no diretório ./images
app.use(express.static('./images'));
//....
Com essa configuração, uma requisição GET /brasao/COR.png vai passar primeiro pelo express.static, que procura por um arquivo em ./images/brasao/COR.png e vai enviá-lo se ele for encontrado. Experimente baixar o brasão do Corinthians e colocá-lo nesse diretório para testar!

Gerando logs da aplicação com morgan
Um log nada mais é do que um registro organizado e consistente de todas as ocorrências de um evento. Logs são fundamentais para reconhecer bugs em uma aplicação web, dando visibilidade para a frequência e as condições em que os bugs ocorreram. E como você nunca sabe quando um bug vai acontecer, é conveniente ter um log de todas as requisições recebidas.

Você pode escrever seu próprio middleware usando console.log. Apenas lembre-se que o console.log vai imprimir no terminal que executa seu app, não nas respostas enviadas aos clientes.

Copiar
app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});
A comunidade open-source tem um pacote muito conveniente para esse fim chamado morgan. Depois de instalar com npm install morgan@1.10.0 --save-exact, basta configurar esse middleware e ele vai emitir uma mensagem para cada requisição recebida:

Copiar
// src/app.js

const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
//...
const app = express();
app.use(morgan('dev'));
app.use(express.static('./images'));
Logs do morgan no terminal
Logs do morgan no terminal
Liberando acesso ao frontend com cors
Outro middleware bem comum nas aplicações back-end é o cors, que permite que outras aplicações front-end consumam sua API. O uso básico desse módulo consiste em instalá-lo usando npm install cors@2.8.5 --save-exact e em seguida adicionar as seguintes linhas no seu código:

Copiar
const cors = require('cors');
app.use(cors());
Quando uma aplicação frontend é carregada em um endereço (localhost:3000) e tenta acessar uma API em outro endereço (localhost:3001), o navegador primeiro perguntará à API se essa aplicação pode fazer essas requisições. Esse é um recurso de segurança presente em todos os navegadores modernos. Antes de existir CORS, os navegadores simplesmente não enviavam requisições de aplicações para outros endereços.

Com o cors configurado, nosso back-end vai deixar o navegador enviar requisições para nossa API. Sem o cors, o navegador bloquearia as requests do nosso front-end para nossa API. O middleware cors tem um conjunto de configurações que permitem criar regras específicas, limitando quem pode fazer requisições e quais requisições podem ser feitas.

Por enquanto, você não precisa se preocupar com isso, já que está focando no desenvolvimento do back-end. Um ambiente de produção, no entanto, exigiria essa configuração para permitir a integração com o frontend. Quando essa hora chegar, leia a documentação.

No vídeo a seguir você pode ver todos esses middlewares apresentados até aqui sendo usados na prática! Bora lá? 🚀


Retornando 404 com um middleware global customizado
Às vezes uma rota simplesmente não existe. Uma requisição GET /players vai passar por todos os middlewares em ordem. O express.static não vai ver esse arquivo e vai passar pro próximo middleware. O express.json nunca responde, só tenta ler o req.body se houver. O apiCredentials não vai reclamar se houver um token válido, passando para o próximo middleware. No entanto, agora as rotas são específicas e ninguém responde ao GET /players.

Nesse caso, o Express já vem com um middleware de erro pronto para lidar com a maior parte dos casos comuns. Foi esse middleware que respondeu todos os erros que você experimentou hoje. Por padrão, ele responde com HTML para qualquer erro. No entanto, se você quiser customizar sua resposta para rotas não tratadas, basta escrever um middleware global no final das configurações do seu app. Por exemplo, aqui vamos evitar enviar o HTML:

Copiar
// src/app.js

app.put('/teams/:id', validateTeam, ... );
app.delete('/teams/:id', ... );

// se ninguém respondeu, vai cair neste middleware
app.use((req, res) => res.sendStatus(404));

module.exports = app;
Middlewares de segurança
Em um ambiente de produção é importante se preocupar com segurança da aplicação. O Helmet pode ajudar a proteger seu aplicativo de algumas vulnerabilidades da Web conhecidas, definindo os cabeçalhos HTTP de forma adequada. Ele é uma coleção de várias funções de middleware menores que definem cabeçalhos de resposta HTTP relacionados à segurança. Exemplos de proteção são: ataques de script entre sites, impor conexões seguras (HTTPS) ao servidor, dentre outras. Para mais detalhes leia a documentação.

> O uso básico desse pacote de middlewares consiste em instalá-lo usando **npm install helmet@6.0.1 --save-exact** e em seguida adicionar as seguintes linhas no seu código:

#
  const express = require("express");
  const helmet = require("helmet");

  const app = express();

  app.use(helmet());
#


# Limite de taxa de requisições

*limitar o consumo de uma API para reduzir o uso de recursos do servidor necessários para que o código seja executado;*

*gerar serviços em que a quantidade de serviços que podem ser consumidos dependam do plano do usuário;*

*proteger a API contra um ataque de negação de serviço (DoS ou DDoS) que é uma tentativa maliciosa de sobrecarregar uma propriedade web com tráfego a fim de interromper seu funcionamento normal.*


> O express-rate-limit é um middleware para limitar solicitações repetidas a APIs e/ou endpoints públicos e pode ser instalado através do comando **npm install express-rate-limit@6.7.0 --save-exact** Abaixo temos um exemplo de sua aplicação:


#
  const express = require("express");

  const rateLimit = require("express-rate-limit");
  const app = express();

  // Configuramos um limitador para uma taxa máxima de 100 requisições em um intervalo de 15 minutos
  const limiter = rateLimit({
    max: 100, // número máximo de requisições
    windowMs: 15 * 60 * 1000, // intervalo de tempo, em milissegundos, para atingir o número máximo de requisições
    message: "Muitas requisições originadas desta IP" // mensagem personalizada quando atinge o limit rate
  });

  app.use(limiter);
#













