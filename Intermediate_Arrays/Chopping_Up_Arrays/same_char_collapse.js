function sameCharCollapse(str) {
    // your code here
    let dupExists = true;

    while (dupExists) {
        let chars = str.split('');
        dupExists = false;

        for (let i = 0; i < str.length - 1; i++) {
            if (chars[i] === chars[i + 1]) {
                chars[i] = '';
                chars[i + 1] = '';
                dupExists = true;
                break;
            }
        }

        str = chars.join('');
    }

    return str;

}

console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv