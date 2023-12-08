// Your code here
const commonFactors = (start, end) => {
    const arr = [];
    const max = start > end ? start : end;
    for (let i = 1; i <= max; i++)
        if (start % i === 0 && end % i === 0)
            arr.push(i);

    return arr;
}

console.log(commonFactors(50, 30));            // [1, 2, 5, 10]
console.log(commonFactors(8, 4));              // [1, 2, 4]
console.log(commonFactors(4, 8));              // [1, 2, 4]
console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
console.log(commonFactors(7, 9));              // [1]