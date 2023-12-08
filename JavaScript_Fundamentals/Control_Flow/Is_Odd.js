function isOdd(num) {
    // your code here!
    return num % 2 !== 0;
}

function isOddAlternate(num) {
    // your code here!
    if (num % 2 !== 0) return true;
    return false;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true

console.log(isOddAlternate(2)); // => false
console.log(isOddAlternate(5)); // => true
console.log(isOddAlternate(-17)); // => true