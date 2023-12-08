// Your code here
function hasThreeVowels(str) {
    const vowels = 'aeiou';
    const arr = [];
    for (let letter of str) {
        if (vowels.includes(letter) && !arr.includes(letter))
            arr.push(letter);
        if (arr.length === 3)
            return true;
    }
    return false;
}


console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false