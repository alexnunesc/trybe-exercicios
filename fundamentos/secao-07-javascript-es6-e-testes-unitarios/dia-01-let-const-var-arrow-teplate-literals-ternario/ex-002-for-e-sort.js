const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (odds) => {

  // Seu código aqui.
  let t = odds.length;

  for (let i = 0; i < t; i += 1) {
    for (let j = 0; j < t; j += 1) {
      if (odds[j] > odds[j + 1]) { //se odds[j] > proxima posição
        let c = odds[j] //c = odds na primeira posição
        odds[j] = odds[j + 1] // odds na posição 1 = odds na posição 2
        odds[j + 1] = c; // por fim odds = a posição j atual

        //EX: [ 3 , 1 , 2, 5, 4] >> [1, 3 , 2 , 5, 4] >> [1, 2, 3 , 5 , 4] >> [1, 2, 3, 5 , 4 ] >> [1 , 2, 3, 4, 5]
      }
    }
  }
  return odds;
};

console.log(sortOddsAndEvens(oddsAndEvens));
// será necessário alterar essa linha

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = oddsAndEvens.sort(function (a, b) {
  return a-b
});
console.log(sortOddsAndEvens); // será necessário alterar essa linha 😉