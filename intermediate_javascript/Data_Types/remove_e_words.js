// your code here
function removeEWords(sentence) {
    const arr = sentence.split(' ');
    let newSentence = [];
    for (let word of arr) {
        if (word.indexOf('e') === -1)
            newSentence.push(word);
    }

    return newSentence.join(' ');
}


console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
console.log(removeEWords('Enter the'));