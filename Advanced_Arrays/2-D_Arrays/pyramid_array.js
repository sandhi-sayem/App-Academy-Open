// For example, given 2, 3, 7, 5, 9 as the base, we should construct this pyramid:
//
//           85
//         37  48
//       15  22  26
//    5   10   12   14
//  2   3    7    5    9
//
//
// Your code here
const sum = arr => {
    const newArr = [];
    for (let i = 0; i < arr.length - 1; i++)
        newArr.push(arr[i] + arr[i + 1]);

    return newArr;
}

const pyramidArray = base => {
    const newArr = [base];
    for (let i = 0; i < base.length - 1; i++) {
        newArr.unshift(sum(newArr[0]));
    }

    return newArr;
}


let p1 = pyramidArray([2, 3, 7, 5, 9]);
console.log(p1);
// [
//   [ 85 ],
//   [ 37, 48 ],
//   [ 15, 22, 26 ],
//   [ 5, 10, 12, 14 ],
//   [ 2, 3, 7, 5, 9 ]
// ]

let p2 = pyramidArray([2, 2, 2, 2]);
console.log(p2);
// [
//   [ 16 ],
//   [ 8, 8 ],
//   [ 4, 4, 4 ],
//   [ 2, 2, 2, 2 ]
// ]