// your code here
const rotate = (array, num) => {
    if (num > 0) {
        for (let i = 0; i < num; i++)
            array.unshift(array.pop());
    }
    else {
        for (let i = 0; i > num; i--)
            array.push(array.shift());
    }
}



let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]