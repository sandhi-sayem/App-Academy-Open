// Your code here
const isPrime = function (num) {
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (num % i === 0) return false;

    return num > 1;
}

const primeFactors = num => {
    const arr = [];
    for (let i = 2; i <= num; i++)
        if (num % i === 0 && isPrime(i))
            arr.push(i);

    return arr;
}

console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]