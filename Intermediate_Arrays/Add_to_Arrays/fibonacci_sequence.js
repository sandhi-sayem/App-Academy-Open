// Your code here
const fibonacciSequence = length => {
    if (length === 0)
        return [];
    else if (length === 1)
        return [1];

    const arr = [1, 1];
    for (let i = 2; i < length; i++)
        arr.push(arr[i - 1] + arr[i - 2]);

    return arr;
}

console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));  // [ ]
console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(2));  // [ 1, 1 ]