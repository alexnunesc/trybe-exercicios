# Implementando um CRUD do zero - Parte 4 - Camada Service.


Para inserir uma nova linha na tabela de pessoas passageiras, certificaremos que os dados são válidos de uma forma qualitativa. No nosso cenário, estabeleceremos as seguintes regras de negócio:

  > 1. 🔷 O nome da pessoa passageira é obrigatório e deve ter no mínimo 3 caracteres.

  > 2. 🔷 O e-mail da pessoa passageira é obrigatório e deve ter o formato de um e-mail.

  > 3. 🔷 O telefone da pessoa passageira é obrigatório e deve possuir no mínimo 9 caracteres e no máximo 20 caracteres.

Para facilitar o processo de validação dessas regras vamos continuar usando o Joi, ele nos permite implementar essa lógica de uma forma mais organizada através dos moldes (schemas).


# Definindo o schema
Vamos voltar ao arquivo src/services/validations/schemas.js e adicionar o seguinte conteúdo:

const addPassengerSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(9).max(20).required(),
});

> Precisamos agora escrever uma função que usa esse schema para validar um objeto.

# Definindo o método que realiza a validação
Importe o objeto addPassengerSchema e adicione a nova função validateNewPassenger no arquivo src/services/validation/validationInputValues.js.

#
const { addPassengerSchema, idSchema } = require('./schemas');

// ...

const validateNewPassenger = (name, email, phone) => {
  const { error } = addPassengerSchema
    .validate({ name, email, phone });
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  
  return { type: null, message: '' };
};

// module.exports = {
// ...
  validateNewPassenger,
// };
#

> erceba que usamos um if para tratar o retorno do schema, se for identificado que o objeto informado não é válido vamos retornar o objeto com o atributo type igual a INVALID_VALUE e a o valor do atributo message será a mensagem de erro que o próprio JOI gera. Caso o objeto seja válido a função retorna um objeto com o atributo type igual a null, o que indica que não aconteceu nenhum erro, e respectivamente o atributo message sendo uma string vazia.

# Implementando a função createPassenger
Agora vamos implementar a função createPassenger no arquivo src/services/passenger.service.js

#
// ...

const createPassenger = async (name, email, phone) => {
  const error = schema.validateNewPassenger(name, email, phone);
  if (error.type) return error;

  const newPassengerId = await passengerModel.insert({ name, email, phone });
  const newPassenger = await passengerModel.findById(newPassengerId);

  return { type: null, message: newPassenger };
};

// module.exports = {
// ...
     createPassenger,
// };
#

> A função createPassenger recebe como parâmetro o nome, e-mail e telefone de uma pessoa passageira, e passa esses valores para a função validateNewPassenger na primeira linha da função. Na linha seguinte, existe um if para avaliar se o valor de error.type é diferente de null. Caso seja verdadeiro, será retornado o objeto de erro para o componente que executou função (veremos no conteúdo do próximo dia que será responsabilidade da camada Controller lidar com esse retorno para responder a requisição).

> Caso os valores sejam válidos, é realizado a inserção dos dados, retornando o id da pessoa passageira que foi inserida. Esse valor é armazenado na variável newPassengerId, onde é usado para buscar a pessoa passageira pelo seu respectivo id. O objeto retornado (newPassenger) é atribuído a chave message no objeto de retorno do serviço e o atributo type sendo igual a nulo. (⏮ Lembrete: sempre que o type for igual a nulo é um sinal que a operação deu certo!).

# Testando
Agora é hora de escrever o teste para essa função. Ela possui mais cenários que a função findById. Vamos enumerar quatro possíveis cenários:

  > Enviar um nome inválido; (❌ Cenário de erro)
  > Enviar um e-mail inválido; (❌ Cenário de erro)
  > Enviar um telefone inválido; (❌ Cenário de erro)
  > Enviar todos os dados válidos (😊 Caminho feliz);

Portanto, vamos adicionar um mock que vai atuar como nosso valor inválido e usar os mocks válidos para nome, e-mail e telefone que já foram definidos anteriormente e exportar todas essas variáveis.

#
//  tests/unit/services/mocks/passenger.service.mock.js

const invalidValue = 'a';
// ...

// module.exports = {
  invalidValue,
  validName,
  validEmail,
  validPhone,
  // ...
// };
#


# Como temos 3 cenários de erro e um cenário que é o caminho feliz, vamos realizar a separação desses cenários em dois describes distintos. O primeiro irá agrupar todos os its dos cenários de erros e o segundo apenas o cenário do caminho feliz. Para isso adicione o seguinte código em tests/services/passenger.service.test.js.

⚠️ **Atenção**: Esses novos describes estão aninhados dentro do describe ‘Verificando service pessoa passageira’.



Podemos perceber que os its do describe ‘cadastro de uma pessoa passageira com valores inválidos’ executam a função passengerService.createPassenger() passando dentro de cada it respectivamente um valor inválido para os parâmetros name, email e phone.

Logo, a asserção é feita para verificar se a mensagem retornada é equivalente ao erro gerado pelo valor inválido de cada atributo. Por exemplo, ao enviar o name com o valor da variável invalidValue o objeto de erro é retornado com a mensagem '"name" length must be at least 3 characters long' devido ao uso do min(3) no schema addPassengerSchema. Quando enviamos a mesma variável como valor do telefone, a mensagem já difere, pois o mínimo esperado de caracteres é 9.

Nesse caso, chegamos a conclusão que os testes não estão refletindo todos os cenários possíveis para cada campo. Contudo para simplificar o texto desta lição, optaremos por fazer apenas esses 3 casos de teste.

Tenha em mente que existe espaço para escrever mais its para testar todos os cenários possíveis definidos no schema addPassengerSchema.

👀 Para ficar atento: Perceba que nos cenários onde enviamos dados inválidos não foi necessário definir um dublê, pela mesma razão do teste do cenário da função findById ao enviar um id inválido. Se a função não passa por essas validações, ela nunca chegará a interagir com o model e, portanto, não é necessário implementar um dublê. 😉

Em relação ao segundo describe, ele testa o caminho feliz 😊 da função, ou seja, quando a função recebe todos os parâmetros válidos. Portanto, agora é preciso fazer o arranjo para criar um dublê da função passengerModel.insert(), retornado o valor 1 simulando o id gerado pelo banco no momento da inserção.

Também será necessário um outro dublê para passengerModel.findById() retornando o objeto de uma pessoa passageira cadastrada. Na sequência chamamos a função passengerService.createPassenger() e pegamos o seu retorno para fazer as asserções:

🔷 o atributo type é igual a null

🔷 o atributo message é igual ao que foi definido no dublê de passengerModel.findById().


