function luckyNumbers(matrix) {
    // your code here...
    const rowLength = matrix.length;
    const colLength = matrix[0].length;
    const arr = [];

    for (let i = 0; i < rowLength; i++) {
        let minIndex = 0;

        for (let j = 1; j < colLength; j++)
            if (matrix[i][j] < matrix[i][minIndex])
                minIndex = j;

        let maxIndex = 0;
        for (let k = 1; k < rowLength; k++)
            if (matrix[k][minIndex] > matrix[maxIndex][minIndex])
                maxIndex = k;

        if (maxIndex === i)
            arr.push(matrix[i][minIndex]);
    }

    return arr;
}


matrix = [[5, 9, 21],
[9, 19, 6],
[12, 14, 15]]

console.log(luckyNumbers(matrix)); // [12]

matrix = [[5, 10, 8, 6],
[10, 2, 7, 9],
[21, 15, 19, 10]]

console.log(luckyNumbers(matrix)); // [10]
