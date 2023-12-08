// Your code here

// need a isPrime function to find prime number
const isPrime = function (num) {
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (num % i === 0) return false;

    return num > 1;
}
// check numbers greater upto infinity
const nextPrime = function (num) {
    while (true) {
        if (isPrime(++num))
            return num;
    }
}


console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101