// Your code here
function reverb(str) {
    if (typeof str !== 'string') return null;

    const vowels = 'aeiou';

    for (let i = str.length - 1; i >= 0; i--)
        if (vowels.includes(str[i].toLowerCase()))
            return str.concat(str.slice(i));

    return str;
}


console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null