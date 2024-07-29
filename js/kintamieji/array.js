/*
ARRAY - sąrašas, masyvas, matricija, list'as, arėjus
*/

// laužtiniai skliaustai
const empty = [];
console.log(empty);

const marks = [10, 2, 8, 4, 6];
console.log(marks);

const studentNames = ['Jonas', "Petras", 'Marija'];
console.log(studentNames);

const mixList = [
    1,
    'a',
    true,
    [],
    [2, 3, 4],
    ['b', 'c', 'd'],
    [false, true, false]
];
console.log(mixList);

const marksCount = marks.length;
console.log(marksCount);

const nameCount = studentNames.length;
console.log(nameCount);

const mixCount = mixList.length;
console.log(mixCount);


console.log('------------------');
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

// stringas yra supaprastintas masyvas
// masyvas yra supaprastintas ...

console.clear();
const dictionary = ['Labas', 'rytas', 'Lietuva'];

const word1 = dictionary[0];
console.log(word1);

const letter1 = word1[0];
console.log(letter1);

const letter11 = dictionary[0][0];
console.log(letter11);

const letter21 = dictionary[1][0];
console.log(letter21);

const letter36 = dictionary[2][6];
console.log(letter36);


console.clear();

const pazymiai = [10, 2, 8, 4, 6];

// koks pazymiu vidurkis

const suma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4];
const kiekis = pazymiai.length;
const vidurkis = suma / kiekis;

console.log('Suma: ', suma);
console.log('Kiekis: ', kiekis);
console.log('Vidurkis: ', vidurkis);


// kitas variantas suskaiciuoti suma
console.log('--------------------');
let tempSuma = 0;
let index = 0;
console.log(tempSuma);

tempSuma = tempSuma + pazymiai[index++];

tempSuma += pazymiai[index++];

tempSuma += pazymiai[index++];

tempSuma += pazymiai[index++];

tempSuma += pazymiai[index++];

console.log(index, tempSuma)

console.clear();

const colors = ['red', 'green', 'blue'];

// Lovely color: red, green, blue!
let colorsStr = 'Lovely color: ';
let colorIndex = 0;
console.log(colorsStr);

colorsStr += colors[colorIndex++] + ', ';
console.log(colorsStr);

colorsStr += colors[colorIndex++] + ', ';
console.log(colorsStr);

colorsStr += colors[colorIndex++] + ', ';
console.log(colorsStr);
