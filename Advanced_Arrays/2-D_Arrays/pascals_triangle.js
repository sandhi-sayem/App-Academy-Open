// For example, here are the first 5 levels of Pascal's triangle:
//       1
//      1 1
//     1 2 1
//    1 3 3 1
//   1 4 6 4 1

// Your code here
const sum = arr => {
    const newArr = [];

    for (let i = 0; i <= arr.length; i++) {
        let start = arr[i - 1] === undefined ? 0 : arr[i - 1];
        let end = arr[i] === undefined ? 0 : arr[i];
        newArr.push(start + end);
    }

    return newArr;

}

const pascalsTriangle = num => {
    const arr = [[1]];
    for (let i = 1; i < num; i++)
        arr.push(sum(arr[arr.length - 1]));

    return arr;
}


console.log(pascalsTriangle(5));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]

console.log(pascalsTriangle(7));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1],
//     [1, 5, 10, 10, 5, 1],
//     [1, 6, 15, 20, 15, 6, 1]
// ]