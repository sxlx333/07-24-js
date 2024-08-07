/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 */


// #########################
console.log(isFinite);
console.log(isFinite(-5));
console.log(isFinite(0));
console.log(isFinite(5));
console.log(isFinite(5.123));
console.log(isFinite(-5.312));
console.log(isFinite(NaN));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));
console.log('-------------------');
console.log(isFinite(""));
console.log(isFinite('asdasd'));
console.log(isFinite(true));
console.log(isFinite(false));
console.log(isFinite(null));
console.log(isFinite(undefined));
console.log(isFinite());
console.log(isFinite([]));
console.log(isFinite([1]));
console.log(isFinite({ name: 'Jonas'}));
console.log(isFinite({ age: 99}));
console.log(isFinite(() => {}));
console.log(isFinite([1, 2]));
console.log(isFinite({}));
console.log(isFinite('123123213'));
console.log(isFinite('5'));


// #########################
console.log(Number.isFinite);

console.log(Number.isFinite(-5));
console.log(Number.isFinite(0));
console.log(Number.isFinite(5));
console.log(Number.isFinite(5.123));
console.log(Number.isFinite(-5.312));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log('-------------------');
console.log(Number.isFinite(""));
console.log(Number.isFinite('asdasd'));
console.log(Number.isFinite(true));
console.log(Number.isFinite(false));
console.log(Number.isFinite(null));
console.log(Number.isFinite(undefined));
console.log(Number.isFinite());
console.log(Number.isFinite([]));
console.log(Number.isFinite([1]));
console.log(Number.isFinite({ name: 'Jonas'}));
console.log(Number.isFinite({ age: 99}));
console.log(Number.isFinite(() => {}));
console.log(Number.isFinite([1, 2]));
console.log(Number.isFinite({}));
console.log(Number.isFinite('123123213'));
console.log(Number.isFinite('5'));



console.log();
console.log(Number.isInteger);
console.log(Number.isInteger(-5));
console.log(Number.isInteger(0));
console.log(Number.isInteger(5));
console.log(Number.isInteger(5.123));
console.log(Number.isInteger(-5.312));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(-Infinity));
console.log('-------------------');
console.log(Number.isInteger(""));
console.log(Number.isInteger('asdasd'));
console.log(Number.isInteger(true));
console.log(Number.isInteger(false));
console.log(Number.isInteger(null));
console.log(Number.isInteger(undefined));
console.log(Number.isInteger());
console.log(Number.isInteger([]));
console.log(Number.isInteger([1]));
console.log(Number.isInteger({ name: 'Jonas'}));
console.log(Number.isInteger({ age: 99}));
console.log(Number.isInteger(() => {}));
console.log(Number.isInteger([1, 2]));
console.log(Number.isInteger({}));
console.log(Number.isInteger('123123213'));
console.log(Number.isInteger('5'));

console.log(isNaN);
console.log(isNaN(NaN));
console.log(isNaN(-5));
console.log(isNaN(0));
console.log(isNaN(5));
console.log(isNaN(5.123));
console.log(isNaN(-5.312));
console.log(isNaN(Infinity));
console.log(isNaN(-Infinity));
console.log('-------------------');
console.log(isNaN(""));
console.log(isNaN('asdasd'));
console.log(isNaN(true));
console.log(isNaN(false));
console.log(isNaN(null));
console.log(isNaN(undefined));
console.log(isNaN());
console.log(isNaN([]));
console.log(isNaN([1]));
console.log(isNaN({ name: 'Jonas'}));
console.log(isNaN({ age: 99}));
console.log(isNaN(() => {}));
console.log(isNaN([1, 2]));
console.log(isNaN({}));
console.log(isNaN('123123213'));
console.log(isNaN('5'));





console.log(Number.isNaN);
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(-5));
console.log(Number.isNaN(0));
console.log(Number.isNaN(5));
console.log(Number.isNaN(5.123));
console.log(Number.isNaN(-5.312));
console.log(Number.isNaN(Infinity));
console.log(Number.isNaN(-Infinity));
console.log('-------------------');
console.log(Number.isNaN(""));
console.log(Number.isNaN('asdasd'));
console.log(Number.isNaN(true));
console.log(Number.isNaN(false));
console.log(Number.isNaN(null));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN());
console.log(Number.isNaN([]));
console.log(Number.isNaN([1]));
console.log(Number.isNaN({ name: 'Jonas'}));
console.log(Number.isNaN({ age: 99}));
console.log(Number.isNaN(() => {}));
console.log(Number.isNaN([1, 2]));
console.log(Number.isNaN({}));
console.log(Number.isNaN('123123213'));
console.log(Number.isNaN('5'));


console.log(parseInt);              // intencija naudoti ant stringo
console.log(parseInt(1));
console.log(parseInt(1.23));          // grazina sveikaji skaiciu
console.log(parseInt(1.99));
console.log(parseInt(-1));
console.log(parseInt(-1.23));
console.log(parseInt(-1.99));
console.log(parseInt(NaN));
console.log(parseInt(Infinity));
console.log(parseInt(-Infinity));
console.log('-----------------');
console.log(parseInt(true));
console.log(parseInt(false));
console.log(parseInt(null));
console.log(parseInt());
console.log(parseInt(undefined));
console.log(parseInt(() => {}));
console.log(parseInt([]));
console.log(parseInt([4]));
console.log(parseInt([4,5]));
console.log(parseInt([4, 5, 6]));
console.log(parseInt([4.56, 5, 6]));
console.log(parseInt({}));
console.log(parseInt({name: 'Jonas'}));
console.log(parseInt({age: 99}));
console.log('----------------');
console.log(parseInt(''));
console.log(parseInt('aaaaa'));
console.log(parseInt('aaaa5555'));
console.log(parseInt('aaaa5555cccc'));
console.log(parseInt('5555cccc'));
console.log(parseInt('5555.6666cccc'));


console.log(parseInt('-'));
console.log(parseInt('-aaaaa'));
console.log(parseInt('-aaaa5555'));
console.log(parseInt('-aaaa5555cccc'));
console.log(parseInt('-5555cccc'));
console.log(parseInt('-5555.6666cccc'));
console.log(parseInt('-5555cccc6666'));
console.log(parseInt('5+6'));
console.log(parseInt('5e6'));            // 5e6 yra matematine israiska  5e - 5 milijonai      e6 - (10^6)
console.log(parseInt('-5e6'));
console.log(parseInt(5e6));
console.log(parseInt(-5e6));


console.log(Number.parseInt);
console.log(Number.parseInt('14'));
console.log(Number.parseInt('14aaaaaa'));
console.log(Number.parseInt('14e6'));
console.log(Number.parseInt('-14'));
console.log(Number.parseInt('-14aaaa'));
console.log(Number.parseInt('-14e6'));

console.clear();
console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY === -Infinity);            // tas pats
console.log(Number.POSITIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY === Infinity);              //same stuff naudoti Infinity


const n1 = 7;
const n2 = 5.4;
const n3 = 5.43;
const n4 = 5.432;
const n5 = 5.4321;

console.log(n1.toFixed(2) + ' Eur');     // toFixed rodo skaicius po kablelio     LABAI NAUDINGAS

console.log(n2.toFixed(0), n2.toFixed(1), n2.toFixed(2), n2.toFixed(3), n2.toFixed(4));
console.log(n3.toFixed(0), n3.toFixed(1), n3.toFixed(2), n3.toFixed(3), n3.toFixed(4));
console.log(n4.toFixed(0), n4.toFixed(1), n4.toFixed(2), n4.toFixed(3), n4.toFixed(4));
console.log(n5.toFixed(0), n5.toFixed(1), n5.toFixed(2), n5.toFixed(3), n5.toFixed(4));





function sum(a, b) {
    return Number.parseFloat((a + b).toFixed(10));  // funkcija po kablelio 10 skaitmenu
}
const crazy1 = 0.1 + 0.2;

console.log(crazy1);
console.log(crazy1.toFixed(10));
console.log(Number.parseFloat(crazy1.toFixed(10)));

const crazy2 = sum(0.1, 0.2);
console.log(crazy2);


const crazy3 = sum(22, 456);
console.log(crazy3);


const crazy4= sum(0, 25,289999999999);
console.log(crazy4);

const crazy5 = sum(0, 25.2999999999999999999999999999);
console.log(crazy5);

const crazy6 = sum(0, 25.2999999949999999999999);
console.log(crazy6);





