/* 
ND CIKLAI
ciklo FOR panaudojimas
*/
console.log("suskaiciuoti ka gausime susumavus skaicius intervale tarp (imtinai)");
function rangeSum(start, end) {
// 1. atejusios informacijos (params) validavimas
    let sum = 0;

// 2. logika
// 0
// 1
// 2
// 3
// 4
    for (let i = start; i <= end; i++) { 
        sum += i;
    }
// 3. logikoje gauto rezultato validavimas

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


console.log("");
console.log("panaudoti cikla perrasyti tekstinio tipo kintamuju reiksmes is kito galo");
console.log("pvz.: \"abcdef\" ->  \"fedcba\" ");









