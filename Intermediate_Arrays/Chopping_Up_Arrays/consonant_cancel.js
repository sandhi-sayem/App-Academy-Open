const removeFirst = word => {
    const vowels = 'aeiou';

    for (let i = 0; i < word.length; i++)
        if (vowels.includes(word[i].toLowerCase()))
            return word.slice(i);

    return word;
}

function consonantCancel(sentence) {
    // your code here
    const words = sentence.split(' ');
    const newSentence = [];

    for (let word of words)
        newSentence.push(removeFirst(word));

    return newSentence.join(' ');

}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"