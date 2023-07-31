const prompt = require('prompt-sync')();

const a = prompt('Enter a: ');
const b = prompt('Enter b: ');
const c = prompt('Enter c: ');
const d = prompt('Enter d: ');

// 1 Решение с конкатенацией строк
const e = a + ' ' + b + ' ' + c + ' ' + d;
console.log(e);

// 2 Решение с конкатенацией строк без создания доп. переменной
// console.log(a + ' ' + b + ' ' + c + ' ' + d);

// 3 Решение с использованием шаблонной строки
// console.log(`${a} ${b} ${c} ${d}`);
