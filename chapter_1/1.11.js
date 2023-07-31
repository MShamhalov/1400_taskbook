const prompt = require('prompt-sync')();

console.log('Введите название: ');
const team = prompt();
console.log(team + ' - чемпион!');

// 1 Решение с использованием вывода prompt
// const team = prompt('Введите название: ');
// console.log(team + ' - чемпион!');

// 2 Решение в одну строку
// console.log(prompt('Введите название: ') + ' - чемпион!');