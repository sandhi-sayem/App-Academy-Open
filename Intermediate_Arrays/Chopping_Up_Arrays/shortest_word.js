// Your code here
const shortestWord = sentence => {
    const arr = sentence.split(' ');
    let str = arr[0];

    for (let i = 1; i < arr.length; i++)
        if (arr[i].length <= str.length)
            str = arr[i];

    return str;
}


console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'