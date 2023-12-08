// function eCounter(word) {
//   let count = 0;

//   for (let index = 0; index < word.length; index++) {
//     let char = word[index];
//     if (char === "e" || char === "E") {
//       count += 1;
//     }
//   }

//   return count;
// };

function eCounter(word) {
    let count = 0;
    let index = 0;

    while (index < word.length) {
        if (word[index].toLowerCase() === 'e')
            count++;
        index++;
    }

    return count;
};

console.log(eCounter("apple")); // => 1
console.log(eCounter("appleapple")); // => 2
console.log(eCounter("Appleee")); // => 3