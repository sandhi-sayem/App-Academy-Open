// your code here
function uncompress(str) {
    let uncompressed = '';
    for (let i = 1; i < str.length; i += 2)
        for (let j = 1; j <= Number(str[i]); j++)
            uncompressed += str[i - 1];

    return uncompressed;
}


console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'