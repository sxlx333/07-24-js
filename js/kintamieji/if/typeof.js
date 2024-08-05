/*
typeof yra tipo nustatymo operatorius

grazina reiksme pvz: 0 -  STRING reiksme - number
*/

console.log(typeof 0);
console.log(typeof 123);
console.log(typeof 1.23);
console.log(typeof -1.23);
console.log(typeof -123);
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);

console.log("-----------");
console.log(typeof '');
console.log(typeof "labas");


console.log("-----------");
console.log(true + true);
console.log(null === null);

console.log(typeof true);
console.log(typeof false);

console.log("-----------");
console.log(typeof undefined);

console.log("-----------");
console.log(typeof []);
console.log(typeof [1, 2]);
console.log(typeof ['labas', 'rytas']);
console.log(typeof {name: 'jonas', age: 99});
console.log(typeof null);


console.log("-----------");
console.log(Array.isArray([]));
console.log(Array.isArray([1, 2]));
console.log(Array.isArray(['labas', 'rytas']));



console.log("---------");
let sum = 0;
function suma (a, b){
    sum = a+ b;
}
console.log(typeof sum);
console.log(typeof suma);

console.log('-----------');
function arTikrasObjektas(item) {
    if (typeof item !== 'object'
        || item === null
        || Array.isArray(item)
    ){
    return false;
} 
return true;
}
console.log(arTikrasObjektas(1));
console.log(arTikrasObjektas('s'));
console.log(arTikrasObjektas(true));
console.log(arTikrasObjektas(undefined));
console.log(arTikrasObjektas(null));
console.log(arTikrasObjektas(arTikrasObjektas));
console.log(arTikrasObjektas([]));
console.log(arTikrasObjektas({}));
