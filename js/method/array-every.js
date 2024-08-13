/*
    every grazina reiksme true ar false jeigu atitinka tikrinima
*/

const a = [10, -2, 3.14, NaN, Infinity];
console.log(a.every(n => typeof n === 'number'));

const b = [10, '-2', 3.14, NaN, Infinity];
console.log(b.every(n => typeof n === 'number'));

const c = [10, '-2', 3.14, NaN, Infinity];
console.log(c.every(n => typeof n === 'number' || typeof n === 'string'));

const d = [10, '-2', true, 3.14, NaN, Infinity];
console.log(d.every(n => typeof n === 'number' || typeof n === 'string'));

const marks = [10, 2, 8, 4, 6];
console.log(marks.every(n => Number.isInteger(n) && n > 0 && n < 11));

console.log('----------------method some (rare use case)---------------------');

const e = [10, 2, 8];      // validacija ar viena nedaug reiksmiu atitinka salyga
console.log(e.some(n => typeof n === 'number'));

const f = [10, '2', 8];
console.log(f.some(n => typeof n === 'number'));

const g = [10, 2, 8];
console.log(g.some(n => typeof n === 'number'));