// Tags: prompt, console.log, Math.pow() (**), шаблонная строка (${}), Math.fixed()

const prompt = require('prompt-sync')();

// a)
console.log('Вычисление значения функции z = 2x^3 - 3,44xy + 2,3x^2 - 7,1y + 2');
let x = prompt('Введите x: ');
const y = prompt('Введите y: ');

const z = 2 * x**3 - 3.44*x*y + 2.3 * x**2 - 7.1*y + 2;

console.log(`Результат вычисления: ${z.toFixed(3)}`);

// b)
console.log('Вычислить значение функции x = 3,14(a + b)^3 + 2,75b^2 - 12,7a - 4,1');
const a = prompt('Введите a: ');
const b = prompt('Введите b: ');

x = 3.14*(a + b)**3 + 2.75*b**2 - 12.7*a - 4.1;

console.log(`Результат вычисления: ${x.toFixed(3)}`);
