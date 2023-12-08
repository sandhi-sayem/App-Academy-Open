// your code here
const isVowel = letter => {
    const vowel = 'aeiou';

    return vowel.includes(letter.toLowerCase());
}

const lastVowel = function (str) {
    for (let i = str.length - 1; i >= 0; i--)
        if (isVowel(str[i]))
            return str[i];

    return null;
}


console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null