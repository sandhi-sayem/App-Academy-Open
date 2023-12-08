const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (num % i === 0)
            return false;

    return num > 1;
}

function pickPrimes(array) {
    // your code here
    const newArray = [];

    for (let i = 0; i < array.length; i++)
        if (isPrime(array[i]))
            newArray.push(array[i]);

    return newArray;
}


console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]