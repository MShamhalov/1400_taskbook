const prompt = require('prompt-sync')();

// 1 Решение с свойным выводом
console.log('Введите число: ');
const currentNumber = prompt();
const nextNumber = Number(currentNumber) + 1;
const previousNumber = currentNumber - 1;
console.log('Следующее за числом ' + currentNumber + ' число - ' + nextNumber);
console.log('Для числа ' + currentNumber + ' предыдущее число - ' + previousNumber);

// 2 Решение с конкатенацией строк
// const currentNumber = prompt('Введите число: ');
// const nextNumber = Number(currentNumber) + 1;
// const previousNumber = currentNumber - 1;
// let finalString = 'Следующее за числом ' + currentNumber + ' число - ' + nextNumber + '\n';
// finalString += 'Для числа ' + currentNumber + ' предыдущее число - ' + previousNumber;
// console.log(finalString);

// 3 Решение с шаблонной строкой
// const currentNumber = prompt('Введите число: ');
// console.log(`Следующее за числом ${currentNumber} число - ${+currentNumber + 1}`);
// console.log(`Для числа ${currentNumber} предыдущее число - ${currentNumber - 1}`);


// 4 Рещение с валидацией
// const currentNumber = prompt('Введите число: ');
// if (!isNaN(+currentNumber) && isFinite(+currentNumber)) {
//     console.log(`Следующее за числом ${currentNumber} число - ${+currentNumber + 1}`);
//     console.log(`Для числа ${currentNumber} предыдущее число - ${currentNumber - 1}`);
// } else {
//     console.log('!Введено не число!');
// }
