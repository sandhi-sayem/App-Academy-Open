function greatestFactorArray(array) {
    // your code here
    const newArray = [];

    for (let num of array)
        if (num % 2 === 0 && num !== 2 && num !== -2)
            newArray.push(num / 2);
        else
            newArray.push(num);


    return newArray;
}

console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]
console.log(greatestFactorArray([2, 0, 1, 6, -2, -3, -6]));