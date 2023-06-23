# Generics

1. Você adiciona a palavra Type entre os símbolos <> após o nome da função. A sintaxe fica <Type>. Uma convenção bastante difundida é usar uma letra só em vez da palavra completa. Exemplo: T, U, B, e por aí vai.

2. A partir de agora, dentro da função e em seus parâmetros e retorno, existe um tipo chamado Type, que você pode usar para fazer todas as tipagens, como vemos acima.

// Aqui temos a nossa função com um tipo genérico. 
// Repare que esse tipo, como qualquer outro, pode vir como um array nos parâmetros.

function countBreads<Type>(breads: Type[]): number {
  return breads.length;
}


# Exemplo:

// Aqui temos a nossa função com um tipo genérico. 
// Repare que esse tipo, como qualquer outro, pode vir como um array nos parâmetros
function countBreads<Type>(breads: Type[]): number {
  return breads.length;
}

type CommonBread = {
  name: string,
  alergenics: string[]
};

// ------------------

const myBreadsAsStrings = ['Pão de sal', 'Pão doce'];
console.log(countBreads<string>(myBreadsAsStrings));

// ------------------

const paoDeSal: CommonBread = {
  name: 'Pão de sal',
  alergenics: ['Gluten'],
};

const paoDoce: CommonBread = {
  name: 'Pão doce',
  alergenics: ['Gluten'],
};

const myBreads = [paoDeSal, paoDoce];
console.log(countBreads<CommonBread>(myBreads));


# Função com varíos parâmetros.

function sendAlertAboutAllergens<BreadType, AllergensType>(
  breads: BreadType[],
  allergens: AllergensType[],
): string {
  return `Atenção! ${breads.join(' e ')} têm como alergênicos: ${allergens.join(', ')}`;
}

console.log(sendAlertAboutAllergens<string, string>(['Pão de sal', 'Pão doce'], ['Gluten']));

const allergensIds = [123, 445, 221];
console.log(sendAlertAboutAllergens<string, number>(['Pão de sal', 'Pão doce'], allergensIds));



# Como tipar, de forma genérica, funções que retornam Promises


// import axios from 'axios';

type Bread = {
  name: string,
  ingredients: string[],
  gluten: boolean,
};

type Flour = {
  brand: string,
  description: string,
  gluten: boolean,
};

async function fetchApi<ResponseType>(endpoint: string): Promise<ResponseType> {
  const { data } = await axios.get<ResponseType>(`http://localhost:3001/${endpoint}`);
  return data;
}

fetchApi<Bread[]>('breads');
fetchApi<Flour[]>('flours');






