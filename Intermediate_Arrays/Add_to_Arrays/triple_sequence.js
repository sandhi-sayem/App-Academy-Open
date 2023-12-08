function tripleSequence(start, length) {
    // your code here
    const arr = [start];
    while (arr.length < length)
        arr.push(arr[arr.length - 1] * 3);

    return arr;
}

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]