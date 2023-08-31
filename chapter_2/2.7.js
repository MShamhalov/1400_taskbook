const prompt = require('prompt-sync')();

console.log('Расчет объема куба и его площадь его боговой поверхности по известному ребру');
const edge = prompt('Введите ребро куба: ');

// Валидация числового значения
const volume = edge ** 3;
const sq = edge ** 2;

console.log(`Объем куба: ${volume}, площадь боковой поверхности: ${sq}`);