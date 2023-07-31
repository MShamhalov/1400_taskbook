const prompt = require('prompt-sync')();

const a = prompt('Enter a: ');
const b = prompt('enter b: ');
const x = prompt('enter x: ');
const y = prompt('enter y: ');

// 1 Решение при помощи конкатенации
let string = '';
string += 'а) 2 кг \t';
string += 'б) ' + a + ' 1\t\t';
string += 'в) ' + x + ' ' + y + '\n';
string += '   ';
string += '13 17\t';
string += '   ';
string += '19 ' + b + '\t\t';
string += '   5 ' + y;
console.log(string);

// 1 Решение при помощи шаблонной строки
console.log(`а) 2 кг \tб) ${a} 1 \t\tв) ${x} ${y}`);
console.log(`   13 17 \t   19 ${b}\t\t   5 ${y}`);
