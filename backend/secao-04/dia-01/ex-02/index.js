const fs = require('fs').promises;
const readline = require('readline-sync');
// const simpsons = 'simpsons.json';

// const test = async() => {
//   try {
//     const data = await fs.readFile('./simpsons.json');
//     const t = JSON.parse(data);
//     t.map((e) => {
//       console.log(`${e.id} - ${e.name}`);
//     })
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// console.log(test());


// 03 ex.

const test = async(id) => {
  
    const data = await fs.readFile('./simpsons.json');
    const t = JSON.parse(data);

    const promsi = new Promise((resolve,  reject) => {
      t.find((e) => {
        if (id === Number(e.id)) {
          console.log(e.id);
          resolve(`${e.id} - ${e.name}`);
        }
        reject(new Error('error'));
      });

    });

    console.log(promsi);
    return promsi;

};


const doSomething = async () => {
  const id = readline.questionInt('Digite um id: ')
  console.log(await test(id));
};

doSomething();
