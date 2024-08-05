console.log('Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7');
// a. 0 - 11

// let sum = 0;
// function intervalasDalinti(start, end) {
//     for (let i = start; i <= end; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(intervalasDalinti(1, 2));

console.clear();

function sum1(a, b){
    return a + b;
    console.log("Never will run");
}
const value = sum1(1, 3);
console.log(value);

console.clear();

for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
console.clear();
let suma = 0;
for (let i = 0; i <= 11; i++) {
    if (i % 3 === 0 && i / 3 > 0) {
        suma += 1;
        console.log(i);
}
}
console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra ',suma, ' vienetai.');

// console.clear();
// let sum = 0;
// let suma1= 0;
// let suma2= 0;
// for (let i = 0; i <= 11; i++) {
//         if (i % 3 === 0) {
//         sum += 1;
//     }
//     {
//         if (i % 5 === 0) {
//         suma1 += 1;
//     }
//     if (i % 7 === 0) {
//         suma2 += 1;
//     }
// }
// }
// console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra' , sum, 'vienetai.');
// console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra' , suma1, 'vienetai.');
// console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra' , suma2, 'vienetai.');