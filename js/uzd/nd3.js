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
let suma2 = 0;
let suma3 = 0;
for (let i = 0; i <= 11; i++) {
    if (i % 3 === 0 && i / 3 > 0) {
        suma += 1;
        console.log('a ->', i);
    } if (i % 5 === 0 && i / 5 > 0 ) {
        suma2 += 1;
        console.log('b ->', i);
    } if (i % 7 === 0 && i / 7 > 0) {
        suma3 += 1;
        console.log('c ->', i);
    }
}
console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra ',suma, ' vienetai.');
console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra ',suma2, ' vienetai.');
console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra ',suma3, ' vienetai.');

console.log('');
let suma4 = 0;
let suma5 = 0;
let suma6 = 0;
for (let i = 8; i <= 31 ; i++) {
    if (i % 3 === 0 && i / 3 > 0) {
        suma4 += 1;
        console.log('a ->', i);
    } if (i % 5 === 0 && i / 5 > 0) {
        suma5 += 1;
        console.log('b ->', i);
    } if (i % 7 === 0 && i / 7 > 0) {
        suma6 += 1;
        console.log('c ->', i);
    }
}
console.log('Skaiciu intervale 8 ir 31, besidalijanciu be liekanos is 3 yra ', suma4, ' vienetai');
console.log('Skaiciu intervale 8 ir 31, besidalijanciu be liekanos is 5 yra ', suma5, ' vienetai');
console.log('Skaiciu intervale 8 ir 31, besidalijanciu be liekanos is 7 yra ', suma6, ' vienetai');

console.log('');
let suma7 = 0;
let suma8 = 0;
let suma9 = 0;
for (let i = -18; i <= 18; i++) {
    if (i % 3 === 0 && i / 3 !== 0 ) {
        suma7 += 1;
        console.log('a ->', i);
    } if (i % 5 === 0 && i / 5 !== 0) {
        suma8 += 1;
    } if (i % 7 === 0 && i / 7 !== 0) {
        suma9 += 1;
    }
}

console.log('skaiciu internvale tarp -18 ir 18, besidalijanciu be liekanos is 3 yra ', suma7, ' vienetai');
console.log('skaiciu internvale tarp -18 ir 18, besidalijanciu be liekanos is 5 yra ', suma8, ' vienetai');
console.log('skaiciu internvale tarp -18 ir 18, besidalijanciu be liekanos is 7 yra ', suma9, ' vienetai');

console.clear();

function tusciaFunckija() {
    return false;
}
console.log(tusciaFunckija());

function daugyba(skaicius1, skaicius2) {
    const skaicius3 = (skaicius1 * skaicius2);
    
    return skaicius3; 
}
console.log(daugyba(143, 2));
console.log(daugyba(143, 212));
console.log(daugyba(2, 2));











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