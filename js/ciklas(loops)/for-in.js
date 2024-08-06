/*
FOR-IN ciklas 
vienintelis ciklas, kuris nedirba su masyvais, stringais
DIRBA SU OBJEKTAIS
 */


const person = {
    name: 'Jonas',
    age: '99',
    isMarried: true,
    phone: 861453123,
    address: {
        city: 'Miestas',
        street: 'Gatve',
        number: 123,
        zip: 98754,
    },
    marks: [10, 2, 7, 5, 3],
};


console.log(person);
console.log('--------BASIC FOR----------');
// 1.
const keys = Object.keys(person);
console.log(keys);       // gauname masyva su pirmo lygio raktais viduj adreso nerodo
console.log(Object.keys(person.address)); // randa antro lygio raktus

for (let i=0; i< keys.length; i++) {
    const key = keys[i];         // istraukiamas kiekvienas raktas
    console.log(i, key, '-->', person[key]);   // istraukiama rakto reiksme
}

console.log('--------FOR OF----------');

// 2.  for OF
const keys2 = Object.keys(person);
for (const key of keys2) {
    console.log(key, '-->', person[key]);   // istraukiama rakto reiksme
}


// 3.  for in
console.log('---------FOR IN---------');
for (const key in person) {
    console.log(key, '-->', person[key]);   // istraukiama rakto reiksme
}

console.clear();

const abc  = {
    a: 'arbuzas',
    b: 'bulve',
    c: 'cukinija',
    d: 'obuolys',
    e: 'dilgele',
}

let index = 1;       // norint skaiciu isspausdinti reikia susikurti indeksa pries for in funkcija
for (const key in abc) {
    console.log(`${index++}) Objekte, po raktu "${key}" yra reiksme "${abc[key]}"`);
}