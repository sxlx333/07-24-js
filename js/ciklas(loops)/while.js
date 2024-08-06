/*
WHILE ciklas
*/

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    console.log(name);
}

// tol kol (tenkina kazkokia salyga) panasiai kaip for condition pvz i < names.length;
console.log('');
let i = 0;
while(i < names.length) {
    const name = names[i];
    console.log(name);
    i++;

}

let k = 0;
while (true) {
    // console.log(k++);
}