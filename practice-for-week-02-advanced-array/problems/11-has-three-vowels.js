/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

// Your code here

const isVowel = letter => {
    const vowels = 'aeiou';
    return vowels.includes(letter);
}

const hasThreeVowels = function (str) {
    const chars = str.split('');
    const vowelsArr = [];

    chars.forEach(el => {
        el = el.toLowerCase();
        if (!vowelsArr.includes(el) && isVowel(el)) vowelsArr.push(el)
    });

    return vowelsArr.length > 2;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
