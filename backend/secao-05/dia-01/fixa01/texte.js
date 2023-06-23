/* 
  Com o módulo fs, crie uma função que lê e escreve vários arquivos ao mesmo tempo.
  Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
  Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'], faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt. Por exemplo, para a string “Finalmente”, o nome do arquivo é file1.txt.
  Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt.
  O conteúdo do arquivo fileAll.txt deverá ser Finalmente estou usando Promise.all !!!.
*/

const fs = require('fs').promises;

const fileNames = [
  'file1.txt',
  'file2.txt',
  'file3.txt',
  'file4.txt',
  'file5.txt',
];

async function arrayToFile() {

  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  // Utilizar a função map para criar um Array de Promises, uma para cada arquivo.
  const createFilesPromises = strings
    .map((string, index) => fs.writeFile(`./file${index + 1}.txt`, string));

  // Utilizar Promise.all para aguardar a escrita de todos os arquivos - ou seja, a resolução de todas as promises.
  await Promise.all(createFilesPromises);

  // Realizar a leitura dos arquivos criados.
  // aqui usamos a mesma estratégia
  // criamos uma promise de leitura para cada item no array `fileNames`
  const readFilesPromises = fileNames
      .map((fileName) => fs.readFile(fileName, 'utf-8'));

  // e aqui esperamos que todas as leituras sejam resolvidas
  const fileContents = await Promise.all(readFilesPromises);

  console.log(fileContents); 
  // Concatenar o conteúdo dos arquivos e criar o arquivo novo.
  const newFileContent = fileContents.join(' ');

  await fs.writeFile('./fileAll.txt', newFileContent);
}

arrayToFile();
