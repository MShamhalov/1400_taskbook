const prompt = require('prompt-sync')();

console.log('\nВычисление значения функции a^2 + 10/№(a^2 +1)');
const a = prompt('Введите a: ');

// 1 Решение 
const result = Math.pow(a, 2) + 10/Math.sqrt(Math.pow(a, 2) + 1);

// 2 Решение
// const numerator = a ** 2 + 10;
// const denominator = Math.sqrt(a ** 2 + 1);
// const result = numerator/denominator;

console.log(result);
