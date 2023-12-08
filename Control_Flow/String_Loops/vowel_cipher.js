function vowelCipher(string) {
    // your code here
    const vowels = 'aeiou';
    let modified = '';
    for (let i = 0; i < string.length; i++) {
        let oldIndex = vowels.indexOf(string[i]);
        if (oldIndex !== -1) {
            modified += vowels[++oldIndex % vowels.length];
        }
        else
            modified += string[i];
    }

    return modified;
}


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"