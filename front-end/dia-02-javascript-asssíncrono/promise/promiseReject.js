// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

//promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

// promise rejeitada retornando um objeto de erro
const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
    }, 1000);
  });

resolvedPromise()
  .then((response) => {
    console.log(`resolvendPromise: o número gerado é ${response}`);
  });

rejectedPromise().then((response) => {
  console.log(`rejectedPromise: O número gerado é ${response}`);
})
.catch((error) => {
  console.log(`rejectedPromise: ${error.message}`);
});
