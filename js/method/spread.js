/*
... - "spread" operatorius
... - "rest" operatorius
*/

let n = 7;
let m = n;

console.log(n, m);
n = 77777;
console.log(n, m);
m = 'asdw';
console.log(n, m);


console.log('--------------');
// kompleksiniu reiksmiu kopijavimas
// array, object
const a = [1, 2];
const b = a;

console.log('a', a);
console.log('b', b);

a[0] = 111;
console.log('a', a);
console.log('b', b);


const jonas = {name: 'Jonas'};
const maryte = jonas;

console.log(jonas, maryte);

maryte.name = 'Maryte';
console.log(jonas, maryte);

console.clear();

// spread
const m1 = [10, 2];
const m2 = [...m1];
// const m2 = [...[10, 2]];      reiklingi [...[reikmes]]           neimanoma  [10, 2]
// const m2 = [10, 2];         pavercia i masyva                   nes gaunas 10, 2    m2 = 10, 2;

console.log(m1, m2);      // jie vienodi bet ATSKIRI MASYVAI

console.log('');
m1[0] = 1000000000;       // pakeiciama pirma reiksme 
console.log(m1, m2);

console.log('');
const m3 = [111, ...m1, 222, ...m1, 333, 444];     // iterpiamos m1 masyvo reiksmes
console.log(m3);

const n1 = [1];
const n2 = [2];
const n3 = [3];
const n4 = [4];
const n5 = [5];

console.log('');
const n314 = [...n3, ...n1, ...n4];  // iterpia visas reiksmes is kitu masyvu - kopijavimas
console.log(n314);

console.log('');
console.log('------su objektais------');
const objName = {name: 'Jonas'};
const objAge = {age: '99'};
const objIsMarried = {isMarried: true};

console.log(objName);
console.log(objAge);
console.log(objIsMarried);

const fullHouse = {...objAge, ...objIsMarried, ...objName};
console.log(fullHouse);


console.log('');
const audi = {
    brand: 'Audi',
    model: '80',
};
const version = {
    color: '#ff0000',
    fuel: 'benzinas',
};

const bulka = {...audi, ...version};  // nesvarbu kiek masyve ar objekte reiksmiu viska kopijuoja negalima iskopijuoti puse objekto, nes raktai objekte neturi eiliskumo. Masyva galima buti paimti puse bet ar didziausiu ar lyginiu reiksmiu KOKIU.
console.log(bulka);                 


// i objekta randonaBulka butu paimti tik spalva is version objekto
console.log('');
console.log('***********raudonaBulka*********************');
const raudonaBulka = {...audi, color: version.color};
console.log(raudonaBulka);

console.log('');
console.log('***********batonas*********************');
const batonas = {...audi, version};
console.log(batonas);

console.log('');
console.log('***********duona*********************');
const duona = {audi, version};   // be spread
console.log(duona);

console.log('');
console.log('***********pakeiciama version color visur**********');
version.color = 'red';
console.log(duona);
console.log('***********pakeiciama version color  batonas**********');
console.log(batonas);
console.log('***********pakeiciama version color visur bulka**********');
console.log(bulka);   // nesikeicia nes su spread naujas

// pamastymui pagooglinimui su FOLDERS windows OS - rekursija yra masyvuose - folderiuose folderiai, kuriuose objektai - failai

