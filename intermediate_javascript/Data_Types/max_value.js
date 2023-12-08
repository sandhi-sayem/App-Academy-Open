// your code here
const maxValue = nums => {
    let max = null;
    for (let num of nums)
        if (num > max || max === null)
            max = num;

    return max;
}


console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3])); // 3
console.log(maxValue([])); // null