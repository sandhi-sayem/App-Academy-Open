// your code here
const removeVowel = word => {
    const vowels = 'aeiou'
    let newWord = '';

    for (let letter of word)
        if (!vowels.includes(letter))
            newWord += letter;

    return newWord;
}

const abbreviateWords = sentence => {
    const words = sentence.split(' ');
    const newSentence = [];

    for (let word of words)
        if (word.length > 4)
            newSentence.push(removeVowel(word));
        else
            newSentence.push(word);

    return newSentence.join(' ');
}

console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg