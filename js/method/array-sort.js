const abc = ['a', 'g', 't', 'b', 'e'];
console.log(abc);

abc.sort();         // raides/reiksmes isrikiuotes abeceles didejimo tvarka
console.log(abc);

const dict = ['asiuklis', 'zirniai', 'asilas', 'asla', 'duona', 'as'];
console.log(dict);

dict.sort();
console.log(dict);
dict.reverse();
console.log(dict);




const marks = [10, 2, 8, 12, 200, 41, 4, 6];
console.log(marks);

marks.sort();    //ziuri kaip i teksta nepaisant masyva yra skaiciai
console.log(marks);  // tarsi const marks = ['10', '2', '8', '12', '200', '41', '4', '6'];

marks.sort((a, b) => a - b); // pasirasyt parametra kai su skaiciais 
console.log(marks);

marks.sort((a, b) => b - a);  // parametras paskaiciuoja skirtuma tarp skaiciu
console.log(marks);


// crazy pamastymas    false ir true    f>t      false = 0    true = 1

console.clear();
const family = [
    {name: 'Jonas', age: 99, marks: [2, 4, 6, 1, 2, 3, 2, 3, 2, 3]},
    {name: 'Maryte', age: 66, marks: [2, 7, 8, 8]},
    {name: 'Ona', age: 77, marks: [10, 10, 10, 10, 6]},
    {name: 'Petras', age: 88, marks: []},
];

console.log(family);


console.log('-----------------PAGAL AGE-----------------');
family.sort((a, b) => a.age - b.age);             // SORTINA MASYVA su objektais kuris nesikeicia
console.log(family);

console.log('-----------------PAGAL NAME IR JEIGU VIENAS NAME-----------------');
family.sort((a, b) => a.name < b.name ? -1 : a.name === b.name ? 0 : 1);
console.log(family);


console.log('-------PAGAL MASYO OBJEKTE ESANCIU MARKS REIKSMIU ILGI---------');
family.sort((a, b) =>  b.marks.length - a.marks.length);
console.log(family);


console.log('-------PAGAL VIDURKI MARKS ---------');

function average(marks) {
    if (marks.length === 0){
        return 0;
    }
    let sum = 0;

    for (const mark of marks) {
        sum += mark
    }
    return sum / marks.length;
}
family.sort((a, b) => average(b.marks) - average(a.marks));
console.log(family, average);




console.log('/*******************TIKRINIMAS************************* */');
console.log('laabas', 'laaabas'.toString());
console.log(123, (123).toString());
console.log({name: 'Ona', age: 77}, ({name: 'Ona', age: 77}).toString());