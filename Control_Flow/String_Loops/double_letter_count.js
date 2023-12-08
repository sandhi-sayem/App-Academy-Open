function doubleLetterCount(string) {
    // your code here
    let count = 0;
    for (let i = 1; i < string.length; i++)
        if (string[i] === string[i - 1])
            count++;

    return count;
}

console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1