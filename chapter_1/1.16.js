const prompt = require('prompt-sync')();

const t = prompt('Enter t: ');
const v = prompt('enter v: ');
const x = prompt('enter x: ');
const y = prompt('enter y: ');

// 1 Решение при помощи конкатенации
let string = '';
string += 'a) 5 10 \t';
string += 'b) 100 ' + t + '\t';
string += 'c) ' + x + ' 25\n';
string += '   7 см\t\t'
string += '   1949 ' + v + '\t';
string += '   ' + x + ' ' + y;
console.log(string);

// 2 При помощи шаблонной строки
// let str = `а) 5 10\t\tb) 100 ${t} \tc) ${x} 25\n`;
//    str += `   7 см\t\t   1949 ${v}\t   ${x} ${y}`;
// console.log(str);
