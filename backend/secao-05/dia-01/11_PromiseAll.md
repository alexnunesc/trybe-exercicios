# Promise.all.

No JavaScript, utilizar métodos assíncronos em loops nem sempre nos dá o resultado esperado. Isso porque simplesmente usar async/await não garante que o comportamento da função será esperar que todas as promises sejam resolvidas.

Um exemplo fácil para ilustrar a situação, é tentar utilizar async/await dentro de um forEach que utiliza o módulo fs do Node.

Para conseguir executar o código a seguir sem erros, crie um novo diretório chamado promise-all e dentro dele os arquivos file1.txt, file2.txt, file3.txt e usingForEach.js.





Você pode executar o código com o comando node usingForEach.js.

Caso os arquivos .txt estejam vazios, o resultado ao executar o código acima será:

That's all folks!
File 2: 
File 3: 
File 1:


Maravilha, o código rodou sem erros! Mas você reparou que apesar de não acontecer nenhum erro, mesmo com o await antes do forEach, a função não esperou para executar o console.log depois de resolver as promises? 🤔

Para resolver isso, vamos conhecer mais sobre o Promise.all!

# Rodando várias promises com Promise.all.

Como você viu em algumas partes do código do conteúdo de hoje, o Promise.all é um método que recebe um array de Promises e devolve uma única Promise, que será resolvida a partir do retorno de todas as outras. Para facilitar a abstração, vamos a um exemplo!

Imagine que é aniversário de uma amiga e você e mais duas pessoas da galera decidiram fazer um bolo surpresa para ela. Cada um ficou responsável por contribuir com o que podia e, no fim, Sam ficou de comprar os ingredientes, Frodo de emprestar a batedeira e você de fazer o bolo. Nesse caso, os ingredientes e a batedeira seriam como o array de Promises e a feitura do bolo seria o Promise.all, consegue dizer por que?

Isso porque só quando os ingredientes e a batedeira, estiverem com você (as Promises forem resolvidas) é que você poderá fazer o bolo! Se ou os ingredientes ou a batedeira não chegarem até você (equivale a uma das Promises ser rejeitada), seria impossível que o bolo fosse feito (Promise.all seria rejeitada).

Voltando ao código, utilizando o Promise.all em conjunto com um map poderíamos resolver de forma simples o problema do código apresentado anteriormente, pois esse método consegue garantir que o código irá esperar o loop inteiro ser concluído antes de executar as linhas seguintes.

Vamos criar um novo arquivo chamado usingPromiseAll.js para demonstrar essa ideia:


// usingPromiseAll.js

const fs = require('fs').promises;

const files = [
  'file1.txt',
  'file2.txt',
  'file3.txt',
]

async function main() {
  try {
    const promises = files.map(async (file, index) => {
      const contentFile = await fs.readFile(file, 'utf8');
      console.log(`File ${index + 1}: ${contentFile}`)
    }) 
    await Promise.all(promises);
    console.log(`That's all folks!`);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main()

executar o código com node usingPromiseAll.js.

File 3:
File 1:
File 2:
That's all folks!


# Também podemos encadear promises, utilizando o .then e escrever a função acima da seguinte forma:

const fs = require('fs').promises;

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });












