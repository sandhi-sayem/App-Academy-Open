// your code here
const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (num % i === 0) return false;

    return num > 1;
}

const choosePrimes = function (arr) {
    const primeArray = [];
    for (let element of arr)
        if (isPrime(element))
            primeArray.push(element);

    return primeArray;
}


console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]