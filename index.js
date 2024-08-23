/*
- kintamieji (duomenu tipai):
    + iniciavimo būdai
    + number
    + string (tekstas)
    + boolean (true/false)
    + array (sąrašas)
    + object (kompleksiškas duomuo/struktūra)
    + null
    + undefined
- salygos/palyginimo (if):
    + boolean logika
    + if
    - switch
    + ternary
- ciklai (for):
    + for
    + for-of
    + for-in
    + while
    - do-while (patys, jei norit)
    - cikliski metodai:
        + map
        + filter
        - sort
        - reduce
        - foreach
        - N+1...
+ import-export
+ function:
    + "iprastos" deklaruotinos
    + anonimines (priskirtos kintamajam)
    + rodyklines (arrow)
- methods:
    + number
    + string
    - array
    - object
- class (oop):
    - class
    - inheritence
    - private values
    - static method
- event listeners:
    - keyboard click
    - mouse click (left/main)
    - mouse click (right/context)
    - scroll
*/


// console.log(Array.prototype.flat);
// console.log(Array.prototype.every);
// console.log(Array.prototype.some);
// console.log(Array.prototype.forEach);
// console.log(Array.prototype.sort);
// console.log(Array.prototype.reduce);

const doubleNumber = (num) => {
    return(num * 2);
}
console.log(doubleNumber(10));

const greet = (name) => {
    return `Sveikas, ${name}!`
}
console.log(greet("Jonas"));

// const isEven = (num) => {
//     if (num % 2 === 0) {
//         return true
//     }
//     return false;
// }
const isEven = (num) => {
    console.log(num % 2 === 0 ? true : false);
}
isEven(9);
isEven(10);
isEven(11);

// const checkAge = (age) => {
//     if (age >= 18) {
//         return 'Esi pilnametis';
//     }
//     return 'esi nepilnametis';
// }
const checkAge = (age) => {
return (age < 18 ? 'esi nepilnametis' : age>65 ? "esi pensininkas" : 'esi pilnametis');   
                                            // ? - jeigu true       : - jeigu false
}

console.log(checkAge(9));
console.log(checkAge(18));
console.log(checkAge(20));
console.log(checkAge(77));

const sum = (a, b) => {
    return a + b;
}
console.log(sum(1, 3));
console.log(sum(9, 5));


// const isUpperCase = (str) => {
//  if (str[0] === str[0].toUpperCase()){
//     return true;
//  }
//     return false;
// }

const isUpperCase = (str) => {
       return str[0] === str[0].toUpperCase();
   }
console.log(isUpperCase("Labas"));
console.log(isUpperCase("labas"));
console.log(isUpperCase("LABAS"));

// function getLastElement(arr) {
//     if (arr.length === 0) return undefined; // Handle empty array case
//     return arr[arr.length - 1];
// }

function getLastElement(arr) {
    return arr.slice(-1)[0];
}
console.log(getLastElement([1, 2, 3, 4, 5]));


// "Sveikinimas pagal valandas"
// Parašykite funkciją greetBasedOnTime(hour), kuri grąžina "Labas rytas", jei valanda yra nuo 0 iki 12, "Laba diena" nuo 12 iki 18, ir "Labas vakaras" nuo 18 iki 24.
const greetBasedOntime = (hour) => {
    if (hour >= 0 && hour <= 12) {
        return 'Laba diena';
    }
    return 'Labas vakaras';
}
console.log(greetBasedOntime(-1));
console.log(greetBasedOntime(1));
console.log(greetBasedOntime(4));
console.log(greetBasedOntime(12));
console.log(greetBasedOntime(15));
console.log(greetBasedOntime(20));
console.log(greetBasedOntime(24));
 
// "Apsikeitimas kintamaisiais"
// Sukurkite funkciją swap(a, b), kuri priima du kintamuosius ir grąžina masyvą su jais apkeistais vietomis. Pavyzdžiui, swap(5, 10) turėtų grąžinti [10, 5].

// const swap = (a, b) => {
//     let saugomareiksme1 = 0;
//     let saugomareiksme2 = 0;
//     saugomareiksme1 = a;
//     saugomareiksme2 = b;

//     return [saugomareiksme2, saugomareiksme1];
// }

// const swap = (a, b) => {  // Destructuring is a clean and modern way to swap two variables
//     [a, b] = [b, a];
//     return [a, b];
// }

// const swap = (a, b) => [b, a]; // array directly to swap and return the values:

// const swap = (a, b) => {   // similar to your original approach but without unnecessary steps
//     const temp = a;
//     a = b;
//     b = temp;
//     return [a, b];
// }

// const swap = (a, b) => { // Bitwise XOR (Trick for Integers)
//     a = a ^ b;
//     b = a ^ b;
//     a = a ^ b;
//     return [a, b];
// }

const swap = (a, b) => {     //Arithmetic Operations
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}
console.log(swap(5, 10));
console.log(swap(6, 11));







/*kambariai uzduotis */
console.clear();
console.log("1. skaiciaus lygumas");
function skaiciusLyginisArNe (skaicius) {
    if (skaicius % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}
console.log(skaiciusLyginisArNe(1), "1");
console.log(skaiciusLyginisArNe(2), "2");
console.log(skaiciusLyginisArNe(3), "3");
console.log(skaiciusLyginisArNe(4), "4");



console.log('');
console.log("2. pasukant teksta atvirskciai");
function grazintiAtvirksciaiTeksta (tekstas) {
    let tekstasKurisBusAtvirkscias = '';
    for (let i = tekstas.length - 1; i >= 0; i--) {
        tekstasKurisBusAtvirkscias += tekstas[i];
    }
    return tekstasKurisBusAtvirkscias;
}
console.log(grazintiAtvirksciaiTeksta("Labas"));
console.log(grazintiAtvirksciaiTeksta("rytas"));
console.log(grazintiAtvirksciaiTeksta("Lietuva!"));


console.log('');
console.log("3. skaiciu kvadratai");
function masyvoKvadratas (sarasas) {
    let masyvasSuKvadratoReiksmemis = [];
    for (let i = 0; i < sarasas.length; i++) {
        masyvasSuKvadratoReiksmemis.push(sarasas[i] * sarasas[i]);
    }
    return masyvasSuKvadratoReiksmemis;
}
console.log(masyvoKvadratas([1, 2, 3]));


console.log('');
console.log("4. skaiciu suma");
function suma (a, b) {
    return a + b;
}
console.log(suma(10, 25));

console.log('');
console.log("5. keliu skaiciu suma");
function masyvoSuma (sarasas) {
    let suma = 0; // kuria bus saugomas
    for (let i = 0; i < sarasas.length; i++) {
        suma += sarasas[i];
    }
    return suma;
}
console.log("1 + 2 + 3 = ",masyvoSuma([1, 2, 3]));

console.log('');
console.log("6. teksto simboliu skaiciavimas");
function simboliuSkaiciavimas (eilute) {
    let tusciasObjektas = {};
    for (let i = 0; i < eilute.length; i++) {
        let raide = eilute[i]; // get the currect character
        if (tusciasObjektas[raide]) { // check if the character is already in the object
            tusciasObjektas[raide]++; // if it exists increase the count by 1
        } else {
            tusciasObjektas[raide] = 1; //if it doesnt exist add the character to the object with a count of 1
        }
    }
    return tusciasObjektas;
}
console.log(simboliuSkaiciavimas("eilute"));
console.log(simboliuSkaiciavimas("pipiras"));

console.log('');
console.log("7. didziausias skaicius");
function grazintiDidziausiaSkaiciuIsMasyvo (sarasas) {
    let didziausiasSkaicius = sarasas[0];
    for (let i = 1; i < sarasas.length; i++) {  //  Start from 1 since sarasas[0] is already the initial max
        if (didziausiasSkaicius < sarasas[i]) {
            didziausiasSkaicius = sarasas[i]; // Update the maximum if current element is larger
        }
    }
    return didziausiasSkaicius;
}
console.log(grazintiDidziausiaSkaiciuIsMasyvo([10, 2, 6, 4, 8]));


console.log('');
console.log("8. maziausias skaicius");
function grazintiMaziausiaSkaiciuIsMasyvo (sarasas) {
    let maziausiasSkaicius = sarasas[0];
    for (let i = 1; i < sarasas.length; i++) {
        if (maziausiasSkaicius > sarasas[i]) {
            maziausiasSkaicius = sarasas[i];
        }
    }
    return maziausiasSkaicius;
}
console.log(grazintiMaziausiaSkaiciuIsMasyvo([10, 2, 6, 4, 8]));


console.log('');
console.log("9. daugkartiniai zodziai");
function kartotiZodi (zodis, kiekKartoti) {
    let keiciasi = '';
    for (let i = 0; i < kiekKartoti; i++) {
        keiciasi += zodis; // Append the word to the result each time
    }
    return keiciasi;
}
console.log(kartotiZodi("labas", 3));



console.log('');
console.log("10. fibonacci seka");
const howManyFibonacci = (num) => {
    let list = [0, 1];
    for (let i = 0; i < num; i++) {
        list.push(list[i] + list[i + 1]);
    }
    return list.slice(0, -2);
}
console.log(howManyFibonacci(5));




console.log('');
console.log("11. masyvo elementu skaiciavimas");
function suskaiciuotiMasyvoIlgi (sarasas) {
    return sarasas.length;
}
console.log(suskaiciuotiMasyvoIlgi([1, 2, 3, 4, "Jonas"]));


console.log('');
console.log("12. filtravimas pagal salygas");
function tikTeigiamiSkaiciaiMasyve (masyvas) {
    const opaPrigautasTeigiamas = [];
    for (let i = 0; i < masyvas.length; i++) {
        if (masyvas[i] >= 0) {
            opaPrigautasTeigiamas.push(masyvas[i]);
        } 
    }
    return opaPrigautasTeigiamas;
}
console.log(tikTeigiamiSkaiciaiMasyve([-7, -6, -5, -4, -3, -2, -1 ,0, 1, 2, 3, 4, 5, 6, 7]));
console.log(tikTeigiamiSkaiciaiMasyve([-3, -2, -1, 0, 1]));




console.log('');
console.log("13. rask eilutes ilgi");
function returnStrLength (str) {
    return str.length;
}
console.log("'labas vakaras, Lietuva!' eilutės ilgis yra: ",returnStrLength("labas vakaras, Lietuva!"));



console.log('');
console.log("14. patikrink ar masyve yra skaicius");
function isThereAHiddenNumberInArray (array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            return true;
        }
    }
    return false; // Only return false after the entire array has been checked
}
console.log(isThereAHiddenNumberInArray(["as ne skaicius", {name: 'oi'}]));
console.log(isThereAHiddenNumberInArray(["as ne skaicius", 1]));
console.log(isThereAHiddenNumberInArray(["as ne skaicius", "ne"]));
console.log(isThereAHiddenNumberInArray(["1", "2"]));
console.log(isThereAHiddenNumberInArray([1, 2, 3]));



console.log('');
console.log("15. apskaiciuok skaiciaus faktoriala");
function gautiSkaiciausFaktoriala (skaicius) {
    let faktorialas = 1;
    for (let i = 1; i <= skaicius; i++) { // The loop starts at i = 1 and goes up to i <= skaicius because factorials are calculated by multiplying all positive integers up to the number itself.
        faktorialas *= i; //On each iteration, faktorialas is multiplied by i, which ensures that all integers from 1 to skaicius are multiplied together.
    }
    return faktorialas;
}
console.log(gautiSkaiciausFaktoriala(5), " 5x4x3x2x1 = 120");




console.log('');
console.log("16. masyvo rusiavimas");
function surusiuotiMasyvaNuoMazIkiDid (masyvas){
    return masyvas.sort((a, b) => a - b)
}   
console.log(surusiuotiMasyvaNuoMazIkiDid([10, 2, 8, 4, 6]));


console.log('');
console.log("17. pasalink dublikatus is masyvo");
function dublicate(masyvas) {
    const find = {};
    return masyvas.filter((element) => {
        if (!find[element]) {
            find[element] = true;
            return true;
        }
        return false;
    })
}
console.log(dublicate(['as', 'dar tu', 'tu', 'dar du']));

console.log('');
console.log("18. teksto simboliu daznio skaiciavimas");
function labas(text) {
    const newtext = {}
    for (let i of text){
        if (i in newtext) {
            newtext[i]++  
        } else [
            newtext[i] = 1
        ]
    }
    return newtext
}
console.log("labas diena");
console.log('');
console.log("19. didziuju raidziu keitimas i mazasias ir atvirksciaia");

const caseRev = (str) => {
    let revStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i].toUpperCase() === str[i]) {
        revStr += str[i].toLowerCase();
        }
        if (str[i].toLowerCase() === str[i]) {
            revStr += str[i].toUpperCase();
        }
    }
    return revStr;
}
console.log(caseRev('LABas VAKAras'));

console.log('');
console.log("20. patikrink ar skaicius yra pirminis");
const isPrime = (num) => {
    if (num === 2 || num === 3) {
        return true;
    }
    if (num === 1) {
        return false;
    }
    if (num % 2 !== 0 && num % 3 !== 0) {
        return true;
    }
    return false;
}
console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(12));
console.log(isPrime(20));








 