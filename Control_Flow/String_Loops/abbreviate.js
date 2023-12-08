// your code here
function abbreviate(word) {
    const vowels = 'aeiou';
    let abbreviation = '';
    for (let letter of word)
        if (!vowels.includes(letter.toLowerCase()))
            abbreviation += letter;

    return abbreviation;
}


console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'