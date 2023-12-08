const isPrime = function (num) {
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (num % i === 0) return false;

    return num > 1;
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true