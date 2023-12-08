// your code here
function avgVal(arr) {
    if (arr.length < 1) return null;

    let avg = 0;
    for (let num of arr)
        avg += num;

    return avg / arr.length;
}


console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null