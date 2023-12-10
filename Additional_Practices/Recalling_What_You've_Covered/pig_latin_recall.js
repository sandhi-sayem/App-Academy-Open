// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word) {
    // your code here...
    const vowels = 'aeiou';

    if (vowels.includes(word[0].toLowerCase()))
        return word.concat('yay');

    for (let i = 1; i < word.length; i++)
        if (vowels.includes(word[i]))
            return word.slice(i, word.length).concat(word.slice(0, i)).concat('ay');
};

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"