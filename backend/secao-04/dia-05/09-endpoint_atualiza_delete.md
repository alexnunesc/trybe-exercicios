# Criando os endpoints de atualização e exclusão de pessoas.

Para finalizar os endpoints de pessoas da nossa API, faltam ser implementados dois endpoints:

  > Um capaz de alterar os dados de uma pessoa previamente cadastrada no banco de dados;

  > Outro para excluir uma pessoa previamente cadastrada no banco de dados.

O código necessário para implementar essas funcionalidades são similares aos utilizados nos endpoints de cadastro, de buscar todos e o de buscar pelo id.

Então vamos implementar esses dois endpoints e finalizar o nosso CRUD de pessoas! 😎


# Como de costume, vamos iniciar escrevendo os testes, adicionando as seguintes linhas de código:

// src/tests/integration/people.test.js

  it('Testando a alteração de uma pessoa com o id 1', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const response = await chai
      .request(app)
      .put('/people/1')
      .send(
        {
          firstName: 'Lucão',
          lastName: 'Andarilho dos céus',
          email: 'lucao.andarilho@trybe.com',
          phone: '851 678 4453',
        },
      );

    expect(response.status).to.equal(200);
    expect(response.body).to
      .deep.equal({ message: 'Pessoa de id 1 atualizada com sucesso' });
  });

  it('Testando a exclusão da pessoa com id 1', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const response = await chai
      .request(app)
      .delete('/people/1');

    expect(response.status).to.equal(200);
    expect(response.body).to
      .deep.equal({ message: 'Pessoa de id 1 excluída com sucesso' });
  });


# Com isso, foram adicionados dois casos de teste:

  > Um caso de teste responsável por atualizar os dados de uma pessoa no banco de dados a partir do endpoint PUT /people/:id: esse teste espera o retorno de um objeto com uma mensagem de sucesso da operação com código de estado 200. Além disso, possui um stub para a função connection.execute(), que retornará um array contendo um objeto com a chave affectedRows com o valor 1;

  > Um caso de teste responsável por excluir uma pessoa do banco de dados a partir do endpoint DELETE /people/:id: esse teste espera o retorno de um objeto com uma mensagem de sucesso da operação com código de estado 200. Além disso, também possui um stub para a função connection.execute(), que retornará um array contendo também um objeto com a chave affectedRows com o valor 1.





# Da mesma forma que fizemos em endpoints anteriores, vamos implementar os novos endpoints adicionando o seguinte código:

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const person = req.body;
    const [result] = await peopleDB.update(person, id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Pessoa de id ${id} atualizada com sucesso` });
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await peopleDB.remove(id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Pessoa de id ${id} excluída com sucesso` });
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: err.sqlMessage });
  }
});


Nesse código adicionamos dois novos endpoints que mapeiam PUT /:id e DELETE /:id. O endpoint mapeado com o método HTTP PUT, recebe o id da pessoa como parâmetro de rota e também um objeto com os dados da pessoa (com o mesmo formato do objeto utilizado anteriormente no cadastro de pessoa). Em seguida é executada a função peopleDB.update(), a qual recebe os dados da pessoa e o id da pessoa a ser alterada. Essa operação retornará uma Promise, que será esperada e desconstruída para obter o result.

É realizada uma verificação na qual é avaliado se a quantidade de linhas afetadas com a operação update é maior do que zero por meio da propriedade affectedRows do objeto result:

  > Caso a condição seja verdadeira, será enviada uma resposta com o status 200 e uma mensagem de sucesso.
  > Se a condição for falsa, será enviada uma resposta com o status 404 e uma mensagem de erro. Em caso de erro durante a requisição, será enviada uma resposta com o status 500 e uma mensagem de erro.
  
O endpoint mapeado com o método HTTP DELETE possui a mesma estrutura do endpoint mapeado com o método HTTP PUT, exceto pelo fato de que não recebe nenhum JSON no corpo da requisição, apenas recebe o id da pessoa como parâmetro de rota.


