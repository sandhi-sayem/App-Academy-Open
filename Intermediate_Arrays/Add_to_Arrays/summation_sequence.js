const summation = num => {
    let sum = 0;

    for (let i = 1; i <= num; i++)
        sum += i;

    return sum;
}

function summationSequence(start, length) {
    // your code here
    const arr = [start];

    while (arr.length < length)
        arr.push(summation(arr[arr.length - 1]));

    return arr;
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]