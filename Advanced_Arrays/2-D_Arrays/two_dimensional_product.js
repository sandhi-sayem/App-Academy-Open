// your code here
const twoDimensionalProduct = arr => {
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
        const subArr = arr[i];

        for (let j = 0; j < subArr.length; j++)
            product *= subArr[j];
    }

    return product;
}

let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88