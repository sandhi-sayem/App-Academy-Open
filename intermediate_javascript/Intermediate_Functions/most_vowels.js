function mostVowels(sentence) {
    // your code here
    let index = 0;
    const arr = sentence.split(' ');
    for (let i = 0; i < arr.length; i++)
        if (getVowelCount(arr[i]) > index)
            index = i;

    return arr[index];
}

const getVowelCount = word => {
    const vowels = 'aeiou';
    let count = 0;
    for (let i = 0; i < word.length; i++)
        if (vowels.includes(word[i]))
            count++;

    return count;
}

console.log(mostVowels("what a wonderful life")); // "wonderful"