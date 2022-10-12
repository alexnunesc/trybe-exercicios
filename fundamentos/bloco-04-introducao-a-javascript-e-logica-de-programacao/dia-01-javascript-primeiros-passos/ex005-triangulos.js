const a = 90;
const b = -40;
const c = 50;

let res;
if (a || b || c <= 0) {
  res =  'error, angulo invalido'
} else {
  if (a + b + c != 180) {
    res = false;
  } else {
    res = true;
  }
  
}
console.log(res)
