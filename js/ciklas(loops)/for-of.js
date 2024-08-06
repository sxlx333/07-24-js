/*
FOR-OF ciklas
*/



for (let i = 0; i < 5; i++) {
    console.log(i);
}

const names = ['Jonas', 'Maryte', 'Petras', 'Ona', 'Chuck', 'Liusi', 'Batman', 'Tom', 'Jerry', 'Xena'];

for (let i = 0; i < names.length; i++){
    const name = names[i];              // name egzistuoja tik cikle, ciklo iteracijoje nepasiekiamas is isores pvz log po ciklo neveiktu
    console.log(`Sveiki, mano vardas yra ${name}!`);
   
}
console.log(names[9]);


const darzoves = ['bulve', 'pomidoras', 'agurkas', 'svogunas', 'cesnakas', 'morka', 'burokas', 'ridikelis', 'salota', 'kopustas', 'spinatas']

for (const darzove of darzoves) {
    console.log(`As auginu: ${darzove}.`);
}
console.log(darzoves.length);
console.log(darzoves[darzoves.length-1]);

// rasti paskutine trumpiausio pavadinimo darzove -> morka

let shortVeg = darzoves[0];
for (const veg of darzoves){
    if (veg.length <= shortVeg.length) {
        shortVeg = veg;
    }
}
console.log('paskutine trumpiausio pavadinimo darvoze yra ' + shortVeg + '.');

// rasti pirma ilgiausios pavadinimo darzove -> pomidoras

let longFirstVeg = darzoves[0]; // spejimas

for (const veg of darzoves) {
    if(veg.length > longFirstVeg.length) {
        longFirstVeg = veg;
    }
}

// rasti pirma darzove kurios pavadinimas prasideda 's' raide

let sRatedVeg = '';

for (const veg of darzoves) {
    if (veg[0] === 's') {
        sRatedVeg = veg;
        break;
    }
}

console.log(sRatedVeg);

console.log(darzoves);
