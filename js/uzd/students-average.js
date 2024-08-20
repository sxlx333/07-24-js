const studentList = [
    {name: 'Jonas', age: 99, marks: [2, 4, 6, 1]},
    {name: 'Maryte', age: 66, marks: []},
    {name: 'Ona', age: 77, marks: [10, 10, 10, 10, 6]},
    {name: 'Petras', age: 88, marks: [3, 2 , 8]},
];
console.log(studentList);

function average(marks) {
    if (marks.length === 0){
        return 0;
    }
    let sum = 0;

    for (const mark of marks) {
        sum += mark
    }
    return sum / marks.length;
}
console.log('----------------------------------');
// for (const student of studentList){  //issitrauki viena konkretu studenta is seimos
//     student.averageMark = average(student.marks);  // pasigauna objekta ir prikuria daug reiksmiu
//     console.log(student.averageMark);
// }
// console.log(studentList);




// // kai islygiuoti su sort pagal averageMark vidurki
// console.log('***************lygiavimas********************');
// studentList.sort((a, b) => a.averageMark - b.averageMark);
// console.log(studentList);

console.log('********************su map**************************');
const betterStudents = studentList.map(
    s => ({...s, average: average(s.marks)}) // su map gaunami studento objektai ir konstruojamas naujamas objektas kuriame isspreadinamos reiksmes kopijuojamas ir nauja reiksme average sukuriama
);
console.log(betterStudents);