// your code here
const initials = str => {
    const arr = [];
    for (let word of str.split(' '))
        arr.push(word[0].toUpperCase());

    return arr.join('');
}

console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'