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
 
