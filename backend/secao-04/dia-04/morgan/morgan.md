# Gerando logs da aplicação com morgan.

  Um log nada mais é do que um registro organizado e consistente de todas as ocorrências de um evento.


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











