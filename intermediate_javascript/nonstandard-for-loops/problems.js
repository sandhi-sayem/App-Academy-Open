function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    const oddArray = [];
    for (let i = 1; i < arr.length; i += 2)
        oddArray.push(arr[i]);

    return oddArray;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here

    // using reverse
    // const oddArray = [];
    // for (let i = 1; i < arr.length; i += 2)
    //     oddArray.push(arr[i]);

    // return oddArray.reverse();

    // without sort function
    const x = arr.length % 2 === 0 ? arr.length - 1 : arr.length - 2;
    const oddArray = [];
    for (let i = 1; i < arr.length; i += 2)
        oddArray.push(arr[i]);
    return oddArray.reverse();
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here

    // without using map
    const tmpArray = [];
    for (let i = 1; i < arr.length; i *= 2)
        tmpArray.push(arr[i]);

    return tmpArray;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    const tmpArray = [];
    for (let i = 1; i < arr.length; i *= n)
        tmpArray.push(arr[i]);

    return tmpArray;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    return arr.slice(0, Math.ceil(arr.length / 2));

}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    return arr.slice(Math.ceil(arr.length / 2), arr.length);
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}