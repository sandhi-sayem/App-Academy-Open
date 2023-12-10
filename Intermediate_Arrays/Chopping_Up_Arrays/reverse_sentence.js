// your code here
const reverseSentence = sentence => {
    const words = sentence.split(' ');
    const newSentence = [];

    for (let i = words.length; i >= 0; i--)
        newSentence.push(words[i]);

    return newSentence.join(' ');
}


console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'