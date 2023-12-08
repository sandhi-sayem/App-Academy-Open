// Your code here
function tripletTrue(str) {
    for (let i = 2; i < str.length; i++)
        if (str[i] === str[i - 2] && str[i] === str[i - 1])
            return true;

    return false;
}

console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false