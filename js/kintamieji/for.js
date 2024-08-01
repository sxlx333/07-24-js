/*
FOR - foras, standartinis ciklas (for loop)
*/

let i = 0;

i += 7;
console.log(i);
i += 7;
console.log(i);
i += 7;
console.log(i);
i += 7;
console.log(i);
i += 7;
console.log(i);
i += 7;
console.log(i);
i += 7;
console.log(i);
i += 7;
console.log(i);
i += 7;
console.log(i);
i += 7;
console.log(i);
i += 7;
console.log(i);



console.log('-----------------');

for (let i=0; i<5; i=i + 1) {       // () - parametrai - kiek kartu cikla darys
    console.log(i);
}

console.log('-------- su masyvu ---------');
// 1) ispausdinti 1) Labas 2) rytas 3) Lietuva


const dict = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];

let index = 0;
console.log((index + 1) + ') ' + dict[index]);
index++;

console.log((index + 1) + ') ' + dict[index]);
index++;

console.log((index + 1) + ') ' + dict[index]);
index++;


console.log('-------tas pats tik su ciklu--------');

for (let i = 0; i < dict.length; i++) {               // ismokti mintinai
    console.log((i + 1) + ') ' + dict[i]);
}


console.clear();


for (let j = 20; j <  30; ) {
    if (j < 25) {
        console.log('--', j);
    } else {
        console.log('+++++', j);
    }
    j++;
}





//          i: 0   1  2  3  4
const marks = [10, 2, 4, 8, 6];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    console.log(i, '-->', marks[i]);
    sum += marks[i];
}

console.log(sum);

// atvirskciai atspausdinti nuo 6 8 4 2 10

for (let i = marks.length-1; i >= 0; i--) {
    console.log('>>>', marks[i]);
}

// N.D. kuo daugiau variaciju kaip parasyti cikla tam, kad gauti atbuline tvarka reiksmes kaip virs komentaro