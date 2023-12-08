// your code here
function hasVowel(str) {
    const vowel = 'aeiou';
    for (let letter of str)
        if (vowel.includes(letter)) return true;

    return false;
}


console.log(hasVowel('dog')); // true
console.log(hasVowel('conventional')); // true
console.log(hasVowel('rhythm')); // false