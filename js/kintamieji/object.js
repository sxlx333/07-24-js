/*
OBJECT - objektas - key-value porų sąrašas

*/

// const studentName1 = 'Jonas';
// const studentAge1 = 99;
// const student1IsMarried = true;
// const student1Address = 'Gatve 1, Miestas';

// const studentName2 = 'Maryte';
// const studentAge2 = 88;
// const student2IsMarried = false;

// const studentName3 = 'Petras';
// const studentAge3 = 77;
// const student3IsMarried = false;

// const studentName3 = 'Ona';
// const studentAge3 = 66;
// const student3IsMarried = true;

const student1 = ['Jonas', 99, true, 'Gatve 1, miestas', 861215656];
const student2 = ['Maryte', 88, true, 'Gatve 1, miestas', 861215656];
const student3 = ['Ona', 88, true, 'Gatve 1, miestas', 861215656];
const student4= ['Petras', 55, true, 'Gatve 1, miestas', 861215656];


//riestiniai skliaustai
const empty = {};
const student11 = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
    address: 'Gatve, Mietas',
};
const student12 = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
    phone: 8612426,
};

// standartine sintakse       visada veikia
console.log(student11['name']);
console.log(student11['age']);
console.log(student12['isMarried']);

console.log('-----------------')
// supaprastinta sintakse     nevisada veikia
console.log(student12.name);
console.log(student12.phone);
console.log(student12.age);

const cars = [            // daugiskaita = masyvas    cia kuriami objektai masinos tipai masyve cars
    {
        brand: 'Audi',
        model: '80',
        color: 'red',
        price: 300,
    },
    {
        brand: 'Volvo',
        model: 'S40',
        color: 'black',
        price: 1000,
    },
    {
        brand: 'Zapas',
        model: '',
        color: 'gray',
        price: 777,
    },
    {
        brand: 'Fordas',
        model: 'Model T',
        color: 'back',
        price: 19999,
    },
]
// Automobilis BRAND MODEL, kurio spalva yra COLOR parduodamas uz PRICE Eur.

const car1 = cars [0];
console.log(car1);

const car1Sale = 'Automobilis ' + car1.brand + ' ' + car1.model + ', kurio spalva yra ' + car1.color + ' parduodamas uz ' + car1.price + ' Eur.';
console.log(car1Sale); 

const car2 = cars[1];
const car2Sale = 'Automobilis ' + car2.brand + ' ' + car2.model + ', kurio spalva yra ' + car2.color + ' parduodamas uz ' + car2.price + ' Eur.';
console.log(car2Sale); 

const car3Sale = 'Automobilis ' + cars[2].brand + ' ' + cars[2].model + ', kurio spalva yra ' + cars[2].color + ' parduodamas uz ' + cars[2].price + ' Eur.';
console.log(car3Sale); 

const car4Sale = 'Automobilis ' + cars[3].brand + ' ' + cars[3].model + ', kurio spalva yra ' + cars[3].color + ' parduodamas uz ' + cars[3].price + ' Eur.';
console.log(car4Sale); 


/*
N.D.

reikalingas sarasas prekiu.
Kiekviena preke yra aprasoma pavadinimu, kaina ir norimu pirkti kiekiu.

reikia isspausdinti:
A) sablonas: "prekiu krepselyje yra [count] prekiu"

B) SABlonas:
prekiu krepselis
----------------
1)  pavadinimas (kaina uz vieneta eur) - kiekis
2) pavadinimas (kaina uz vieneta eur) - kiekis
...
N) pavadinimas (kaina uz vieneta eur) - kiekis


C) sablonas: 
prekiu krepselio verte yra TOTAL KAINA eur.
*/
console.clear();
const prekes = [
    {
        pavadinimas: 'bananas',
        kaina: 0.8,
        kiekis: 5,
    },
    {
        pavadinimas: 'obuolys',
        kaina: 0.7,
        kiekis: 10,
    },
    {
        pavadinimas: 'Sokoladas',
        kaina: 2.5,
        kiekis: 1,
    },
    {
        pavadinimas: 'Varskė',
        kaina: 0.8,
        kiekis: 4,
    },
    {
        pavadinimas: 'Paprika',
        kaina: 1.2,
        kiekis: 3,
    },
];
// const car4Sale = 'Automobilis ' + cars[3].brand + ' ' + cars[3].model + ', kurio spalva yra ' + cars[3].color + ' parduodamas uz ' + cars[3].price + ' Eur.';
// console.log(car4Sale); 

let suma = prekes[0]['kiekis'] + prekes[1]['kiekis'] + prekes[2]['kiekis']+ prekes[3]['kiekis']+ prekes[4]['kiekis'];
const prekiuKiekioSuma = 'Prekiu krepšelyje yra ' + suma + ' prekės'
console.log(prekiuKiekioSuma);

console.log('');
console.log('prekiu krepselis');


const preke1 = prekes [0];
const preke2 = prekes [1];
const preke3 = prekes [2];
const preke4 = prekes [3];
const preke5 = prekes [4];
console.log(preke1);
console.log(preke2);
console.log(preke3);
console.log(preke4);
console.log(preke5);

console.log('');

let prekiuKaina = 
prekes[0]['kaina'] * prekes[0]['kiekis'] + 
prekes[1]['kaina'] * prekes[1]['kiekis'] + 
prekes[2]['kaina'] * prekes[2]['kiekis'] + 
prekes[3]['kaina'] * prekes[3]['kiekis'] + 
prekes[4]['kaina'] * prekes[4]['kiekis'];
const prekiuKainosSuma = 'Prekiu krepšelio vertė yra ' + Math.round(prekiuKaina)+ ' Eur ir ' + Math.round(prekiuKaina * 100 - 2000)+ ' centų'
console.log(prekiuKainosSuma); 


const pc = {
    monitor: {
        width: 1980,          // objektas objekte dvi reiksmes
        height: 1080,
    },
    widthCM: 40,
    ramGB: 16,
    hdGB: 100,
    keyboard: 'en',
    mouse: true,
    power: true,
}

console.log(pc);
console.log(pc.ramGB);
console.log(pc['mouse']);
console.log(pc['keyboard']);
console.log(pc.hdGB);

const param = 'power';    // istraukti reiksme naudojant standartine israiska
const param2 = 'keyboard';
const param3 = 'monitor';

console.log(pc[param]);    // istraukiame reiksme power is pc su param reiksme
console.log(pc['power']);

console.log(pc[param2]);
console.log(pc['keyboard']);

console.log(pc.monitor.width);      //istraukiama reiksme objekte esancio objekto reiksme
console.log(pc.monitor.height);
console.log(pc['monitor'].width); 
console.log(pc['monitor']['height']);   // visos kombinacijos grazinti reiksme
console.log(pc.monitor['width']);
console.log(pc.monitor['height']);

console.log('');
console.log(pc[param3].width);
console.log(pc[param3]['height']);


console.clear();

const crazy = {
    title: 'some crazy...',
    description: 'Prepare yourself...',
    crazy_marks: [10, 2, 8, 4, 6],
    'su tarpu': [2, 4, 6],
    123: {
        one: true,
        two: true,
        three: true,
    },
};

console.log(crazy);
console.log(crazy.title);
console.log(crazy['description']);
console.log(crazy.crazy_marks);
console.log(crazy['su tarpu']);

console.log(crazy['123']);
console.log(crazy[123]);
console.log(crazy.title.length);

console.clear();

const house = {
    width: 16,
    height: 3,
    depth: 5,
};

const houseKeys = Object.keys(house);
console.log(houseKeys);

console.log(Object.keys);
console.log(Object.keys({}));

console.clear();
// dinaminis reiksmiu priskyrimas

const zoo = {                     // konstantanta nera problema nes keiciasi zoo objekte turinys or ne pats objektas
    liutas: 2,

};
console.log(zoo);

zoo.liutas += 3;
console.log(zoo.liutas);

zoo.dramblys = 1;
console.log(zoo);

zoo.dramblys += 2;
console.log(zoo);



const marks = [10, 2, 7, 4, 5];   // konstanta naudojama negu let tam, kad netycia nepakeist viso masyvo ar objekto
console.log(marks);

marks[1] = 8;
console.log(marks);