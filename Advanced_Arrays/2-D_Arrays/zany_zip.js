// Your code here

const zanyZip = function (array1, array2) {
    const arr = [];

    for (let i = 0; i < array1.length || i < array2.length; i++) {
        let arr1Value = array1[i];
        let arr2Value = array2[i];

        if (arr1Value === undefined)
            arr1Value = null;
        if (arr2Value === undefined)
            arr2Value = null;

        arr.push([arr1Value, arr2Value]);
    }

    return arr;
}

console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]