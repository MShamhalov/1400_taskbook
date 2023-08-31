const prompt = require('prompt-sync')();

const EARTH_RADIUS = 6350;
console.log('Расчет расстояния от линии горизонта до точки над землей введенной с клавиатуры');
const height = prompt('Введите высоту наблюдателя над землей (км): ');
const distance = Math.sqrt(2 * EARTH_RADIUS * height + (height ** 2));
console.log('Расстояние от точки на выстое ' + height + ' до горизонта: ' + distance);
