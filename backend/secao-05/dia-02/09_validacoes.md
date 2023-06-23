# Validações.


## Estabelecendo o contrato na função requestTravel
> Antes de definirmos as validações, precisamos estabelecer o que será retornado quando a função requestTravel for solicitada com os dados corretos. Para isso, vamos seguir o padrão de contrato que usamos nas funções findAll, findById e createPassenger. Quando tudo acontecer no caminho feliz, a função requestTravel deve retornar o type sendo igual a null e message sendo o objeto da viagem cadastrada (travel).

  return { type: null, message: travel };




# Se você rodar o teste agora, os dois primeiros testes vão passar, pois ambos são contemplados pelo caminho feliz. 🥳

Porém, o teste do cenário que envia o endereço de partida igual ao endereço de destino não passa. Isso aconteceu porque a função requestTravel ainda não faz nenhum tipo de validação dos dados que chegam por parâmetro antes de fazer a inserção. Portanto, vamos mudar essa função para que ela siga as seguintes regras de negócio:

  > 🔷 O id da pessoa passageira é obrigatório e dever ser um número inteiro com o valor mínimo igual a 1.

  > 🔷 O Endereço de partida (startingAddress) é obrigatório e deve ter no mínimo 3 caracteres.

  > 🔷 O Endereço de destino (endingAddress) é obrigatório e deve ter no mínimo 3 caracteres.

  > 🔷 O Endereço de partida (startingAddress) não pode ser igual ao endereço de destino (endingAddress).

  > 🔷 Os pontos de parada (waypoints) devem estar em uma array onde cada elemento deve seguir o seguinte formato:

  > 🔶 Deve ter o atributo address sendo obrigatório e deve ter no mínimo 3 caracteres.

  > 🔶 Deve ter o atributo stopOrder onde o valor deve ser um número inteiro com o valor mínimo igual a 1.

  > 🔶 Os pontos de parada são opcionais (ou seja é possível fazer uma viagem enviando apenas o ponto de partida e o ponto de destino).



# Definindo o schema
Já utilizamos o Joi anteriormente para definir algumas validações. Vamos fazer o mesmo aqui e adicionar novos esquemas no arquivo src/services/validations/schemas.js para refletir essas novas regras de negócios.

#
const pointSchema = Joi.string().min(3).required();

const waypointSchema = Joi.object({
  address: pointSchema,
  stopOrder: Joi.number().integer().min(1) });

const addRequestTravelSchema = Joi.object({
  passengerId: idSchema,
  startingAddress: pointSchema,
  endingAddress: pointSchema.invalid(Joi.ref('startingAddress')),
  waypoints: Joi.array().items(waypointSchema),
});
#


Perceba aqui que temos algumas novidades nesse código em relação ao uso do JOI. 🤔

> Uma das novidades foi definir um schema reaproveitável (pointSchema) para a regra de negócio em comum entre o atributo address do waypointSchema, e os atributos startingAddress e endingAddress do travelSchema. Ou seja, em vez de repetir o trecho de código Joi.string().min(3).required() na frente desses atributos, definimos esse trecho como uma variável e reaproveitamos esse variável nestes atributos.

> Outra novidade foi como fizemos para validar se o endereço de partida é diferente do endereço de destino. Para isso usamos o trecho pointSchema.invalid(Joi.ref('startingAddress')) que utiliza as validações já definidas em pointSchema e acrescenta uma nova validação, através da função Joi.ref(), para comparar o valor deste atributo com o atributo startingAddress e se forem iguais o schema retorna uma mensagem de erro que informa que o valor do atributo endingAddress é inválido.

> Por último, mas não menos importante, definimos que o atributo waypoints deve ter o formato de um array (Joi.array()) e que os elementos que fazem parte dessa array devem seguir o schema waypointSchema.

Esses recursos do JOI foram definidas para fins didáticos, mas você também poderá definir vários outros tipos de validações para suas regras de negócio. Para conhecer outros recursos, acesse a documentação do JOI.
  > https://joi.dev/api/?v=17.6.0


# Utilizando o schema para validar
Da mesma forma, que fizemos para escrever as validações utilizadas no método findById e createPassenger vamos estabelecer o contrato no cenário de erro para a solicitação de uma viagem utilizando o schema que acabamos de criar.

#
  // src/services/validations/validationsInputValues.js

  const { addPassengerSchema, idSchema, addRequestTravelSchema } = require('./schemas');

  // ...
  const validateRequestTravelSchema = (passengerId, startingAddress, endingAddress, waypoints) => {
    const { error } = addRequestTravelSchema
      .validate({ passengerId, startingAddress, endingAddress, waypoints });
    if (error) return { type: 'INVALID_VALUE', message: error.message };

    return { type: null, message: '' };
  };

  // module.exports = {
    // ...
    validateRequestTravelSchema,
  // };
#

# Veja que a função validateRequestTravelSchema verifica se os campos informados estão de acordo com as validações que definimos no schema addRequestTravelSchema. Caso algum problema seja identificado, um objeto de erro é retornado com o seguinte formato:

{ 
  "type": "INVALID_VALUE", 
  "message": "\"endingAddress\" contains an invalid value" // exemplo de erro no endingAddress
}

É importante que você esteja ciente de que a propriedade message no exemplo acima diz respeito a um possível problema que poderia ocorrer caso o endingAddress fosse definido de forma idêntica ao startingAddress pela pessoa passageira. No entanto, vale ressaltar que a mensagem será definida de acordo com o campo que estiver incorreto e com o erro específico.

Como exemplo, a mensagem (“startingAddress” contains an invalid value’) poderia ser exibida caso o startingAddress fosse composto por menos de três caracteres.

# Utilizando a validação na função requestTravel
Agora que implementamos a função que define o contrato de erro, precisamos adicionar essas validações ao nosso serviço. Para isso, vamos voltar no arquivo passenger.service.js e fazer a seguinte alteração na função requestTravel:







