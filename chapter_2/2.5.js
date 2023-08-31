const prompt = require('prompt-sync')();

console.log('Расчет диаметра окружности');
const radius = prompt('Введите радиус окружности: ');
const diametr = radius * 2;

// 1 Решение 
console.log('Диаметр окружности: ' + diametr);

// Добавить числовую валидацию