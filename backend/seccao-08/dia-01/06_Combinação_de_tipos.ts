//  Combinação de tipos.

//  Union Types.

// pode ser de um OU outro tipo.
function printId(id: number | string) {
  console.log(`Your ID is: ${id}`);
}

printId(101);
printId("202");

// Pra uada metodos que não valem para os dois tipos.

function printIds(id: number | string) {
  if (typeof id === "string") {
    return console.log(id.toUpperCase());
  }
  return console.log(id);
}

printIds(101);

//  Type Aliases. Type é uma palavra reservada.

type PersonalInfo = {
  name: string;
  birthYear: number;
};

function printPersonalInfo(data: PersonalInfo) {
  console.log(`${data.name} was born in ${data.birthYear}.`);
}

printPersonalInfo({ name: 'Rogerinho', birthYear: 1978});


// Type Annotation vs Inferência de tipos
// quando os valores são claros não necesidade de tipgem.

const person = {
  fistName: 'Frodo',
  lastName: 'Baggins',
  age: 52,
}

console.log(typeof person.fistName); // "string"


