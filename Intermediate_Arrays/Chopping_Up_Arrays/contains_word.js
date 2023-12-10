// your code here
const containsWord = function (sentence, targetWord) {
    const words = sentence.split(' ');
    for (let word of words)
        if (targetWord.toLowerCase() === word.toLowerCase())
            return true;

    return false;
}

console.log(containsWord('sounds like a plan', 'like')); // true
console.log(containsWord('They are great', 'they')); // true
console.log(containsWord('caterpillars are great animals', 'cat')); // false
console.log(containsWord('Cast the net', 'internet')); // false