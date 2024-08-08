
console.log("panaudoti cikla perrasyti tekstinio tipo kintamuju reiksmes is kito galo");
console.log("pvz.: \"abcdef\" ->  \"fedcba\" ");
console.log(" ");

function stringReverse(str) {
    if (typeof str !== 'string') {
        return 'ERROR: reikia duoti string tipo reiksme';
    }
    if (str === '') {
        return 'ERROR: duota reiksme negali buti tuscias string';
    }

    let reversedString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    //  for (let i = 0; i < str.length; i++){
    //     reversedString += str[i] ;
    //  }
    return reversedString;
}




console.log(stringReverse(1));
console.log(stringReverse(true));
console.log(stringReverse(null));
console.log(stringReverse([]));
console.log(stringReverse({}));
console.log(stringReverse(undefined));
console.log(stringReverse());
console.log(stringReverse(stringReverse));

console.log(stringReverse(''));


console.log('---------------');

console.log(stringReverse('kazkas'));
console.log(stringReverse('labas'), '-->', 'sabal');
console.log(stringReverse('sedek'), '-->', 'kedes');




// let lol = 'labas';
// console.log(lol.length);
// console.log(lol[5]);

// console.log(lol.length - 1);
// console.log(lol[4]);