// function aCounter(word) {
//   let index = 0;
//   let count = 0;
//   while (index < word.length) {
//     let char = word[index];
//     if (char === "a" || char === "A") {
//       count += 1;
//     }
//     index++;
//   }
//   return count;
// };

function aCounter(word) {
    let count = 0;

    for (let i = 0; i < word.length; i++)
        if (word[i].toUpperCase() === 'A')
            count++;

    return count;
};

console.log(aCounter("apple")); // => 1
console.log(aCounter("appleapple")); // => 2
console.log(aCounter("aAapple")); // => 3