# Editando times por meio do método PUT
  Para alterar algum time, você precisa do id deste time e dos novos dados, correto? Com o que aprendemos até agora, os novos dados vêm no corpo da requisição e o id vem por parâmetro. Após capturar tudo isso, você precisa procurar dentro do array teams o time correspondente com aquele id e alterar as informações dele. Como pode acontecer de não existir um time com aquele id buscado, precisamos também devolver uma resposta para esses casos. Vamos fazer isso com o trecho de código abaixo:


  # // src/app.js

    // ...

    app.put('/teams/:id', (req, res) => {
      const { id } = req.params;
      const { name, initials } = req.body;

      const updateTeam = teams.find((team) => team.id === Number(id));

      if (!updateTeam) {
        res.status(404).json({ message: 'Team not found' });
      }

      updateTeam.name = name;
      updateTeam.initials = initials;
      res.status(200).json({ updateTeam });
    });

  # // ...

> Observe
  que o método mudou, não é GET nem POST! Aqui, estamos trabalhando com método PUT, o qual é utilizado quando queremos alterar um recurso. Ele também recebe dados pelo corpo da requisição.

  Logo após isso, temos a rota /teams/:id. Essa rota mostra para nós que além de esperar os dados vindo pelo body da requisição, também esperamos um id vindo pela URL, por meio do req.params.