function countVowels(word) {
    // your code here...
    const vowels = 'aeiou';
    let counter = 0;

    for (let letter of word) {
        if (vowels.includes(letter.toLowerCase()))
            counter++;
    }

    return counter;
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2