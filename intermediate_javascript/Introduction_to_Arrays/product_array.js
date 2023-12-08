// your code here
function productWithReduce(arr) {
    return arr.reduce((a, b) => a * b);
}



console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12