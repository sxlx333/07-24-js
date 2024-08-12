// console.log(Array.prototype.map);  //       MAP YRA KAIP CIKLAS EINANTIS IR ISTRAUKIANTIS REIKSMES PAEILIUI
// const a = [10, 2, 8, 4, 6];      // prisiminti arrow functions
// const a2 = a.map();          // reikia nurodyti skliaustuose funkcija

console.log(Array.prototype.map);
const a = [10, 2, 8, 4, 6];
const a2 = a.map(n => n * 2);  // dazniausiai naudojamos rodyklines funkcijos trumpiausiam variantui | galimas ir ilgesnis variantas

console.log(a);
console.log(a2);

const a3 = a.map(n => n + 3);
console.log(a3);

//kitas uzrasymas paeiliui

// const a32 = a.map(n => n + 3);
// console.log(a32);

// const a32 = a.map((n) => n + 3);
// console.log(a32);

// const a32 = a.map((n) => {return n + 3;});
// console.log(a32);

// const a32 = a.map(function (n) {return n + 3;});
// console.log(a32);

function plusThree (n) {
    return n + 3;
}
const a32 = a.map(plusThree);
console.log(a32);


// su ciklu FOR OF same shiet
const beforeMap = [];           
for (const number of a) {
    beforeMap.push(plusThree(number));
}
console.log(beforeMap);


const names = [
    'Jonas Jonaitis',
    'Maryte Marytaite',
    'Petras Petraitis',
    'Ona Onaite',
];

// const abbr = [];

// for (const name of names) {                    // CIKLAS CIKLE
//     const words = name.split(' ');
//     console.log(words);
    
//     for (let i = 0; i < words.length; i++) {          // cikla sukeisti su map
//         words[i] = words[i][0] + '.';
//     }
//     abbr.push(words.join(''));

// }
// console.log(abbr);

/*---------------------SUPAPRASTINIMAS------------------- */
// const abbr = [];

// for (const name of names) {
//     const words = name.split(' ');   // split() gaunamas zodziu masyvas
//     console.log(words);
    
//     const nameAbbrParts = words.map(word => word[0] + '.');
//     abbr.push(nameAbbrParts.join(''));

// }
// console.log(abbr);

/*------------------del lengvesnio skaitymo------------------ */
// const abbr = [];

// for (const name of names) {
//     abbr.push(
//         name
//             .split(' ')
//             .map(word => word[0] + '.')
//             .join('')
//     );
// }

// console.log(abbr);


/*------------------------DAR KITA VERSIJA--------------------------------- */
const abbr = names.map(
    name => name      // dvigubas mapas
    .split(' ')
    .map(word => word[0] + '.')
    .join('')
    );

console.log(abbr);


/*
Kaip is pilno vardo yra gaunami inicialai?

inicialai yra zodziu pirmos raides prie kuriu yra prideti taskai.

Pilnas vardas isskaidomas atskirais zodziais.

Is kiekvieno zodzio pasiliekama tik pirma raide.

Po kiekvieno raides/simbolio pridedam po taska.

Viska sujungiam.


1)'Jonas Jonaitis'  GAUTI

N) 'J.J.'









2) split(' ') 
gausime = ['Jonas', 'Jonaitis']

3) for() {} + [0]
['J', 'J']

4) for() {} + [0] + '.'
['J.', 'J.']

5) join('')
'J.J.'




 */