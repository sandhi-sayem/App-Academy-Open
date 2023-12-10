// your code here
const longestWord = sentence => {
    const arr = sentence.split(' ');
    let str = '';

    for (let i = 0; i < arr.length; i++)
        if (arr[i].length > str.length)
            str = arr[i];

    return str;
}


console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''