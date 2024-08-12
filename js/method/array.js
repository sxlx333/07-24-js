/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/
console.log(Array.isArray);
console.log(Array.isArray([]));
console.log(Array.isArray([1]));
console.log(Array.isArray(['asd']));
console.log(Array.isArray());
console.log(Array.isArray(2));
console.log(Array.isArray('asd'));
console.log(Array.isArray(true));
console.log(Array.isArray({}));
console.log(Array.isArray(null));

console.log();
console.log(Array.prototype.fill);   // uzpildo
const simtasZuikiu = new Array(100).fill(0);
console.log(simtasZuikiu);

for (let i = 0; i < simtasZuikiu.length; i++) {
    simtasZuikiu[i] = i;
}
console.log(simtasZuikiu);






console.log(Array.prototype.at);
console.log([10, 2, 8, 4, 6].at(0));
console.log([10, 2, 8, 4, 6].at(1));
console.log([10, 2, 8, 4, 6].at(2));
console.log([10, 2, 8, 4, 6].at(3));
console.log([10, 2, 8, 4, 6].at(4));
console.log([10, 2, 8, 4, 6].at(5));
console.log([10, 2, 8, 4, 6].at(-1));
console.log([10, 2, 8, 4, 6].at(-2));
console.log([10, 2, 8, 4, 6].at(-3));
console.log([10, 2, 8, 4, 6].at(-4));
console.log([10, 2, 8, 4, 6].at(-5));
console.log([10, 2, 8, 4, 6].at(-6));

console.log();


console.log(Array.prototype.concat); // sudeda [1], 2 + [3, 4, 5] =  1, 2, 3, 4, 5

console.log([1, 2].concat(3));
console.log([1, 2].concat([3, 4]));
console.log([1, 2].concat([3, 4], 5));
console.log([1, 2].concat([3, 4], 5, [6, 7], 8));

console.log()





console.log(Array.prototype.includes); // grazina true/false

console.log([10, 2, 8, 4, 6].includes(10));
console.log([10, 2, 8, 4, 6].includes(2));
console.log([10, 2, 8, 4, 6].includes(5));
console.log([10, 2, 8, 4, 6].includes(28));

console.log();



console.log(Array.prototype.indexOf); // nurodo indeksa reiksmes [10, 2, 8] indexif(2) = 1

console.log([10, 2, 8, 4, 6].indexOf(10));
console.log([10, 2, 8, 4, 6].indexOf(2));
console.log([10, 2, 8, 4, 6].indexOf(5));
console.log([10, 2, 8, 4, 6].indexOf(28));

console.log();

console.log(Array.prototype.join); // sujungia zodzius/reksmes | atvirkstinis variantas split'ui

const text = 'Labas rytas Lietuva';
const words = text.split(' ');
console.log(words);

console.log(words.join());
console.log(words.join(''));
console.log(words.join(','));
console.log(words.join(', ') + '.');
console.log(words.join(' --==-- '));

console.log();

console.log(Array.prototype.reverse); // vaizduoja atvirksciai   [1, 2, 3]  = [3, 2, 1] JIS MODIFIKUOJA REIKSMES KEICIA ORIGINALIUS DUOMENIS!!!!

const numbers = [1, 2, 3];
console.log(numbers);

numbers.reverse();
console.log(numbers);

numbers.reverse();
console.log(numbers);



const pom = 'Pomidoras';
const pomLetters = pom.split(''); // split jeidu 1 zodis grazina simbolius
console.log(pomLetters);
pomLetters.reverse();
console.log(pomLetters);
const pomReversed = pomLetters.join('');
console.log(pomReversed);

//faster version than above

const agurkas = 'Agurkas'.split('').reverse().join('');
console.log(agurkas);

const svogunas = 'Svogunas'.split('').reverse().join('');  //nera efektyviausias kodas  split reverse join galima isivaizduoti kaip ciklus
console.log(svogunas);


console.log();
console.log(Array.prototype.slice);

const double = [11, 22, 33, 44, 55, 66, 77];
console.log(double.slice()); // be parametru ir su 0 gausi ta pati - tiesiog masyva

console.log(double.slice(0)); // pasirenka nuo index ir atvaizduoja reiksmes iki galo 
console.log(double.slice(3));
console.log(double.slice(-3));
console.log(double.slice(-1));
console.log(double.slice(0, -2));
console.log(double.slice(0, -4));
console.log(double.slice(2, -2));

console.log();
console.log(Array.prototype.push);  //tipiniu atveju push naudojamas    // uzvedus rodykle ant push, (...ITEMS) - reikskia gali itraukti daugiau elementu
console.log(Array.prototype.pop);
console.log(Array.prototype.shift);
console.log(Array.prototype.unshift);

console.clear(); 

const marks = [10, 2, 8, 4, 6];
console.log(marks);

marks.push(5);      // PUSH - prideda reiksme gale
marks.push(7);
marks.push(9);
console.log(marks);


marks.pop();
console.log(marks);    // pop nuima nuo galo reiksme BE PARAMETRO

marks.pop();
console.log(marks);

marks.unshift(0);            // unshift reiksme itrauka i prieki
marks.unshift(1);
marks.unshift(2);
marks.unshift(3);
marks.unshift(4);
console.log(marks);


marks.shift();             // shift pasalina reiksme is priekio
console.log(marks);



const jonoPazymiai = [10, 2, 8, 4, 6];   // tarkim nori pasidvigubinti reiksmes mazesnes arba lygu 5
const geresniJonoPazymiai = [];

// for (const pazimys of jonoPazymiai) {
//     console.log(pazimys);
// }

// for (const pazimys of jonoPazymiai) {
//     geresniJonoPazymiai.push(pazimys);
// }
// console.log(geresniJonoPazymiai);


// for (const pazimys of jonoPazymiai) {
//     if (pazimys < 5){
//         geresniJonoPazymiai.push(pazimys * 2);
//     } else {
//         geresniJonoPazymiai.push(pazimys);
//     }
    
// }

// console.log(jonoPazymiai);
// console.log(geresniJonoPazymiai);




for (const pazimys of jonoPazymiai) {      //su FOR OF ciklu
    let geresnisPazimys = pazimys * 2;
    if (geresnisPazimys > 10){
        geresnisPazimys = 10;
    }


        geresniJonoPazymiai.push(geresnisPazimys);
    
}

console.log(jonoPazymiai);
console.log(geresniJonoPazymiai);



