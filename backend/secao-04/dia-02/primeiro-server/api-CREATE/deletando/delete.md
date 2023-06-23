# Deletando times por meio do método DELETE

  Para finalizar nossa API, vamos deletar um clube por id. Assim como no endpoint da alteração, vamos receber este id por parâmetro, pesquisá-lo no array e deletá-lo. Crie um endpoint do tipo DELETE com a rota /teams/:id e escreva o trecho de código abaixo:

**Ex**
  app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);

  res.status(200).end();
  });