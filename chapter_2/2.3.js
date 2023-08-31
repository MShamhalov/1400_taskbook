const prompt = require('prompt-sync')();

// а)
console.log('\nВычисление значения функции №(2a + sin|3a| / 3.56)');
const a = prompt('Введите a: ');
console.log(Math.sqrt(2*a + Math.sin(Math.abs(3*a))/3.56));

// б)
console.log('\nВычисление значения функции sin(3.2 + №(1+x) / |5x|)');
const x = prompt('Введите x: ');
console.log(Math.sin(3.2 + Math.sqrt(1 + x)/Math.abs(5 * x)));

// Добавить валидацию на числа!