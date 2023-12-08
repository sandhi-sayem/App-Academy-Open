// Your code here
const getDivisors = num => {
    let count = 0;
    for (let i = 1; i < num; i++)
        if (num % i === 0)
            count++;

    return count;
}

const isAntiPrime = function (num) {
    const numCount = getDivisors(num);
    for (let i = num - 1; i > 0; i--) {
        if (getDivisors(i) >= numCount)
            return false;
    }
    return true;
}

console.log(isAntiPrime(24))   // true
console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false
