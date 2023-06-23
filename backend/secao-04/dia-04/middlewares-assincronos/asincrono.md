//...
const app = express();
const teams = { ... };

app.use(apiCredentials);
app.use(express.json());

app.get('/teams', (req, res) => res.json(teams));
// ...


# Aqui é importante destacar que o app.use só afeta as rotas que vem abaixo da sua definição. Ou seja, todas as rotas da API de times vão passar pelo middleware de autenticação. Se você deseja liberar a rota GET /teams para todos, mas exigir credenciais para as demais rotas, precisa mudar a ordem dessa configuração. Veja como fazer isso no exemplo abaixo:


//...
const app = express();
const teams = { ... };

app.use(express.json());
// não precisa passar pelo apiCredentials pra chegar aqui
app.get('/teams', (req, res) => res.json(teams));
// se chegou até aqui, então vai passar pelo apiCredentials
app.use(apiCredentials); 
// só vai chegar aqui se tiver credenciais
app.post('/teams', ...);
app.put('/teams', ...);
// ...

# Usando middlewares assíncronos.

Ok, você já aprendeu como configurar um middleware global, ou seja, que intercepta todas ou quase todas as rotas. Agora, veja como você implementaria esse middleware nas próximas explicações.

Suponha que você tem um arquivo authdata.json com um objeto mapeando tokens com as informações dos apps que usam nossa API. Quando uma requisição chega, ela precisa ter um cabeçalho X-API-TOKEN com um token presente nesse arquivo. Se não tiver o cabeçalho ou se não tiver um token válido, vamos responder com o código http 401 Unauthorized.

###

 Repare que no uso do método req.header() para acessar um cabeçalho, estamos usando req.header('X-API-TOKEN') porque o cabeçalho (header) usado é o X-API-TOKEN. O protocolo HTTP tem cabeçalhos já estabelecidos, mas é costume prefixar cabeçalhos customizados com X-, como fizemos com X-API-TOKEN.

# Lidando com erros assíncronos
Por padrão, o Express vai encaminhar todos os erros lançados para serem tratados pelos middlewares de erros. No entanto, erros lançados em middlewares assíncronos não são tratados do mesmo jeito.

Por exemplo, se por acaso o arquivo authdata.json não estivesse disponível no momento da requisição, ou tivesse um JSON quebrado, você obteria um erro, mas não teria uma resposta HTTP.



# imagem

Existem algumas soluções para este problema, mas a mais simples está em um pacote chamado express-async-errors. Basta instalar com npm install express-async-errors@3.1.1 --save-dev --save-exact, importar ele no arquivo app.js antes de criar o objeto app e esse pacote vai alterar o comportamento padrão do express. Ficaria assim:


## codigo 
const express = require('express');
**require('express-async-errors'); // não precisa definir uma variável**

const apiCredentials = require('./middlewares/apiCredentials');

const app = express();
// ...


# Passando valores entre middlewares com objeto req.

  Middlewares também podem modificar os objetos **req** e **res**. Essas modificações serão recebidas pelos próximos middlewares caso next seja chamado. Geralmente isso é utilizado para propagar informações de um middleware para o outro. Isso dá ainda mais flexibilidade para sua composição de middlewares.


# código 
  // src/middlewares/apiCredentials.js

  //...
  module.exports = async function apiCredentials(req, res, next) {
    //...
    const authorized = JSON.parse(authdata);
    if (token in authorized) {
      // modifica o req para guardar a informação importante
      req.teams = authorized[token];
      next();
    } else {
      res.status(401).json({ message: 'Token inválido ou expirado.'});
    }
  };
# código 


Repare que estamos usando req.teams para guardar essa informação. Poderíamos criar qualquer propriedade, mas devemos ter cuidado para não sobrescrever as propriedades que req já tem. Na dúvida, você pode conferir os campos do req usando o debugger. Aqui vamos usar teams mesmo, que não tem conflito nenhum.









