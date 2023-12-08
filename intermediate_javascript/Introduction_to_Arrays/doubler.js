function doubler(numbers) {
    // your code here...
    return numbers.map(x => x * 2);
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]