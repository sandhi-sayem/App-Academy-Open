function sumArray(array) {
    // your code here...
    let total = 0;
    for (let num of array)
        total += num;

    return total;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30