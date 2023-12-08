// your code here
const evenNumbers = function (number) {
    const arr = [];
    for (let i = 2; i < number; i += 2)
        arr.push(i);

    return arr;
}


console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]