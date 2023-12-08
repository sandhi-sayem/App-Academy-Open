// your code here
const firstVowel = function (str) {
    for (let letter of str)
        if (isVowel(letter))
            return letter;

    return null;
}

const isVowel = letter => {
    const vowel = 'aeiou';

    return vowel.includes(letter);
}


console.log(firstVowel('battery')); // 'a'
console.log(firstVowel('tunnel')); // 'u'
console.log(firstVowel('dog')); // 'o'
console.log(firstVowel('conventional')); // 'o'
console.log(firstVowel('rhythm')); // null