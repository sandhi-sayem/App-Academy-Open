// your code here
const tripler = arr => {
    const newArr = [];

    for (let num of arr)
        newArr.push(num * 3);

    return newArr;
}


console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]