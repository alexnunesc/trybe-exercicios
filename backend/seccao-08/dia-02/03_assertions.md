# O que são Type Assertions?

Type Assertion é uma ferramenta que permite à pessoa desenvolvedora forçar o TypeScript a considerar um valor como determinado tipo e desconsiderar eventuais erros gerados em tempo de compilação.

É muito comum usar o Type Assertion quando se está em processo de transição em uma empresa passando uma aplicação JavaScript para TypeScript. Por exemplo, considere a seguinte situação:

type User = {
  id: number,
  name: string,
  address: string,
  addressNumber: number,
};

const UserDB = {
  findById: (userId: number) => ({
    id: userId,
    name: 'Silvana',
  }),
};

function getUser(userId: number): User {
  const user = UserDB.findById(userId);
  user.address = 'Rua São Camilo'; // Error: Property 'address' does not exist on type '{ id: number; name: string; }'.
  return user; // Error: Type '{ id: number; name: string; }' is missing the following properties from type 'User': address, addressNumber
}


# No código acima, utilizamos a tipagem com as chaves que planejamos para User. Em seguida, criamos um objeto com a chave findById para simular a busca em um banco de dados. Por fim, implementamos a função getUser e adicionamos a chave address à pessoa usuária.

Essa é uma implementação comum em JavaScript, no entanto, se uma empresa está mudando uma aplicação JavaScript para TypeScript e você transferir o mesmo código da forma que encontrou, receberá os seguintes erros no VSCode:

Property ‘address’ does not exist on type ‘{ id: number; name: string; }’.

Type ‘{ id: number; name: string; }’ is missing the following properties from type ‘User’: address, addressNumber.

Esse erro ocorre porque, se você não intervém, o TypeScript infere que o objeto retornado é um tipo próprio com apenas as duas chaves originais – e não um valor do tipo declarado acima.

Lembra do tipo unknown? Explicamos que usá-lo significa afirmar que não sabemos que tipo de valor receberemos, mas que nos importamos com essa tipagem e queremos que ela seja consistente – diferentemente de usar o any.

Quando recebemos um resultado cujo tipo desconhecemos, tipar com unknown é uma boa prática. Assim nos forçamos, mais adiante no código, a converter explicitamente o valor recebido para um tipo que conhecemos. Esse processo evita conversões implícitas e erros difíceis de capturar, ou seja, obtém uma tipagem segura.

O Type Assertion é uma ótima ferramenta para resolver situações como essa. Observe o exemplo abaixo, em que o compilador nos obriga a afirmar com todas as letras que o tipo desconhecido é um User:



// ...

// const UserDB = {
  findById: (userId: number): unknown => ({
//     id: userId,
//     name: 'Silvana',
//   }),
// };

// function getUser(userId: number): User {
  const user = UserDB.findById(userId) as User;
//   user.address = 'Rua São Camilo';
//   return user;
// }

const user = getUser(1);
console.log(user); // { id: 1, name: 'Silvana', address: 'Rua São Camilo' }