// your code here
const minValue = arr => {
    let lowest = null;

    for (let num of arr)
        if (num < lowest || lowest === null)
            lowest = num;

    return lowest;
}


console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3])); // -7
console.log(minValue([])); // null