const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];

const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corretorAutomaticoDeExame = (arrayCerto, arrayRes) => {
  let nota = 0;
  for (let i = 0; i < arrayCerto.length; i += 1) {
    if (arrayCerto[i] === arrayRes[i]) {
      nota += 1
    } else  if (arrayRes[i] === 'N.A') {
      nota += -1;
    } else {
      nota -= 0.5;
    }
    console.log(nota);
  }
  return `A nota final foi  de: ${nota} pontos.`;
}
console.log(corretorAutomaticoDeExame(RIGHT_ANSWERS, STUDENT_ANSWERS));

/* const hofCorretor = (n1, n2, n3) => n3 = (n1, n2) => n3;

console.log(hofCorretor(RIGHT_ANSWERS, STUDENT_ANSWERS, corretorAutomaticoDeExame())); */