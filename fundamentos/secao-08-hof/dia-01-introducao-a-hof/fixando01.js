const acordar = (p1) => p1;
const cafe = (p2) => p2;
const dormir = (p3) => p3;

const res = (f1) => {
  if (f1 === acordar) {
    return f1('Acordando!!');
  } else if (f1 === cafe) {
    return f1('Bora tomar café!!');
  } if (f1 === dormir) {
    return f1('Partiu dormir!!');
  } else {
    return 'Error função invalida!';
  }
};
// Ao chamar a função doingThings:
console.log(res(cafe));

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!