// Tags: prompt, console.log, UPPER_CASE, Math.pow() или **, шаблонная строка, ${}, Math.fixed()

const prompt = require('prompt-sync')();

console.log('Расчет длины окружности и площади круга по известному радиусу');
const radius = prompt('Ввведите радиус: ');

const PI = 3.141592;
const circumference = 2 * PI * radius;
const areaOfACircle = PI * (radius ** 2);

console.log(`Длина окружности круга с радиусом ${radius} равна: ${circumference.toFixed(2)}, площадь круга равна: ${areaOfACircle.toFixed(2)}`);
