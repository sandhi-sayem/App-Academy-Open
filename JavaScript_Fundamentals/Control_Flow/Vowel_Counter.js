function countVowels(word) {
    // your code here...
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let letter of word) {
        if (vowels.includes(letter))
            count++;
    }
    return count;
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2