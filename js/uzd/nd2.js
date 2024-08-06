/* 
ND CIKLAI
ciklo FOR panaudojimas
*/
console.log("suskaiciuoti ka gausime susumavus skaicius intervale tarp (imtinai)");
function rangeSum(start, end) {
// 1. atejusios informacijos (params) validavimas
    if (typeof start !== 'number') {
        return 'ERROR: pirma reiksme turi buti skaicius';
    }
    if (start === Infinity || start === -Infinity) {
        return 'ERROR: pirma reiksme turi buti normalus skaicius';
    }
    if (isNaN(start)) {
        return 'ERROR: pirma reiksme turi buti normalus skaicius';
    }
    if (start % 1 !== 0) {
        return 'ERROR: pirma reiksme turi buti sveikasis skaicius'
    }
    if (typeof end !== 'number') {
        return 'ERROR: antra reiksme turi buti skaicius';
    }
    if (end === Infinity || end === -Infinity) {
        return 'ERROR: antra reiksme turi buti normalus skaicius';
    }
    if (isNaN(end)) {
        return 'ERROR: antra reiksme turi buti normalus skaicius';
    }
    if (end % 1 !== 0) {
        return 'ERROR: antra reiksme turi buti sveikasis skaicius'
    }
    if (start > end) {
        return 'ERROR: pirmasis skaicius negali buti didesnis uz antraji'
    }

// 2. logika
// 0
// 1
// 2
// 3
// 4
// let sum = 0;
//     for (let i = start; i <= end; i++) {   // sprendimas veikia iki milijardo
//         sum += i;
//     }
if (start > end) {
    return 'ERROR: pirmasis skaicius negali buti didesnis'
}
let sum = 0;
if (start === 0) {
    sum = end * (end + 1) / 2;
} else if (end === 0) {
    sum = start * (start - 1) / 2;
} else if (start < 0 && end > 0){
    sum = end * (end + 1) / 2;
    sum += start * (start - 1) / 2;
} else {
    for (let i = start; i <= end; i++) {
        sum += i;
    }
}
// 3. logikoje gauto rezultato validavimas
    if (sum % 1 !== 0) {
        return 'ERROR: ';
    }

// 4. rezultato grazinimas
    return sum;
}
console.log("1) a)",rangeSum(0, 0));




let sum1 = 0;
function rangeSum1(start1, end1) {
    for (let i = start1; i <= end1; i++) {
        sum1 += i;
    }
    return sum1;
}
console.log("1) b)",rangeSum1(0, 4));


let sum2 = 0;
function rangeSum2(start2, end2) {
    for (let i = start2; i <= end2; i++) {
        sum2 += i;
    }
    return sum2;
}
console.log("1) c)",rangeSum2(0, 100));



let sum3 = 0;
function rangeSum3(start3, end3) {
    for (let i = start3; i <= end3; i++) {
        sum3 += i;
    }
    return sum3;
}
console.log("1) d)",rangeSum3(574, 815));




let sum4 = 0;
function rangeSum4(start4, end4) {
    for (let i = start4; i <= end4; i++) {
        sum4 += i;
    }
    return sum4;
}
console.log("1) e)",rangeSum4(-50, 50));



let sum5 = 0;
function rangeSum5(start5, end5) {
    for (let i = start5; i <= end5; i++) {
        sum5 += i;
    }
    return sum5;
}
console.log("1) f)",rangeSum5(-70, 30));


console.log('-------test su string-----');


function rangeSum6(start6, end6) {
    if (typeof start6 !== 'number') {
        return 'ERROR: pirma reiksme turi buti skaicius';
    }
    if (typeof end6 !== 'number') {
        return 'ERROR: antra reiksme turi buti skaicius';
    }
    let sum6 = 0;
    for (let i = start6; i <= end6; i++) {
        sum6 += i;
    }
    return sum6;
}
console.log(rangeSum6("labas", 'as'));
console.log(rangeSum6(1, 'as'));





console.log('-------test su skaiciais po kablelio-----');
function rangeSum7(start7, end7) {
    if (start7 % 1 !== 0) {
        return 'ERROR: pirma reiksme turi buti sveikasis skaicius'
    }
    if (end7 % 1 !== 0) {
        return 'ERROR: antra reiksme turi buti sveikasis skaicius'
    }
    if (start7 > end7) {
        return 'ERROR: pirmasis skaicius negali buti didesnis uz antraji'
    }
    let sum7 = 0;
    for (let i = start7; i <= end7; i++) {
        sum7 += i;
    }
    return sum7;
}
console.log(rangeSum7(2.5, 4));
console.log(rangeSum7(2, 4.7));
console.log(rangeSum7(5, 4));
// console.clear();
/* visos reiksmes */
console.log('');
console.log('VISOS IMANOMOS REIKSMES');


console.log(rangeSum('labas', 'rytas'));
console.log(rangeSum(0, 'rytas'));
console.log(rangeSum('rytas', 2));
console.log(rangeSum(777, true));
console.log(rangeSum(true, 777));
console.log(rangeSum(true, false));
console.log(rangeSum(777, []));
console.log(rangeSum([], 777));
console.log(rangeSum([], [15]));
console.log(rangeSum([77], [15]));
console.log(rangeSum([77, 88], [15]));
console.log(rangeSum([77, 88], [15, 16]));
console.log(rangeSum(5, {}));
console.log(rangeSum({}, 5));
console.log(rangeSum({}, {}));
console.log('----nulls undefined----');
console.log(rangeSum(5, null));
console.log(rangeSum(null, 5));
console.log(rangeSum(null, null));
console.log(rangeSum(5, undefined));
console.log(rangeSum(undefined, 5));
console.log(rangeSum(undefined, undefined));
console.log(rangeSum(5, rangeSum));
console.log(rangeSum(rangeSum, 5));
console.log(rangeSum(rangeSum, rangeSum));
console.log('----infinity nan-----');
console.log(rangeSum(5, Infinity));
console.log(rangeSum(Infinity, 5));
console.log(rangeSum(Infinity, Infinity));
console.log(rangeSum(5, -Infinity));
console.log(rangeSum(-Infinity, 5));
console.log(rangeSum(-Infinity, -Infinity));
console.log(rangeSum(5, NaN));
console.log(rangeSum(NaN, 5));
console.log(rangeSum(NaN, NaN));
console.log('test');
console.log(rangeSum(0, 1_000_000_000));
console.log(rangeSum(-1_000_000_000, 0));













