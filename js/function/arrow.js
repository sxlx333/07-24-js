/*
arrow function
*/

const n1 = 7;
const n2 = 5;

// iprasta funkcija (function declaration)
function sum(a, b) {
    return a + b;
}
console.log(`7 + 5 = 12`);
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);



// kintamajam priskirta anonimine funkcija (neturinti pavadinimo)
const diff = function (a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${diff(n1, n2)}`);




// rodykline funkcija (arrow function)
const multi =  (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${multi(n1, n2)}`);


// rodykline funkcija
// jeigu, logikos bloke yra tik 1 procedura
// tai galima nerasyti {return}

const div = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${div(n1, n2)}`);

// rodykline funkcija
// jeigu, parametru (argumentu) bloke yra tik 1 argumentas
// tai galima nerasyti ()

const sqr = a => a * a;
console.log(`${n1} * ${n1} = ${sqr(n1)}`);
console.log(`${n2} * ${n2} = ${sqr(n2)}`);





console.log('paskutinis: \tLabas', lastSymbol('Labas'));
// console.log('paskutinis: \tLabas', firstSymbol('Labas'));  NEVEIKIA SU anonimine reiksme priskirta funkcija pries funkcija

function lastSymbol(text) {
    return text[text.length -1];
}

const firstSymbol = function (text) {
    return text[0];
}

console.log('paskutinis: \tLabas', lastSymbol('Labas'));
console.log('paskutinis: \tLabas', firstSymbol('Labas'))