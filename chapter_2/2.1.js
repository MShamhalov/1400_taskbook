const prompt = require('prompt-sync')();

// а)
console.log('\nВычисление значения "y" по формуле y = 17x^2 - 6x + 13');
console.log('Введите x: ');
const x = prompt();
if (!isNumber(x)) {
    console.log('Ошибка, выполнение прервано, введено не число!');
    return;
}

// 1 Решение с использованием встроенной библиотерки Math
let y = 17 * Math.pow(x, 2) - 6 * x + 13;

// 2 Решение с использованием сокращенного синтаксиса возведения в степень
// const y = 17 * x ** 2 - 6 * x + 13;

console.log('y = ' + y);

// б)
console.log('\nВычисление значения "y" по формуле y = 3a^2 + 5a - 21');
console.log('Введите a:');
const a = prompt();
if (!isNumber(a)) {
    console.log('Ошибка, выполнение прервано, введено не число!');
    return;
}

// 1 Решение с использованием встроенной библиотеки Math
y = 3 * Math.pow(3, 2) + 5 * a - 21;

// 2 Решение с использованием сокращенного синтаксиса возведения в степень
// y = 3 * 3 ** 2 + 5 * a - 21;

console.log('y = ' + y);

function isNumber(symbol) {
    return !isNaN(+symbol) && isFinite(+symbol);
}
