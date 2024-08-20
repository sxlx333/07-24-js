const marks = [10, [2, 8],[1, [2, [3, 4, 5, 6],],], [4, 6]];    // kaip dvimatis masyvas (3 nariai, lygiai)
console.log(marks);
console.log(marks.flat());    // paima sarasa ir iskleidzia visas reiksmes pasalina [] masyve
// [ 2, 3, 4, 5, 6 ] jau yra antro lygio ir nebeiskleidzia ju (galima panaudot flat 2 kartus)

console.log(marks.flat().flat());
console.log(marks.flat().flat().flat());


/*-------------------FLAT PRIIMA GYLI KAIP PARAMETRA------------------------ */

console.log('---------------su parametru---------------');
console.log(marks);
console.log(marks.flat()); // default priima 1
console.log(marks.flat(2));
console.log(marks.flat(3));
console.log(marks.flat(Infinity)); // max flat


// const family = [
//     {name: 'Jonas'}, // objektas
//     [             // masyvas tarkim objekto vaikai
//         {name: 'Maryte'},
//         [
//             {name: 'Petras'},
//             [
//                 {name: 'Tomas'},
//                 {name: 'Jurga'}
//             ]
//         ],
//         {name: 'Ona'},
//         [
//             {name: 'Chuck'},
//         ]
//     ]
// ];
/***********GERIAU PASIDARYTI KAD BUTU SUSIJE SU JONU********* */
const family = [
    {name: 'Jonas',
    children:     [             // masyvas tarkim objekto vaikai
    {name: 'Maryte'},
    [
        {name: 'Petras'},
        [
            {name: 'Tomas'},
            {name: 'Jurga'}
        ]
    ],
    {name: 'Ona'},
    [
        {name: 'Chuck'},
    ]
]
} // objektas

];



console.log(family);
console.log(family.flat(Infinity)); // gauname visa serija objektu