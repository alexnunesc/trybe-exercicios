const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const turnoNoite = (objeto, chave, valor) => {
  objeto[chave] = valor;
}
turnoNoite(lesson2, 'turno', 'noite');

const listKeys = (obj) =>  {
  let keys = Object.keys(obj)
  return keys;
}

const tamanhoObj = () => {

}

const valores = (obj) => {
  let value = Object.values(obj)
}

const alissons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(alissons);