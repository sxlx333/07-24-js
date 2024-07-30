/*
Kombinatorikos:
if () {} else {}
if () {} else if {} 
if () {} else if {} else {}
if () {} ... else if {} ...
if () {} ... else if {} ...  else {}

PALYGINIMO OPERATORIAI
visi:  >, <, >=, <=, ==, !=, ===, !==
naudotini:  >, <, >=, <=, ===, !==
nenaudotini: ==, !=,

*/

console.log('START');

if (5 * 7 == 35) {
    console.log('yes');
}



if (4 > 2) {
    console.log('logika.. kai if-true');
} else {
    console.log('logika kai if-false');
}
console.log('END');


console.log('---------------');


const diena = 2;
let dienosPavadinimas = '---';

if (diena == 1){
    dienosPavadinimas = 'pirmadienis'
} else if (diena == 2) {
    dienosPavadinimas = 'antradienis'
} else if (diena == 3) {
    dienosPavadinimas = 'treciadinis'
} else if (diena == 4) {
    dienosPavadinimas = 'ketvirtadienis'
} else if (diena == 5) {
    dienosPavadinimas = 'penktadienis'
} else if (diena == 6) {
    dienosPavadinimas = 'sestadienis'
} else if (diena == 7) {
    dienosPavadinimas = 'sekmadienis'
} else {
    dienosPavadinimas = 'Tokia savaites diena neegzistuoja :C'
}

console.log(dienosPavadinimas);


console.clear();

if (4 == '4') {    //  == tikrina tik reiksme verte  (nesaugiausias variantas)
    console.log('TAIP');
} else {
    console.log('NE');
}

if ( 4 === '4') {        // pirmiausia tikrina duomens tipa, jei tipai sutampa tada tikrina verte reiksme  (saugesnis variantas)
    console.log('TAIP');
} else {
    console.log('NE');
}