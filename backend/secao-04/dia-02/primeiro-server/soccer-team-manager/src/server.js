// src/server.js

const app = require("./app");

app.listen(3001, () => console.log('Server running on port 3001'));


/*
  O start é provido pelo trecho app.listen... e dentro dele podemos passar até 2 parâmetros:

  Primeiro parâmetro é o port (ou porta): Aqui passamos 3001, mas poderia ser qualquer número não utilizado acima de 1023;

  Segundo parâmetro é uma função: Aqui passamos apenas um console.log exibindo uma mensagem “que estamos no ar”;
*/
