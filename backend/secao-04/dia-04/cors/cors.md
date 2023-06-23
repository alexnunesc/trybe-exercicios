# Liberando acesso ao frontend com cors

Outro middleware bem comum nas aplicações back-end é o cors, que permite que outras aplicações front-end consumam sua API. O uso básico desse módulo consiste em instalá-lo usando npm install cors@2.8.5 --save-exact e em seguida adicionar as seguintes linhas no seu código:

#
const cors = require('cors');
app.use(cors());
#

Com o cors configurado, nosso back-end vai deixar o navegador enviar requisições para nossa API.

Sem o cors, o navegador bloquearia as requests do nosso front-end para nossa API. O middleware cors tem um conjunto de configurações que permitem criar regras específicas, limitando quem pode fazer requisições e quais requisições podem ser feitas.

https://www.npmjs.com/package/cors


