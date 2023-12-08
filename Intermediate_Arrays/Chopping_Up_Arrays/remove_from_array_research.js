
function removeFromArray(location, arr) {
    // Your code here
    if (location.toUpperCase() === 'FRONT') {
        arr.shift();
    }
    else if (location.toUpperCase() === 'BACK')
        arr.pop();
    else
        console.log('ERROR');
}

testArray = [0, 1, 2, 3, 4]

removeFromArray("FRONT", testArray)
console.log(testArray) // [1,2,3,4]

removeFromArray("BACK", testArray)
console.log(testArray) // [1,2,3]

removeFromArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [1,2,3]
