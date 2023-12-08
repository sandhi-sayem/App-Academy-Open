// your code here
const longWords = words => {
    const newWords = [];

    for (let word of words)
        if (word.length > 5)
            newWords.push(word);

    return newWords;
}


console.log(longWords(['bike', 'skateboard', 'scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka', 'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]