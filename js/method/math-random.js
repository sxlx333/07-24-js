/*

Generuojamas atsakymas yra: [0..1)
Reiskia:
nulis - imtynai (galima reiksme)
vienetas - ne imtynai (negalima reiksme)
kas reiskia...
jog didziausia galima reiksme yra: 0.99999999999999

*/

console.log(Math.random());  // sugeneruoja atsitiktinius skaicius tarp 0 ir 1 
console.log(Math.random());
console.log(Math.random());





let sum = 0;
for (let i = 0; i < 1_000_000; i++) {
   sum += Math.random(Math.random());
}
console.log(sum / 1_000_000);




console.clear();

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('0, 1');
console.log(random(0, 1));
console.log(random(0, 1));
console.log(random(0, 1));
console.log(random(0, 1));

console.log('0, 10');
console.log(random(0, 10));
console.log(random(0, 10));
console.log(random(0, 10));
console.log(random(0, 10));


console.log('5, 10');
console.log(random(5, 10));
console.log(random(5, 10));
console.log(random(5, 10));
console.log(random(5, 10));
console.log(random(5, 10));

console.log('100, 200');
console.log(random(100, 200));
console.log(random(100, 200));
console.log(random(100, 200));
console.log(random(100, 200));
console.log(random(100, 200));