function eitherStringIncluded(sentence, word1, word2) {
    // your code here...
    const lowerSentence = sentence.toLowerCase();
    return lowerSentence.includes(word1.toLowerCase()) || lowerSentence.includes(word2.toLowerCase());
}

console.log(eitherStringIncluded("how now brown cow?", "panther", "cow")); //=> true
console.log(eitherStringIncluded("Question?", "Answer", "?")); //=> true
console.log(eitherStringIncluded("I love programming", "apple", "potato")); //=> false
console.log(eitherStringIncluded("Dance party!", "?", "what")); //=> false