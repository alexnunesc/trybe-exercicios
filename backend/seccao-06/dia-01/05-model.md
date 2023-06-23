# Model


# Definindo um model

O model pode ser definido de algumas formas, por exemplo:

> Chamando pela função sequelize.define(modelName, attributes, options);

> Estendendo Model como uma classe e chamando init(attributes, options);

Essa segunda forma é a padrão para utilização do Sequelize, sendo gerada automaticamente quando usamos os comandos do CLI. Ela é utilizada em um paradigma Orientado a Objetos. Como ainda não aprendemos sobre este paradigma, utilizaremos a primeira forma para definição de models, chamando pela função sequelize.define().


# Vamos dar um exemplo para ficar mais evidente! Queremos criar uma tabela users, que contém dados de várias pessoas usuárias.

  > O que fazemos primeiro é criar um model que vai representar uma pessoa em nossa aplicação, ou uma linha na tabela users no nosso banco (vamos ver a tabela sendo criada no próximo tópico).

Crie um arquivo user.model.js na pasta model com o seguinte conteúdo:

// src/models/user.model.js

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return User;
};

module.exports = UserModel;

# Perceba que adicionamos as colunas fullName e email no nosso model, ambas do tipo string.

Note também que o nome do arquivo model é user.model.js e que o nome da função definida nele também está no singular (User). Isso é uma convenção. Geralmente os models são nomeados no singular, já que representam um registro (o equivalente a uma linha) da tabela, enquanto as tabelas são nomeadas no plural. Como não explicitamos o nome da tabela no model, por padrão, o Sequelize coloca no plural o nome do model e o usa como nome da tabela. No nosso caso, o model se chama user e nossa tabela Users, portanto, funciona perfeitamente.

  > Caso seja necessário explicitar o nome da tabela, pode-se fazer isso apenas acrescentando um outro parâmetro na função do model, o tableName, como você pode ver mais nesta parte da documentação.

Observação: Para fins didáticos vamos evitar esse comando, pois o código dos arquivos gerados é pouco legível e segue um padrão que dificulta a escrita de testes, mas para seu conhecimento, é possível gerar um model através do seguinte comando:

> npx sequelize model:generate --name User.model --attributes fullName:string


# Inicializando instâncias com build e create

  Além de possuir o método define e init, a Model do Sequelize contém outras funções que podem ser utilizadas para inicializar uma instância de uma model.

# Utilizando o build
  vamos adicionar uma nova linha no nosso arquivo user.model.js. Ela vai ser responsável por sincronizar a model com os métodos do Sequelize:

  (async () => {
    await sequelize.sync({ force: true });
    // As funções vão aqui
  })();

  **Note que o método sync está sendo chamado com o parâmetro force: true. Isso significa que, toda vez que o servidor for iniciado, a tabela será recriada. Isso é útil para testes, mas não deve ser usado em produção.**

# Vamos então criar a nossa Model com o método build.
  O método build é útil para criar uma instância de um model, mas sem salvá-la no banco de dados. Podemos usar essa função quando queremos criar um objeto que vai armazenar dados temporários, por exemplo:

  const sara = User.build({
    fullName: 'Sara Silva Santos',
    email: 'sara.ss@trybe.com',
  });

  console.log(sara instanceof User); // true
  console.log(sara.fullName); // "Sara Silva Santos"

 Isso não salvar.
 Para salvar.

 await sara.save();
 console.log('Pessoa salva no banco de dados!');

# Criando com create
  Uma forma mais simples de criar uma instância de um model e salvá-la no banco de dados é usando o método create, que combina o build e o save em uma única função:

  const sara = await User.create({
    fullName: 'Sara Silva Santos',
    email: 'sara.ss@trybe.com',
  });

  console.log(sara instanceof User); // true
  console.log(sara.name); // "Sara Silva Santos"

> Note que o método create é assíncrono, pois ele se comunica com o banco de dados para criar a instância do model.

# Atualizando e excluindo dados
Se você precisa atualizar ou excluir dados de um model, pode usar os métodos *update* e *destroy* respectivamente.

# Modificando informações no banco de dados
Quando trocamos informações de um model, precisamos salvar essas alterações no banco de dados. Para isso, podemos usar o método *save*:


  const sara = await User.create({
    fullName: 'Sara Silva Santos',
    email: 'sara.ss@trybe.com',
  });

  console.log(sara.fullName); // "Sara Silva Santos"

  sara.fullName = "Jane Doe";

  // O nome ainda está "Sara Silva Santos" no banco de dados!

  await sara.save();

  // Agora o nome foi atualizado para "Jane Doe" no banco de dados!

# Também é possível atualizar diversos campos de uma vez usando o método set:

  const lucas = await User.create({
    fullName: 'Lucas Silva Santos',
    email: 'lucas.ss@trybe.com',
  });

  lucas.set({
    fullName: "Pedro Silva Santos",
    email: "pedro.ss@trybe.com"
  });

  // O nome ainda está "Lucas Silva Santos" no banco de dados!

  await lucas.save();

  // Agora o nome foi atualizado para "Pedro Silva Santos", e o email para pedro.ss@trybe.com no banco de dados!


## VAMOS USAR ESSE!!!
# **Note que chamar a função save no arquivo, vai atualizar todos os campos que foram alterados, não apenas os que foram modificados através do método set. Para atualizar apenas os campos específicos que foram modificados, podemos usar o método update:**


const jane = await User.create({
fullName: "Jane Doe",
email: "jane.doe@trybe.com",
});

jane.email = "ada.doe@trybe.com";
await jane.update({ fullName: "Ada Joe" });

// O banco de dados agora tem "Ada Joe" para o nome, mas o email ainda é "jane.doe@trybe.com".

await jane.save();
// O banco de dados agora tem "ada.doe@trybe.com" para o email.

# Excluindo informações do banco de dados

> usar o método destroy:

const mario = await User.create({ fullName: "Mario Bors" });

console.log(mario.fullName); // "Mario Bors"

await mario.destroy();

// Agora essa entrada não existe mais no banco de dados!














