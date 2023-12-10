// Your code here
const matrixAddition = (array1, array2) => {
    const newArr = [];

    for (let row = 0; row < array1.length; row++) {
        const tempArray = [];
        for (let column = 0; column < array1[row].length; column++)
            tempArray.push(array1[row][column] + array2[row][column]);

        newArr.push(tempArray);
    }

    return newArr;
}


let matrixA = [[2, 5], [4, 7]]
let matrixB = [[9, 1], [3, 0]]
let matrixC = [[-1, 0], [0, -1]]
let matrixD = [[2, -5], [7, 10], [0, 1]]
let matrixE = [[0, 0], [12, 4], [6, 3]]

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]