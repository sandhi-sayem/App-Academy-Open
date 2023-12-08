// Your code here
const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (num % i === 0)
            return false;

    return num > 1;
}

const prevPrime = num => {
    for (let i = num - 1; i > 2; i--)
        if (isPrime(i))
            return i;

    return null;
}


console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7));  // 5
console.log(prevPrime(4));  // 3
console.log(prevPrime(2));  // null
console.log(prevPrime(1));  // null