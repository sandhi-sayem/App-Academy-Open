function sumArray(array) {
    // your code here...
    let sum = 0;
    for (let element of array)
        sum += element;

    return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30