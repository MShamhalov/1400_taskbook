const prompt = require('prompt-sync')();

console.log('Расчет периметра квадрата');
const side = prompt('Введите сторону квадрата: ');

// 1 Решение 
const perimetr = side * 4;

console.log('Периметр квадрата равен: ' + perimetr);

// Добавить числовую валидацию