// your code here
const pitPat = max => {
    const arr = [];

    for (let i = 4; i <= max; i += 2)
        if ((i % 4 === 0 || i % 6 === 0) && i % 12 !== 0)
            arr.push(i);

    return arr;
}


console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]
console.log(pitPat(50)); 