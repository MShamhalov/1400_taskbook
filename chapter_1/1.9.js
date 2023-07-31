const prompt = require('prompt-sync')();

// 1 Решение с полученим данных из консоли
console.log('Введите число: ');
const num = prompt();
console.log(num + ' - вот какое число вы ввели');

// 2 Альтернативное решение:
// const num = prompt('Введите число: ');
// console.log(num + ' - вот какое число вы ввели');
