const estudantes = require('./estudantes');

const reportStatus = (name, students) => {
  const studentInfo = students.find((student) => student.nome === name);
  return studentInfo.materias.map((materia) => (
    `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
  ));
};

console.log(reportStatus('Natalia', estudantes));

/* O código teve uma redução drástica no número de linhas! Primeiro, fizemos um find para buscar e retornar os dados do estudante. O objeto foi retornado e salvo na variável studentsInfo, depois o map foi usado para percorrer as matérias do objeto retornado e salvar o que se queria em um array da forma desejada. */