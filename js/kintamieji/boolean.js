/*
BOOLEAN - logine reiksme
true / false

Interpretavimas
true -> 1
false -> 0

Operatoriai
    && AND     !!! TURI PIRMENYBE 
    || OR
*/

const arSvieciaSaule = true;
const arNaktis = false;
const arPilnametis = false;

console.log(arSvieciaSaule);
console.log(arNaktis);
console.log(arPilnametis);

const a = true + true;
console.log(a);

const b = false + false;
console.log(b);

const c = true + false;
console.log(c);

const keturi = true + true + true +  true;
console.log(keturi);



console.log(true);

console.clear();
console.log('-------------');
console.log(true && true, true * true);   // true   1 * 1=1
console.log(true && false, true * false);   //false  1*0=0
console.log(false && true, false * true);   //false   0
console.log(false && false, false * false);   //false  0
console.log('-------------');
console.log(true || true);       // true
console.log(true || false);     //true
console.log(false || true);      //true
console.log(false || false);       //false
console.log('-------------');
console.log(true && true || true);      // true
console.log(true && true || false);     // true                      true
console.log(true && false || true);    // true && false = false       true
console.log(false && true || true);     // false && true = false       true
console.log(true && false || false);     // false                   false
console.log(false && true || false);    // false                  false
console.log(false && false || true);    // false                true
console.log(false && false || false);   //false


console.log('-----------4 types with AND operator----------')

console.log(true && true && true && true);      //true
console.log(true && true && true && false);     //false
console.log(true && true && false && true);
console.log(true && false && true && true);
console.log(false && true && true && true);

console.log(true && true && false && false);
console.log(true && false && false && true);
console.log(false && false && true && true);
console.log(true && false && true && false);
console.log(false && true && false && true);        //visi false
console.log(false && true && true && false);

console.log(true && false && false && false);
console.log(false && false && false && true);
console.log(false && false && true && false);
console.log(false && true && false && false);

console.log(false && false && false && false);


console.log('---------------4 types with OR operator----------------');

console.log(true || true || true || true);  //true
console.log(true || true || true || false);
console.log(true || true || false || true);
console.log(true || false || true || true);
console.log(false || true || true || true);

console.log(true || true || false || false);
console.log(true || false || false || true);
console.log(false || false || true || true);
console.log(true || false || true || false);  // visi true
console.log(false || true || false || true);
console.log(false || true || true || false);

console.log(true || false || false || false);
console.log(false || false || false || true);
console.log(false || false || true || false);
console.log(false || true || false || false);  // true

console.log(false || false || false || false); //false 


console.log('---------------4 types with 2 OR ir AND operator----------------');

console.log(true || true && true || true);  
console.log(true || true && true || false);
console.log(true || true && false || true);
console.log(true || false && true || true);
console.log(false || true && true || true);

console.log(true || true && false || false);
console.log(true || false && false || true);
console.log(false || false && true || true);
console.log(true || false && true || false);  
console.log(false || true && false || true);
console.log(false || true && true || false);

console.log(true || false && false || false);
                // true  false     true
console.log(false || false && false || true);
                // false   false    true
console.log(false || false && true || false);  
                // false   false    false
console.log(false || true && false || false);  
                // false   false     false
console.log(false || false && false || false); // false


/*
 &&&   16
 &&|         
 &|&
 |&&
 &||
 ||&
 |&|
 |||
*/
