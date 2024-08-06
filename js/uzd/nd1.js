console.log('skaiciai kintamieji');
const skaicius1 = 3;
console.log(skaicius1);
const skaicius2 = 5;
console.log(skaicius2);
const skaicius3 = 6;
console.log(skaicius3);

console.log('');
console.log('teksto tipos reiksmes kintamieji');
const zodis1 = 'labas';
console.log(zodis1);
const zodis2 = 'rytas';
console.log(zodis2);
const zodis3 = 'Lietuva';
console.log(zodis3);

console.log('');
console.log('saraso kintamieji su 5 skaiciu reiksmemis');
const sarasas1 = [1, 2, 3, 4, 5];
console.log(sarasas1);
const sarasas2 = [5, 4, 3, 2, 10];
console.log(sarasas2);
const sarasas3 = [4, 4, 4, 4, 4];
console.log(sarasas3);

console.log('');
console.log('saraso kintamieji su 5 teksto reiksmemis');
const sarasas11 = ['Tomas', 'Jonas', 'Ona', 'Valdas', 'Egle'];
console.log(sarasas11);
const sarasas12 = ['pomidoras', 'agurkas', 'morka', 'cesnakas', 'svogunas'];
console.log(sarasas12);
const sarasas13 = ['green', 'yellow', 'blue', 'red', 'black'];
console.log(sarasas13);

console.log('');
console.log('skaiciu kintamuju suma');
const sum = skaicius1 + skaicius2 + skaicius3;
console.log(sum);


console.log('');
console.log('sujungti teksto kintamieji');
const sumaZodziu = zodis1 + ' ' + zodis2 + ' ' + zodis3;
console.log(sumaZodziu);

console.log('');
console.log('apskaiciuoti sarasu skaiciai pagal logika 1-2+3-4+5')
const veiksmasSaraso1 = sarasas1[0] - sarasas1[1] + sarasas1[2] - sarasas1[3] + sarasas1[4];
console.log(veiksmasSaraso1);
const veiksmasSaraso2 = sarasas2[0] - sarasas2[1] + sarasas2[2] - sarasas2[3] + sarasas2[4];
console.log(veiksmasSaraso2);
const veiksmasSaraso3 = sarasas3[0] - sarasas3[1] + sarasas3[2] - sarasas3[3] + sarasas3[4];
console.log(veiksmasSaraso3);

console.log('');
console.log('Sujungti sarasus su tekstu reiksme nuo galo iki pradzios su tarpu kableliu')
const sujungimasSaraso1 = sarasas11[4] + ', ' + sarasas11[3] + ', ' + sarasas11[2] + ', ' + sarasas11[1] + ', '+  sarasas11[0];
console.log(sujungimasSaraso1);

console.log('----KINTAMUJU PALYGINIMAS-----');
const pirmaReiskme = 15;
const antraReiksme = 25;

console.log('');
console.log('1. a)');
if (15 > 25) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
};

console.log('');
console.log('1. b)');
if (15 < 25) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
};

console.log('');
console.log('1. c)');
if (15 == 25) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
};

console.log('');
console.log('1. d)');
if (15 != 25) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
};

console.log('');
console.log('1. e)');
if (15 >= 25) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
};


console.log('');
console.log('1. f)');
if (15 <= 25) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
};

console.log('');
console.log('isveskite teksto kintamuju tipo ilgius');
console.log(zodis1);
console.log(zodis1.length);
console.log(zodis2);
console.log(zodis2.length);
console.log(zodis3);
console.log(zodis3.length);


console.log('');
console.log('3. a)');
if (zodis1.length > zodis2.length) {
    console.log('pomidoras');
} else {
    console.log('Bandykite kitą kartą');
};

console.log('');
console.log('3. b)');
if (zodis1.length < zodis2.length) {
    console.log('pomidoras');
} else {
    console.log('Bandykite kitą kartą');
};

console.log('');
console.log('3. c)');
if (zodis1.length == zodis2.length) {
    console.log('pomidoras');
} else {
    console.log('Bandykite kitą kartą');
};

console.log('');
console.log('3. d)');
if (zodis1.length != zodis2.length) {
    console.log('pomidoras');
} else {
    console.log('Bandykite kitą kartą');
};

console.log('');
console.log('3. e)');
if (zodis1.length >= zodis2.length) {
    console.log('pomidoras');
} else {
    console.log('Bandykite kitą kartą');
};

console.log('');
console.log('3. f)');
if (zodis1.length <= zodis2.length) {
    console.log('pomidoras');
} else {
    console.log('Bandykite kitą kartą');
};

console.log('');
console.log('4. Isvesti saraso tipo kintamuju ilgius');
console.log(sarasas1[0]);
console.log(sarasas1[0].length);

console.log(sarasas11[0]);
console.log(sarasas11[0].length);


console.log('');
console.log('5. a)');
if (sarasas11[0].length > sarasas11[4].length) {
    console.log('pomidoras');
} else {
    console.log('Bandykite kitą kartą');
};

console.log('');
console.log('5. b)');
if (sarasas11[0].length < sarasas11[4].length) {
    console.log('pomidoras');
} else {
    console.log('Bandykite kitą kartą');
};

console.log('');
console.log('5. c)');
if (sarasas11[0].length == sarasas11[4].length) {
    console.log('pomidoras');
} else {
    console.log('Bandykite kitą kartą');
};

console.log('');
console.log('5. d)');
if (sarasas11[0].length != sarasas11[4].length) {
    console.log('pomidoras');
} else {
    console.log('Bandykite kitą kartą');
};

console.log('');
console.log('5. e)');
if (sarasas11[0].length >= sarasas11[4].length) {
    console.log('pomidoras');
} else {
    console.log('Bandykite kitą kartą');
};

console.log('');
console.log('5. f)');
if (sarasas11[0].length <= sarasas11[4].length) {
    console.log('pomidoras');
} else {
    console.log('Bandykite kitą kartą');
};

// console.clear();

// jeigu randa spalva isvercia lietuviskai paraso

const colors = ['red', 'green', 'blue'];
const color = 'red';

if (color === colors[0]) {
    console.log('Raudona');
} else if (color === colors[1]) {
    console.log('Zalia');
} else if (color === colors[2]) {
    console.log('Melyna');
} else {
    console.log('Ups...');
}