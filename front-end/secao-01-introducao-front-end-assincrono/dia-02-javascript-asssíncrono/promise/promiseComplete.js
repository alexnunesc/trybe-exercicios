// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

const randomPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNmber = generateRandomNumber();
    randomNmber % 2 === 0 ? resolve(randomNmber) : reject(new Error(`Números impares são invalidos`));
  }, 1000);
});

randomPromise()
  .then((response) => {
    console.log(`O número ${response} é valido`);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => console.log('Fim da execução da segunda promise.'));

  //sera executado antes
  console.log(
    `Esse número não foi gerado por um código assíncrono: ${generateRandomNumber()}`
  );
  