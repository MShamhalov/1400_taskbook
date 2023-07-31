const prompt = require('prompt-sync')();
const a = prompt('Enter a: ');
const b = prompt('Enter b: ');
const c = prompt('Enter c: ');

// 1. Решение с конкатенацией и доп. переменной
const d = a + '  ' + b + '  ' + c;
console.log(d);

// 2. Решение с конкатенацией без доп. переменной
// console.log(a + '  ' + b + '  ' + c);

// 3 Решение с шаблонной строкой
// console.log(`${a}  ${b}  ${c}`);

// 3. Решение с stdout
// process.stdout.write(a + '  ');
// process.stdout.write(b + '  ');
// process.stdout.write(c);