/*
Kintamieji (duomenu tipai):
    - number
    - string (tekstas)
    - boolean (true/false)
    - array (sarasas)
    - object (kompleksiskas duomo/struktura)
    - null
    - undefined
salygos/palyginimo (if) :
    -  boolean logika
    - if
    - switch
    - ternary
ciklai (for):
    - for
    - for-of
    - for-in
    - while
    - do-while
    - cikliski metodai:
        - map
        - filter
        - sort
        - reduce
        - foreach
        - N+1...
function:
    - "iprastos" deklaruotinos
    - anonimines (priskirtos kintamajam)
    - rodyklines (arrow)
class (oop):
    - class
    - inheritence
    - private values
    - static method
event listeners:
    - keyboard click
    - mouse click (left/main)
    - mouse click (right/context)
    - scroll




Number (skaicius)

skaiciai buna:
- teigiami / neigiami
- sveikieji / desimtainiai   (3.14)
- normalus

nenormalus "skaiciai":
- NaN (skaiciaus tipo klaida)
_ Infinity

Operatoriai:
    - aritmetiniai: +,  -,   *,   /,  %, ++, --
    -aritmetiniai priskyrimo: +=, -=, /=, *=, %=

Operatoriyu skaiciavimu vykdymo eiliskumas:
    1) *, /
    2) +, -, %
*/

console.log(1);
console.log(3.14);
console.log(0);
console.log(-1);
console.log(-3,14);


console.log(Infinity);
console.log(-Infinity);
console.log(NaN);


/* trys skirtingi budai kintamiejam priskirti reiksme
KINTAMUJU INICIAVIMAS
    - const (default)
    - let (kai reiksme turi keistis)
    - var (nenaudoti, nebent zinai ka darai)
    - neinicijuojant elgiasi kaip var pvz.  a = 2;
*/
const a = 5;
let b = 7;
var c = 666;

console.log(a);
console.log(b);
console.log(c);


const age = 99;
console.log(age);


const mark1 = 10;
const mark2 = 3;
const mark3 = 6;
const mark4 = 8;
const mark5 = 2;

const marksTotal = mark1 + mark2 + mark3 + mark4 + mark5;
console.log(marksTotal);

const marksAverage = marksTotal / 5;
console.log(marksAverage);

let marksSum = 0;
console.log(marksSum);

marksSum = 999999;
console.log(marksSum);

console.clear();


let total = 0;
console.log(total);

total = total + 100;
console.log(total);

total = total / 5;
console.log(total);

total = total - 2;
console.log(total);

total = total * 9;
console.log(total);

total = total % 5;
console.log(total);

const number = 54;
const div = 5;

const mod = number % div;
const integer = (number - mod) / div;
const integer2 = (number - number % div) / div;

console.log(mod);
console.log(integer);
console.log(integer2);

console.clear();

const day = 28;
const weekday = day % 7;

console.log(weekday);

/*
rez d
1   1   8   15
2   2   9
3   3   10
4   4   11
5   5   12  
6   6   13  
0   7   14
*/

console.clear();

let gg = 0;
console.log(gg);

gg = gg + 100;
console.log(gg);

gg += 100;
console.log(gg);

gg /= 5;
console.log(gg);

gg -= 10;
console.log(gg);

gg *= 3;
console.log(gg);

gg %= 7;
console.log(gg);

console.clear();

let i = 0;
console.log(i);

i = i + 1;
console.log(i);

i += 1;
console.log(i);
i += 1;
console.log(i);
i += 1;
console.log(i);
i += 1;
console.log(i);

i++;
console.log(i);

i++;
console.log(i);


console.clear();

let m = 0;
console.log(m);
console.log(++m);
console.log(++m);


console.log(m);
console.log(m++);  // 3 ispausdina skaiciu poto kitam etape padidina
console.log(m++); // 4
console.log(m++); // 5

console.log(m);
console.log(m);


console.clear();

let skola = 55;
console.log(skola);

skola = skola - 1;
console.log(skola);

skola -= 1;
console.log(skola);

skola--;
console.log(skola);

--skola;
console.log(--skola);

--skola;
console.log(--skola);

--skola;
console.log(--skola);

--skola;
console.log(--skola);

console.clear();

let opa = 100;
console.log(opa);

opa = opa % 3;
console.log(opa);

opa = opa + 60;
console.log(opa);

opa = opa % 7;
console.log(opa);