const prompt = require('prompt-sync')();

// 1 Решение с конкатенацией
console.log('Введите свое имя: ');
const greetings = prompt();
console.log('Привет, ' + greetings + '!');

// 2 Решение с шаблонной строкой
// const greetings = prompt('Введите свое имя: ');
// console.log(`Привет, ${greetings}!`);
