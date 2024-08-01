import sum from './sum.js';
import diff from './diff.js';
import { multi } from './multi.js';
import { div } from './div.js';

//import { plus as prideti, minus, star, slash } from './math.js';
import * as matke from './math.js';

console.log(sum(7, 5));
console.log(diff(7, 5));
console.log(multi(7, 5));
console.log(div(7, 5));
console.log(' ');
console.log(matke.plus(7, 5));
console.log(matke.minus(7, 5));
console.log(matke.star(7, 5));
console.log(matke.slash(7, 5));
