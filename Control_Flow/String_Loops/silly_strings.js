// Your code here
function sillyString(str) {
    const vowels = 'aeiou';
    let silly = '';

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (vowels.includes(letter))
            silly += letter + 'b' + letter;
        else
            silly += str[i];
    }

    return silly;
}


console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber