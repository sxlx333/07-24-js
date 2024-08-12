const marks = [-1, 10, 2, 3.14, 8, 'desimt', true, 4, [10, 2, 8, 4, 6], 6, NaN, Infinity, {}];

const validMarks = [];

// for (const mark of marks) {
//     if (typeof mark !== 'number'
//         // || isNaN(mark)        //atmeta nan
//         || !isFinite(mark)       // irgi atmeta ir nan ir infinite
//         || mark % 1 !== 0   // ar skaiciaus tipo baigtine reiksme neturi liekanos
//         || mark < 1   // ar skaicius yra maziau uz 1 atmetam 'negatyva'
//         || mark > 10       // atmeta reiksmes nuo desimt neiskaitant
//     ) {      // jeigu ne skaicius jo nelieciam
//         console.log('atmetam:', mark);
//         continue;                   // continue eik i sekancia iteracija/reiksme
//     } 
//    validMarks.push(mark);
// }
// console.log(validMarks);


/*------------------SUPAPRASTINIMAS ------------------- */
for (const mark of marks) {
    if (!Number.isInteger(mark)
        || mark < 1
        || mark > 10
    )  {
        continue;
    }
   validMarks.push(mark);
}
console.log(validMarks);


                            //   klausia ar pasilikti (false/true)
// const validMarks2 = marks           
//     .filter(mark => typeof mark === 'number')   //pasilik jeigu true salygai
//     .filter(mark => !isNaN(mark))
//     .filter(mark => isFinite(mark))
//     .filter(mark => mark % 1 === 0)
//     .filter(mark => mark > 0)
//     .filter(mark => mark <= 10)
// console.log(validMarks2);

/*-------------------SAME AS ABOVE (FIND DIFFERENCES)---------------------- */
// const validMarks2 = marks           
//     .filter(mark => Number.isInteger(mark))
//     .filter(mark => mark > 0)
//     .filter(mark => mark <= 10)
// console.log(validMarks2);
/*--------------Galima viska sutraukti i viena-------------------------- */
const validMarks2 = marks           
    .filter(mark =>   //stengtis naudoti maziau .filter method'u (performance)
         Number.isInteger(mark)
         && mark > 0
         && mark <= 10
    );
console.log(validMarks2);


/*--EVERY REISKIA AR VISKAS MASYVE YRA TIKTAI AR STRINGAI AR SKAICIAI IR PAN- */
console.log(Array.prototype.flat);

console.log(Array.prototype.every); //rare use case
console.log(Array.prototype.forEach);
console.log(Array.prototype.sort);
console.log(Array.prototype.reduce);

