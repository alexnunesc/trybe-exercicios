// Type Annotations

// Variáveis
// como fazer anotações de tipo nelas.

const fisrtName: string = 'Alex';
const age: number = 25;
const brasilian: boolean = true;


// Funções
// fazemos a tipagem dos valores de entrada(parâmetros)
// e de saída (retorno da função).

function greet(name: string) {
  console.log(`olá, ${name.toUpperCase()}!`);
};
greet('Alex');

function getFavoriteNumber(): number {
  return 26;
};

//  Quando ainda não há retorno? 

function greets(name: string): void {
  console.log(`Olá, ${name.toUpperCase()}!`);
}

// Lisstas e objetos
// qualquer vlor que não seja um tipo primitivo.
// pode usar vírgular e ponto é vírgular tbm.

function printPersonalInfo(data: { name: string, birthYear: number }) {
  console.log(`${data.name} was born in ${data.birthYear}.`);
}
printPersonalInfo({ name: 'Rogerinho', birthYear: 1978 });

// Tipando arrays.

const evenNumbers: number[] = [2, 4, 6];
const vowel: string[] = ['a', 'e', 'i', 'o', 'u'];
const booleanValues: boolean[] = [true, false];

//  Assim vc deve adicinaor novos valores que façam sentido para o tipo.
evenNumbers.push(8) // Funciona
evenNumbers.push('8') // Erro









