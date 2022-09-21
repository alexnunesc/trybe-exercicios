const currentHour = 14;

let msg = "";

if (currentHour >= 22) {
  msg = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22) {
  msg = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18) {
  msg = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour > 11 && currentHour < 14) {
  msg = 'Hora do almoço!!!';
} else if (currentHour >= 4 && currentHour <= 11 ) {
  msg = 'Hmmm, cheiro de café recém-passado';
}

console.log(msg)