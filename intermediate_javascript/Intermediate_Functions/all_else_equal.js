function allElseEqual(arr) {
    // your code here
    const sum = getSum(arr);
    for (let element of arr)
        if (element === sum)
            return element;

    return null;
}

function getSum(arr) {
    let sum = 0;
    for (let element of arr)
        sum += element;

    return sum / 2.0;
}

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null