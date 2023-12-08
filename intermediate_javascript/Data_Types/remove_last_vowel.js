// your code here
const isVowel = letter => {
    const vowels = 'aeiou';
    return vowels.includes(letter);
}

const removeLastVowel = function (word) {
    for (let i = word.length - 1; i >= 0; i--)
        if (isVowel(word[i]))
            return word.slice(0, i) + word.slice(i + 1);

    return word;
}


console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'