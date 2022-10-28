const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (n) => n % 3 === 0 && n % 5 === 0;

const res = numbers.find(findDivisibleBy3And5);

console.log(res);