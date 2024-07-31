/*
FUNCTION - perpanaudojamas logikos blokas
*/


const students = [
    {
        name: 'Jonas',
        marks: [10, 2, 8, 4, 6],
    },
    {
        name: 'Maryte',
        marks: [9, 8, 7, 6, 5],
    },
    {
        name: 'Petras',
        marks: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    },
    {
        name: 'Ona',
        marks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
];

// studento, vardu jonas, pazymiu vidurkis yra 6.
// studento, vardu maryte, pazymiu vidurkis yra 7.

let sumJonas = 0;
sumJonas += students[0].marks[0];
sumJonas += students[0].marks[1];
sumJonas += students[0].marks[2];
sumJonas += students[0].marks[3];
sumJonas += students[0].marks[4];
const averageJonas = sumJonas / students[0].marks.length;


const msgJonas = 'studento, vardu '+ students[0].name +', pazymiu vidurkis yra ' + averageJonas + '.';
console.log(msgJonas);

let sumMaryte = 0;
sumMaryte += students[1].marks[0];
sumMaryte += students[1].marks[1];
sumMaryte += students[1].marks[2];
sumMaryte += students[1].marks[3];
sumMaryte += students[1].marks[4];
const averageMaryte = sumMaryte / students[1].marks.length;

const msgMaryte = 'studento, vardu '+ students[1].name +', pazymiu vidurkis yra ' + averageMaryte + '.';
console.log(msgMaryte);



function hello (name) {
    return 'Labas, as ' + name + '!';
}

console.log(hello('Jonas'));
console.log(hello('Maryte'));
console.log(hello('Petras'));
console.log(hello('Ona'));

function twoNumbersAverage(a, b) {
    return (a + b) / 2;
}

const a = (7 + 5) / 2;
const b = (11 + 5) / 2;
const c = (11 + 7) / 2;
const d = (13 + 666) / 2;
console.log(a, b, c, d);

const a2 = twoNumbersAverage(65, 5);
const b2 = twoNumbersAverage(2, 6);
const c2 = twoNumbersAverage(1, 2);
console.log(a2, b2 ,c2);


console.clear();

function threeNumberAverage(a, b, c) {
    return (a + b + c) / 3;
}
console.log(threeNumberAverage(2, 8, 5));
const a3 = threeNumberAverage(1, 2, 3);
console.log(a3);


function love(color) {
    return `I love ${color[0]} ${color[1]} color!`;
}

console.log(love('red'));
console.log(love('green'));
console.log(love('blue'));

function evenOdd1(number) {
    if (number % 2 === 0) {
        return  `skaicius ${number} yra lyginis`;
    }   else {
        return `skaicius ${number} yra nelyginis`;
    }
}

function evenOdd2(number) {
    if (number % 2 === 0) {
        return  `skaicius ${number} yra lyginis`;
    } 
        return `skaicius ${number} yra nelyginis`;
}

function evenOdd3(number) {
        return  `skaicius ${number} yra ${number % 2 === 0 ? '' : 'ne'}lyginis`;
}

console.log(evenOdd1(2));
console.log(evenOdd1(3));
console.log(evenOdd2(4));
console.log(evenOdd2(5));
console.log(evenOdd3(6));
console.log(evenOdd3(7));
