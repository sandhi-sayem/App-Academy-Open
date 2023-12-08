// your code here
const yeller = arr => {
    const newArr = [];

    for (let word of arr)
        newArr.push(word.toUpperCase());

    return newArr;
}



console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]