let n = 5;
let fat = 1;

for (let index = n; index > 1; index -= 1) {
  fat *= index;
  
}
/* for (let i = n; i >= n.length -1; i-= 1) {
  f *= i;
} */

console.log(fat);