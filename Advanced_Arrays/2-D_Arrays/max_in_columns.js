function maxColumn(matrix) {
    // your code here...
    const arr = [];

    for (let column = 0; column < matrix.length; column++) {
        let currentMax = -Infinity;
        for (let row = 0; row < matrix.length; row++)
            if (matrix[row][column] > currentMax)
                currentMax = matrix[row][column];

        arr.push(currentMax);
    }

    return arr;
}

matrix = [[5, 9, 21],
[9, 19, 6],
[12, 14, 15]]

console.log(maxColumn(matrix)); // [12, 19, 21]

