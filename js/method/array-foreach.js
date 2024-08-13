const marks = [10, 2, 8, 4, 6];

// let sum = 0;
// for (const mark of marks) {
//     sum += mark;
// }
// console.log(sum);


let sum = 0;
for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    sum += mark * i;
}
console.log(sum);

/********************same with foreach********************* */

let sum2 = 0;           // foreach per kiekviena reiksme gali priimti 3 parametrus
marks.forEach((mark, i) => sum2 += mark * i);
console.log(sum2);


console.log('----------------');
const jonoMarks = [1, 2, 3, 4];
let jonoSuma = 0;


function jonoSumavimoFunkcija(mark, i, arr){
    return jonoSuma += mark * i + arr.length;
}


jonoMarks.forEach((mark, i, arr) => jonoSuma += mark * i + arr.length);
console.log(jonoSuma);
jonoMarks.forEach(jonoSumavimoFunkcija);
console.log(jonoSuma);




const dict = ['red', 'green', 'blue'];

let lights = 'Lights:';           // forEach elementarus ciklas
dict.forEach((word, i, arr) =>
    lights += (i > 0 ? ', ' : ' ') + 
    word + (arr.length-1 === i ? '.' : '')
);
console.log(lights);


let lights2 = 'Lights:';
for (let i = 0; i < dict.length; i++) {
    const word = dict[i];
    lights2 += i > 0 ? ', ' : ' ';
    lights2 += word; // prie saves prisides zodi
    lights2 += dict.length - 1 === i ? '.' : '';
}
console.log(lights2);