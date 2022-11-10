
// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
      //console.log(randomNumber);
    }, 1000);
  });
  
  resolvedPromise().then((response) => {
    console.log(`O resulto é ${response}`);
  });
