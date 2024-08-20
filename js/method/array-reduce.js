// [1, 2, 3] -> 123
// [true, false] -> true


const marks = [10, 2, 8, 4, 6];

let sum = 0;

for (const mark of marks) {
    sum += mark;
    
}

console.log(sum);

const markSum = marks.reduce((sum, mark) => sum + mark, 0); // () => {}, 0 prideda pazymi prie sumos 
console.log(markSum);


console.log([1, 2, 3, 4, 5]);

// 1+2+3+4+5  = 15
console.log([1, 2, 3, 4, 5].reduce((t, n) => t + n));

// 0+1+2+3+4+5  = 15
console.log([1, 2, 3, 4, 5].reduce((t, n) => t + n, 0));

// 0+1+2+3+4+5+10 = 25
console.log([1, 2, 3, 4, 5].reduce((t, n) => t + n, 10));

// 1-2-3-4-5= -13
console.log([1, 2, 3, 4, 5].reduce((t, n) => t - n));

// 0-1-2-3-4-5 = -15
console.log([1, 2, 3, 4, 5].reduce((t, n) => t - n, 0));

// 1*2*3*4*5
console.log([1, 2, 3, 4, 5].reduce((t, n) => t * n));

// 0*1*2*3*4*5
console.log([1, 2, 3, 4, 5].reduce((t, n) => t * n, 0));


console.log('test kuris didziausias');
console.log([1, 2, 3, 4, 5].reduce((max, n) => max > n ? max : n));
console.log([5, 4, 1, 2, 3].reduce((max, n) => max > n ? max : n));
console.log([4, 5, 3, 4, 5].reduce((max, n) => max > n ? max : n));
console.log([5].reduce((max, n) => max > n ? max : n, 0));
console.log([].reduce((max, n) => max > n ? max : n, 0)); // initial value - 0


console.log([-6, -4, -5, -3, -2, -1].reduce((max, n) => max > n ? max : n, 0)); // klaidinga nes rodo 0
console.log([-6, -4, -5, -3, -2, -1].reduce((max, n) => max > n ? max : n, -Infinity));  // didziausias neigiamas
console.log([10, 2, 8, 4, 6].reduce((min, n) => min < n ? min : n, Infinity));  // maziausias teigiamas
[1, 2, 3].map((n, index, array) => array[0])





