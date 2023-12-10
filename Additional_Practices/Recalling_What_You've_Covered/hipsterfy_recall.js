// your code here
const removeLastVowel = word => {
    const vowels = 'aeiou';
    let newWord = '';

    for (let i = word.length - 1; i >= 0; i--)
        if (vowels.includes(word[i]))
            return word.slice(0, i).concat(word.slice(i + 1));

    return word;
}

const hipsterfy = sentence => {
    const words = sentence.split(' ');
    const newSentence = [];

    for (let word of words)
        newSentence.push(removeLastVowel(word));

    return newSentence.join(' ');
}


console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'