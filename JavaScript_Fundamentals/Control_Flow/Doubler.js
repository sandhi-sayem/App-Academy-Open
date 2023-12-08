function doubler(numbers) {
    // your code here...
    let tempArray = [];
    for (let i = 0; i < numbers.length; i++)
        tempArray.push(numbers[i] * 2);
    return tempArray;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]