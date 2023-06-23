# Refatorando uma Aplicação.

 > Agora que já vimos como implementar um model, vamos analisar o código do endpoint POST /passengers/:passengerId/request/travel que está no arquivo src/app.js e ver como podemos refatorar esse código para usar a camada Model.


// ...

app.post('/passengers/:passengerId/request/travel', async (req, res) => {
  const { passengerId } = req.params;
  const {
    startingAddress,
    endingAddress,
    waypoints,
  } = req.body;

  if (await passengerExists(passengerId)) {
    const [resultTravel] = await connection.execute(
      `INSERT INTO travels 
          (passenger_id, starting_address, ending_address) VALUE (?, ?, ?)`,
      [
        passengerId,
        startingAddress,
        endingAddress,
      ],
    );
    await Promise.all(saveWaypoints(waypoints, resultTravel.insertId));

    const [[response]] = await connection.execute(
      'SELECT * FROM travels WHERE id = ?',
      [resultTravel.insertId],
    );
    return res.status(201).json(camelize(response));
  }

  res.status(500).json({ message: 'Ocorreu um erro' });
});


O código acima cria uma solicitação de viagem e é executado na perspectiva da pessoa passageira. O endpoint recebe o id da pessoa passageira como parâmetro da rota e um body no formato JSON com os dados da viagem.

Em seguida a função passengerExists(passengerId) verifica se existe um passageiro cadastrado no banco de dados com o id fornecido e retorna um valor booleano (true ou false).

No caso da função passengerExists(passengerId) retornar verdadeiro, é realizada a inserção no banco de dados de uma viagem solicitada pela pessoa passageira. Em seguida é realizada a inserção dos pontos de parada da viagem (notem a utilização do Promise.all para realizar a inserção de forma concorrente).


Nesse trecho de código temos e a execução de duas operações SQL distintas na tabela travels. Na primeira uma operação INSERT e na segunda uma operação SELECT. Vale ressaltar que se precisássemos das mesmas operações em outro lugar do código atualmente teríamos que copiar e colar, ou seja, seria preciso duplicar o código.

Os problemas dessa abordagem ficam evidentes quando queremos modificar uma instrução SQL de uma das operações duplicadas. Tomemos como exemplo a instrução INSERT, note que estamos realizando a inserção de dados em apenas três das seis colunas existentes da tabela (vide diagrama DER). Se fosse necessário modificar o SQL da operação INSERT para inserir dados nas seis colunas da tabela essa alteração deve ocorrer em TODAS as ocorrências da operação INSERT.

























