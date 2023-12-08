function fibonacci(length) {
    // your code here
    if (length < 1) {
        return [];
    } else if (length === 1) {
        return [1];
    }
    const arr = [1, 1]
    for (let i = 2; i < length; i++)
        arr.push(arr[i - 2] + arr[i - 1]);

    return arr;
}

console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]